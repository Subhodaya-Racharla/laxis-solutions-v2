import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { name, phone, email, message } = await req.json();
    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone required" }, { status: 400 });
    }
    const { error } = await supabaseAdmin
      .from("leads")
      .insert({ name, phone, email, message });
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead insert error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
