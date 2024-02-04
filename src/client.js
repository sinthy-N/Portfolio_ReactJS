// Importation de la fonction createClient du module @supabase/supabase-js
import { createClient } from '@supabase/supabase-js';

// Définition de l'URL et de la clé d'API Supabase
const supabaseUrl = 'https://byfaeklkvolqsbnuibbn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5ZmFla2xrdm9scXNibnVpYmJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcwNDY1MjUsImV4cCI6MjAyMjYyMjUyNX0.3DNgzPDelRyb-6hPBKtTCKeAWQmyi6_rmJd3tbLSX4g';

// Création de l'objet supabase en utilisant la fonction createClient avec l'URL et la clé d'API
export const supabase = createClient(supabaseUrl, supabaseKey);
