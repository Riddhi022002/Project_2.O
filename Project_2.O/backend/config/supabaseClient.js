const { createClient } = require("@supabase/supabase-js");
const WebSocket = require("ws");

require("dotenv").config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY,
  {
    realtime: {
      transport: WebSocket
    }
  }
);

module.exports = supabase;