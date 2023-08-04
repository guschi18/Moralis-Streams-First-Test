import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(
"https://hrotrbypiznemfzobcfg.supabase.co",
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhyb3RyYnlwaXpuZW1mem9iY2ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4ODQzMjMsImV4cCI6MjAwNjQ2MDMyM30.eR0UY9P2FFz8aMr-l3TK4d_-0HJu-p7ft0zK-ShhKcE"
);


serve(async (req) => {
  const { confirmed, txs } = await req.json()
  

try {

if(confirmed){
  const {error} = await supabase.from("moralisStreams").insert([
    {
      hash: txs[0].hash,
      value: txs[0].value,
      from: txs[0].fromAddress,
      to: txs[0].toAddress,
      }
  ]);


if(error){
  console.error(error)
}


}

}catch(error){
  console.error(error)
}

return new Response({ok:true}, {status: 200})
});

