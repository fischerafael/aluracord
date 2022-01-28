import { createClient } from "@supabase/supabase-js";

const URL = process.env.NEXT_PUBLIC_URL!;
const ANON_KEY = process.env.NEXT_PUBLIC_ANON!;

export const db = createClient(URL, ANON_KEY);
