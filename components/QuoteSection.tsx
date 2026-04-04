"use client"

import React from "react"
import { supabase } from "../lib/supabase"

export default function QuoteSection() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget

    try {
      const formData = new FormData(form)

      const full_name = formData.get("full_name")
      const phone = formData.get("phone")
      const email = formData.get("email")
      const project_details = formData.get("project_details")

      const { error: dbError } = await supabase.from("leads").insert([
        {
          full_name,
          phone,
          email,
          project_details,
        },
      ])

      if (dbError) {
        alert(dbError.message)
        return
      }

      const emailResponse = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name,
          phone,
          email,
          project_details,
        }),
      })

      const emailResult = await emailResponse.json()

      if (!emailResponse.ok) {
        alert(emailResult.error || "Lead saved, but email failed.")
        return
      }

      alert("Quote request sent!")
      form.reset()
    } catch (err) {
      console.log(err)
      alert("Unexpected error happened. Check console.")
    }
  }

  return (
    <section id="quote" className="mx-auto max-w-4xl px-6 py-20">
      <div className="rounded-3xl bg-neutral-900 p-8 text-white md:p-12">
        <p className="text-sm uppercase tracking-[0.2em] text-neutral-300">
          Free Estimate
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Ready to upgrade your floor?
        </h2>

        <p className="mt-4 max-w-2xl text-neutral-300">
          Tell us about your project and we’ll get back to you with the next steps.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            required
            className="rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white outline-none"
          />

          <textarea
            name="project_details"
            placeholder="Tell us about your project"
            rows={5}
            className="rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white outline-none"
          />

          <button
            type="submit"
            className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
          >
            Request a Quote
          </button>
        </form>
      </div>
    </section>
  )
}