import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://umhkueasudeljlunriyg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtaGt1ZWFzdWRlbGpsdW5yaXlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MzkyNTksImV4cCI6MjA2MzAxNTI1OX0.ugQL8vbTRHt_jYHcWbEZhSQg-QjnroJKrWn9NWwLavQ';
export const supabase = createClient(supabaseUrl, supabaseKey);