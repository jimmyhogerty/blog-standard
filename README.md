# BlogGPT

### About
BlogGPT is a complete blog generation platform utilizing OpenAI's 3.5 Turbo model.

### Test User Credentials:
```
Username: test@test.com
Password: Test123!!
```

Live Demo - https://sea-lion-app-s4uak.ondigitalocean.app/


### Run Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Local ENV Requirements

In order to run this project locally, you must provide the following environmental variables located in a `.env.local` file placed in the root directory.

Auth0 API
- AUTH0_SECRET=
- AUTH0_BASE_URL=
- AUTH0_ISSUER_BASE_URL=
- AUTH0_CLIENT_ID=
- AUTH0_CLIENT_SECRET=

OpenAI API
- OPENAI_API_KEY=

MongoDB API
- MONGODB_URI=

Stripe API
- STRIPE_SECRET_KEY=
- STRIPE_PRODUCT_PRICE_ID=
- STRIPE_WEBHOOK_SECRET=
