import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yohonquollraclodvxxe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvaG9ucXVvbGxyYWNsb2R2eHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcwMDY0MjUsImV4cCI6MjAxMjU4MjQyNX0.3PkvsnsU5Wq87WDLkhTdUz8Aez35swrpJV5Xq7bQ520';
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;