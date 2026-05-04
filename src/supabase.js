import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://jclazovcooexpdwkekty.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpjbGF6b3Zjb29leHBkd2tla3R5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NjI3NTEsImV4cCI6MjA5MjMzODc1MX0.MDihbq090mZmzrWtuJ_na8SNP9Yzue3QdzW51pSZ4Bg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
