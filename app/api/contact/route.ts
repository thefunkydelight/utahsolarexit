import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, state, solarCompany, contractType, issues, contractLength, monthlyPayment } = body;

    if (!name || !phone || !state || !solarCompany || !contractType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Solar Exit Utah <onboarding@resend.dev>",
      to: process.env.LEAD_EMAIL ?? "madeline@solarexitpartners.com",
      subject: `New Lead: ${name} — ${state} — ${solarCompany}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0A0A0A; color: #F8F8F7; padding: 24px; border-radius: 12px;">
          <h2 style="color: #FFD700; margin-top: 0;">New Solar Exit Utah Lead</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #858481; width: 140px;">Name</td><td style="padding: 8px 0; color: #F8F8F7;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #858481;">Phone</td><td style="padding: 8px 0; color: #F8F8F7;"><a href="tel:${phone}" style="color: #FFD700;">${phone}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #858481;">State</td><td style="padding: 8px 0; color: #F8F8F7;">${state}</td></tr>
            <tr><td style="padding: 8px 0; color: #858481;">Solar Company</td><td style="padding: 8px 0; color: #F8F8F7;">${solarCompany}</td></tr>
            <tr><td style="padding: 8px 0; color: #858481;">Contract Type</td><td style="padding: 8px 0; color: #F8F8F7;">${contractType}</td></tr>
            <tr><td style="padding: 8px 0; color: #858481;">Issues</td><td style="padding: 8px 0; color: #F8F8F7;">${Array.isArray(issues) ? issues.join(", ") : issues}</td></tr>
            <tr><td style="padding: 8px 0; color: #858481;">Contract Length</td><td style="padding: 8px 0; color: #F8F8F7;">${contractLength}</td></tr>
            ${monthlyPayment ? `<tr><td style="padding: 8px 0; color: #858481;">Monthly Payment</td><td style="padding: 8px 0; color: #F8F8F7;">${monthlyPayment}</td></tr>` : ""}
          </table>
          <p style="margin-top: 20px; color: #858481; font-size: 12px;">Submitted via solarexitutah.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
