
import CoursePurchaseSuccess from "@/emails/CourseBuyingEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request : Request) {
    const {email,name} = await request.json();
    await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Course Purchase Successfull",
    react: CoursePurchaseSuccess({name}),
  });
}