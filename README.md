This project is built with [Next.js](https://nextjs.org), bootstrapped using [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Environment Setup

Ensure you have a `.env.local` file in the root directory with the following content to open the project in WebStorm:

```dotenv
REACT_EDITOR=webstorm
```

Set up the environment quickly by running the following commands:

```bash
echo "REACT_EDITOR=webstorm" > .env.local
cp .env.development.sample .env.development.local
cp .env.staging.sample .env.staging.local
cp .env.production.sample .env.production.local
```

### Development Server

Start the development server with:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser. The page will auto-update as you edit `app/page.tsx`.

### Fonts

This project utilizes [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize and load [Geist](https://vercel.com/font), a modern font family from Vercel.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs): Explore Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn): Interactive Next.js tutorial.

You can also visit the [Next.js GitHub repository](https://github.com/vercel/next.js) for further information and contributions.

## Deployment

Deploy your Next.js app effortlessly on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), the creators of Next.js.

For more details on deployment, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

MIT
