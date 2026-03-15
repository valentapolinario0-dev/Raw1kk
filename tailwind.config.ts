

Roblox Pastebin Script

13 de mar.
at 20:13
Create a site raw with backend and frontend raws for roblox TextBox exemplo: loadstring(game:HttpGet("https://pastebin.com/raw/RA2Z4x75"))()


I need to understand your request better. It seems you want a site that hosts raw text/scripts (like Pastebin) that can be loaded via Roblox's loadstring(game:HttpGet(...)) pattern.

Update bun.lock dep graph

Details
Preview





13 de mar.
at 20:13
Project type: Pastebin clone
Auth: No auth needed


Thought for 10s
A Pastebin clone with raw URLs — perfect for Roblox loadstring. I'll build a dark, code-focused site with a database backend. Let me enable Lovable Cloud first.


1 tool used





13 de mar.
at 20:14
Submitted "Enable Cloud"

Thought for 18s
Connected to Lovable Cloud


Create pastes database table

Build raw endpoint edge function

Build frontend UI

Details
Preview
RawBin is ready! 🎉 Here's what was built:

Frontend: Dark hacker-themed paste creator with JetBrains Mono font, green accent colors
Database: Pastes table with auto-generated IDs, view counting
Edge Function: /raw?id=PASTE_ID endpoint that returns plain text — compatible with Roblox's loadstring(game:HttpGet("url"))()
View Page: Shows the paste with copyable raw URL and loadstring code
Lovable Cloud powers the database and edge function — no external setup needed.






13 de mar.
at 20:22
Internal error in raws!




Thought for 20s
Fix raw endpoint

Details
Preview
Fixed two issues:

Raw URL: Was using non-existent VITE_SUPABASE_PROJECT_ID — now uses VITE_SUPABASE_URL instead
Edge function: Switched from esm.sh to npm: import for better stability
The edge function is working correctly (404 for non-existent pastes is expected). Try creating a paste to test the full flow!






14 de mar.
at 00:09
Raw URL https://juarsobkvdseycvphfup.supabase.co/functions/v1/raw?id=f3bd3e5a329e

Internal error:(




Thought for 14s
Fix raw endpoint crash

Details
Preview
Fixed the raw endpoint — the npm: import wasn't compatible with the edge runtime. Switched to a pinned esm.sh import and redeployed. The raw URL now returns your paste content correctly (status 200). ✅






14 de mar.
at 00:12
Everything is working now. Create my link to open this page with the same information, and it will look like this: "https://pastescriptsglobal.com.br"




Thought for 10s
To connect your custom domain pastescriptsglobal.com.br, you need to:

Publish your project first (if not already published)
Go to Project Settings → Domains
Click Connect Domain and enter pastescriptsglobal.com.br
Follow the instructions to add DNS records at your domain registrar:
A Record: @ → 185.158.133.1
A Record: www → 185.158.133.1
TXT Record: _lovable → (the value Lovable provides)
Wait for DNS propagation (up to 72 hours)
Would you like to publish your project first so we can then set up the domain?






Update site info for publish

Details
Preview


14 de mar.
at 00:16
Without your link, I only want mine so it doesn't look like it was made by you. I want it like this: "by @AkariXdNahh"




Thought for 11s
Let me check where branding appears in the app.

Add author credit to UI

Details
Preview
Added "by @AkariXdNahh" to the header on both pages. To remove the Lovable badge, go to Project Settings → Hide 'Lovable' Badge.







Ask Lovable...







Timeline
Changes
Fetched knowledge
Fetched knowledge
Fetched knowledge
Read
client.ts
Listed
integrations
Listed
supabase
Read
client.ts
Now let me create the database table for pastes:

Ran migration
Ran migration
The security warnings are expected for a public pastebin (no auth, anyone can create/view). Let me now build the edge function and frontend in parallel.

Read
src/integrations/supabase/types.ts
Good, types are ready. Now let me check config.toml and build everything:

Read
config.toml
Now let me build everything in parallel — edge function, design system, and all frontend components:

      },
    },
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
