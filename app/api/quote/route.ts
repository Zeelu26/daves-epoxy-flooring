import { NextResponse } from "next/server"
import { Resend } from "resend"
import { supabase } from "@/lib/supabase"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { full_name, phone, email, project_details } = body

    if (!full_name || !phone || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const { error: dbError } = await supabase.from("leads").insert([
      {
        full_name,
        phone,
        email,
        project_details,
      },
    ])

    if (dbError) {
      console.log("SUPABASE ERROR:", dbError)
      return NextResponse.json(
        { error: "Failed to save lead" },
        { status: 500 }
      )
    }

    const { error: emailError } = await resend.emails.send({
      from: "Dave's Epoxy Flooring <onboarding@resend.dev>",
      to: ["zeelpatel881@gmail.com"],
      subject: "New Quote Request - Dave's Epoxy Flooring",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${full_name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Details:</strong> ${project_details || "Not provided"}</p>
      `,
    })

    if (emailError) {
      console.log("RESEND ERROR:", emailError)
      return NextResponse.json(
        { error: "Lead saved but email failed to send" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.log("ROUTE ERROR:", error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}