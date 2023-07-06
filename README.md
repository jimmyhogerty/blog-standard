# BlogGPT

### About
BlogGPT is a complete blog generation platform utilizing OpenAI's 3.5 Turbo model.

### Test User Credentials:
```
Username: test@test.com
Password: Test123!!
```

### Live Demo - https://sea-lion-app-s4uak.ondigitalocean.app/

### Screenshots

<img width="900" alt="Screenshot 2023-07-06 at 8 35 26 AM" src="https://github.com/jimmyhogerty/blog-standard/assets/43115008/81e5100d-e080-45ce-b570-79d58d9fac48">
<img width="900" alt="Screenshot 2023-07-06 at 8 36 12 AM" src="https://github.com/jimmyhogerty/blog-standard/assets/43115008/6684a4ee-ea29-47a3-a5af-e1f61a281496">




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
