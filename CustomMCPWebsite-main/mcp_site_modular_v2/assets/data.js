window.SITE = {
  brand: {
    name: 'Personal AI Worker',
    email: 'Colindmcintyre@gmail.com',
    phone: '7076661573',
    domain: 'custommcpwebsite.onrender.com'
  },
  pricing: {
    package: '$19',
    custom: 'Custom'
  },
  checkout: {
    packageUrl: 'https://www.paypal.com/ncp/payment/HSXN7ZEXM5TTG',
    packageDownloadUrl: 'https://drive.google.com/drive/folders/1sUlcqKTnwsSrwAX6QDlkiq0cOSuDBg6h?usp=drive_link',
    note: 'Point your PayPal success URL to success.html and your cancel URL to cancel.html.'
  },
  package: {
    name: 'AI Worker Starter Package',
    price: '$19',
    description: 'A one-time starter package for giving your AI assistant a real backend: deployable MCP infrastructure, OAuth, tool modules, Render setup notes, and copy-ready environment variable blocks.',
    bullets: [
      'Deployable Python backend your assistant can use as a tool workspace',
      'MCP endpoint, OAuth support, token fallback, and Render deployment notes',
      'Google, GitHub, Maps, ads, analytics, finance, voice, WordPress, and WooCommerce variable blocks',
      'Modular tool structure so you can add business workflows over time',
      'Setup guide written for builders and operators who want to get it running'
    ]
  },
  custom: {
    bullets: [
      'Done-with-you deployment and environment variable setup',
      'Custom tools for private APIs, internal systems, or client workflows',
      'AI worker planning around the business tasks you actually want handled',
      'OAuth, Render, GitHub, Google, voice, ads, or commerce setup support'
    ]
  },
  copy: {
    heroTitle: 'Turn your AI assistant into a worker with its own backend',
    heroBody: 'The AI Worker Starter Package gives you a deployable foundation where an assistant can connect to tools, accounts, and workflows. MCP is the infrastructure underneath; the outcome is simple: your AI has a real workspace for taking action.',
    heroNote: 'Buy once for $19, deploy on Render, paste your own secrets into Render, and start building practical AI operations workflows from a working base.',
    outcomes: [
      {
        title: 'Handle real workflow steps',
        body: 'Give an assistant a backend for looking up data, calling APIs, updating systems, creating records, and supporting repeatable operations.'
      },
      {
        title: 'Connect business accounts',
        body: 'Start with common blocks for Google, GitHub, Maps, ads, analytics, voice, finance, WordPress, WooCommerce, and more.'
      },
      {
        title: 'Own the foundation',
        body: 'Keep your own deployable backend instead of depending on another monthly automation layer for every new workflow idea.'
      }
    ],
    workerTasks: [
      'Draft, update, and organize documents or sheets through connected Google tools',
      'Inspect repositories, support setup work, and help manage technical project tasks',
      'Pull maps, analytics, ads, commerce, or finance data into one assistant workflow',
      'Support phone or voice workflows when you connect Twilio and OpenAI voice settings',
      'Keep lightweight memory so recurring tasks have context across sessions'
    ],
    integrations: [
      'Google OAuth, Drive, Docs, Sheets, Calendar, Maps, Ads, Analytics, and Search Console',
      'GitHub repositories and owner-scoped workflows',
      'Meta Ads, growth workflows, WordPress, and WooCommerce',
      'Twilio phone, OpenAI Realtime SIP, Mercury, and Alpaca'
    ],
    audiences: [
      'Small business owners who want AI to help with daily operations',
      'Solo operators and creators who need leverage without hiring a full team',
      'Consultants and builders packaging repeatable workflows for clients',
      'Technical users who want a practical MCP base without starting from a blank repo'
    ],
    included: [
      'Static site setup guide and grouped environment variable reference',
      'Backend scaffold for a personal AI worker tool server',
      'MCP/OAuth configuration notes with safer placeholder values',
      'Render deployment settings and copy buttons for variable blocks',
      'Package download path plus a custom setup path for hands-on help'
    ],
    featureCards: [
      {
        title: 'A real tool workspace',
        body: 'Your assistant gets a backend it can call when it needs to use tools, reach APIs, and support business workflows.'
      },
      {
        title: 'Built to extend',
        body: 'The Python tool modules are meant to grow with you. Add one workflow at a time instead of rebuilding the foundation.'
      },
      {
        title: 'Clear setup path',
        body: 'The guide separates Render settings, required core values, generated secrets, and optional integrations so setup feels manageable.'
      }
    ]
  },
  env: {
    renderBuild: '',
    renderPublishDirectory: 'CustomMCPWebsite-main/mcp_site_modular_v2',
    renderStart: 'Not needed for this static website. The backend package you buy has its own Render service settings.',
    rootDirectory: 'Leave blank for this static website on Render.',
    coreRenderBlock: `PYTHON_VERSION=3.11.9
PUBLIC_BASE_URL=
PUBLIC_HOST=`,
    mcpCoreBlock: `MCP_MOUNT_PATH=/mcp
MCP_ISSUER=
MCP_OAUTH_ENABLED=true
MCP_OAUTH_CLIENT_ID=mcp-personal
MCP_OAUTH_CLIENT_SECRET=
MCP_OAUTH_ALLOWED_REDIRECT_URIS=
MCP_ACCESS_TOKEN_TTL_SECONDS=3600
MCP_REFRESH_TOKEN_TTL_SECONDS=2592000
MCP_AUTH_CODE_TTL_SECONDS=600
MCP_SERVER_BEARER_TOKEN=
MCP_TOKEN_SIGNING_SECRET=
OAUTH_STATE_SECRET=`,
    oauthRoutesBlock: `ENABLE_OAUTH_ROUTES=true
EXPOSE_REFRESH_TOKEN_IN_CALLBACK=false`,
    toolExposureBlock: `EXPOSE_ATOMIC_TOOLS=false
EXPOSE_CATEGORY_TOOLS=true`,
    memoryBlock: `MEMORY_FILE_PATH=/tmp/memory.json
MAX_MEMORY_ENTRIES=100`,
    domainBlock: `PUBLIC_BASE_URL=https://your-app.onrender.com
PUBLIC_HOST=your-app.onrender.com
MCP_ISSUER=https://your-app.onrender.com
MCP_OAUTH_ALLOWED_REDIRECT_URIS=https://your-app.onrender.com/oauth/callback
GOOGLE_REDIRECT_URI=https://your-app.onrender.com/oauth/callback`,
    githubBlock: `GITHUB_API_BASE=https://api.github.com
GITHUB_DEFAULT_OWNER=
GITHUB_TOKEN=
GITHUB_USER_AGENT=`,
    googleOAuthBlock: `GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REFRESH_TOKEN=
GOOGLE_REDIRECT_URI=`,
    googleMapsBlock: `GOOGLE_MAPS_API_KEY=
MAPS_API_BASE=https://maps.googleapis.com/maps/api
MAPS_API_KEY=`,
    googleAdsBlock: `GOOGLE_ADS_AUTONOMY_MODE=controlled_write
GOOGLE_ADS_CUSTOMER_ID=
GOOGLE_ADS_DEVELOPER_TOKEN=
GOOGLE_ADS_LOGIN_CUSTOMER_ID=
GOOGLE_ADS_USE_PROTO_PLUS=True`,
    analyticsGrowthBlock: `GA4_PROPERTY_ID=
GROWTH_AUTONOMY_MODE=controlled_write
SEARCH_CONSOLE_SITE_URL=`,
    metaAdsBlock: `META_ACCESS_TOKEN=
META_ADS_AUTONOMY_MODE=controlled_write
META_AD_ACCOUNT_ID=
META_API_VERSION=v19.0
META_APP_ID=
META_APP_SECRET=
META_USE_APPSECRET_PROOF=true`,
    mercuryBlock: `MERCURY_API_BASE_URL=https://api.mercury.com/api/v1
MERCURY_API_TOKEN=
MERCURY_AUTONOMY_MODE=controlled_write
MERCURY_ENABLE_DIRECT_SEND=true
MERCURY_MAX_ACH_AMOUNT=25
MERCURY_MAX_CHECK_AMOUNT=25
MERCURY_MAX_DOMESTIC_WIRE_AMOUNT=25
MERCURY_MAX_INTERNATIONAL_WIRE_AMOUNT=25
MERCURY_MAX_PAYMENT_AMOUNT=25`,
    alpacaBlock: `APCA_API_KEY_ID=
APCA_API_SECRET_KEY=
APCA_ENABLE_LIVE_TRADING=false
APCA_ENV=paper
APCA_MARKET_DATA_URL=
APCA_PAPER_BASE_URL=`,
    openAiVoiceBlock: `OPENAI_API_KEY=
OPENAI_REALTIME_SIP_ENABLED=true
OPENAI_REALTIME_SIP_PROJECT_ID=
OPENAI_REALTIME_SIP_VOICE=marin
OPENAI_REALTIME_SIP_WEBHOOK_SECRET=
OPENAI_VOICE_AGENT_MODEL=gpt-4.1-mini
VOICE_ASSISTANT_NAME=""
VOICE_OWNER_PHONE=`,
    phoneBehaviorBlock: `PHONE_SILENCE_HANGUP_MESSAGE="I haven't heard anything, so I'm going to end the call now. Goodbye."
PHONE_SILENCE_HANGUP_SECONDS=55
PHONE_SILENCE_WARNING_MESSAGE="I haven't heard anything, so I'm going to end the call soon."
PHONE_SILENCE_WARNING_SECONDS=45`,
    twilioBlock: `TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_CALL_LOG_SHEET_ID=
TWILIO_CALL_LOG_SHEET_TAB="Call Logs"
TWILIO_PHONE_NUMBER=
TWILIO_VOICE_GREETING="Hello, how can I help?"`,
    wordpressBlock: `WOOCOMMERCE_AUTONOMY_MODE=controlled_write
WORDPRESS_AUTONOMY_MODE=controlled_write
WORDPRESS_CONNECTOR_SECRET=
WORDPRESS_CONNECTOR_SITE_ID=
WORDPRESS_CONNECTOR_SITE_URL=`,
    generatedSecretsTemplate: `MCP_OAUTH_CLIENT_SECRET=your-value-here
MCP_SERVER_BEARER_TOKEN=your-value-here
MCP_TOKEN_SIGNING_SECRET=your-value-here
OAUTH_STATE_SECRET=your-value-here`,
    warning: 'Never put live API keys, OAuth refresh tokens, bearer tokens, signing secrets, or account credentials into this public website or GitHub. Paste real values only into Render environment variables.'
  }
};
