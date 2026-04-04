import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { full_name, phone, email, project_details } = body

    const { data, error } = await resend.emails.send({
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

    console.log("RESEND DATA:", data)
    console.log("RESEND ERROR:", error)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.log("ROUTE ERROR:", error)
    return NextResponse.json(
      { error: "Something went wrong sending the email" },
      { status: 500 }
    )
  }
}