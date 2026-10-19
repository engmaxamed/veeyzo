// 1. Supabase URL & Anon Key
const SUPABASE_URL = 'https://gezksowsjlflopmgobum.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_9dbh2H586WbMqzXWTcwlfQ_Ap3Ug7qz';

// 2. Abuur Supabase Client oo ku keydi Global Window si looga dhex isticmaalo bogagga oo dhan
if (window.supabase && typeof window.supabase.createClient === 'function') {
  // Waxaan abuurnay laba magac oo isku mid ah (supabaseClient iyo supabase) si koodh kasta oo aad qorto u aqoonsado
  const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  window.supabaseClient = client;
  window.supabase = client;
}
