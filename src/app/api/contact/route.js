import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
    const { email, message } = await req.json()

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        // to: 'shiatsuconnie@googlemail.com',
        to: 'jessica.antoinetteuk@gmail.com',
        subject: 'new inquirey',
        html:`<p>From: ${email}</p>
            <p>${message}</p>`
    })

    return Response.json({ success: true })
}