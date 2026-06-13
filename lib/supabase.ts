import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  visible: boolean;
  created_at: string;
}

export interface Order {
  id: string;
  product_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  amount: number;
  status: string;
  created_at: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  message?: string;
  created_at: string;
}
