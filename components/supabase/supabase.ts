import { createClient } from "@supabase/supabase-js";

const supabaseurl = "https://jkmvvtkdsvstwkksczbv.supabase.co";
const supabasekey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprbXZ2dGtkc3ZzdHdra3NjemJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwMzk0NDIsImV4cCI6MjA2NzYxNTQ0Mn0.c60g_VH2dgAI1E7jyTOMNq14PeKyFeAdidAQPXUYaJk";

export const supabase = createClient(supabaseurl, supabasekey);