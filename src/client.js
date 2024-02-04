import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://byfaeklkvolqsbnuibbn.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5ZmFla2xrdm9scXNibnVpYmJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwNDY1MjUsImV4cCI6MjAyMjYyMjUyNX0.3DNgzPDelRyb-6hPBKtTCKeAWQmyi6_rmJd3tbLSX4g'
export const supabase = createClient(supabaseUrl, supabaseKey)
