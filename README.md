# Project Overview

This project leverages the power of [Next.js](https://nextjs.org) and is initialized using [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Clone the Repository

To create a new project from this template, simply clone the repository with the following command:

```bash
git clone https://github.com/codefastlabs/next-app.git your-new-repo-name
```

Make sure to replace `your-new-repo-name` with the desired name for your new project.

### Navigate to Your Project Directory

After cloning, change into your project directory:

```bash
cd your-new-repo-name
```

### Rename the Project

To rename your project and update all relevant files seamlessly, execute the `rename-project.sh` script:

```bash
./scripts/rename-project.sh
```

#### Input New Project Name

When prompted, provide the new project name.

Note: If your project name contains spaces (e.g., "my new project"), make sure to enclose it in quotes. Only the first part will be accepted if spaces are entered without quotes.

The script will update the following files automatically:

- `package.json`
- Docker Compose files in the `docker` directory
- `.env.development.sample`

### Example Usage

For instance, if you want to rename your project to `next-fullstack-app`, run:

```bash
./scripts/rename-project.sh next-fullstack-app
```

If you omit the project name argument, the script will prompt you:

```bash
./scripts/rename-project.sh
Enter the new project name: next-fullstack-app
```

### Important Notes

- Ensure that `jq` is installed on your system to run the script. You can install it using your package manager. For example, on macOS, use Homebrew:

  ```bash
  brew install jq
  ```

- If you encounter any issues, double-check that the specified files exist in your project directory.

### Environment Setup

Create a `.env.local` file in the root directory with the following content to configure the project for WebStorm:

```dotenv
REACT_EDITOR=webstorm
```

Quickly set up your environment by running:

```bash
echo "REACT_EDITOR=webstorm" > .env.local
cp .env.development.sample .env.development.local
cp .env.staging.sample .env.staging.local
cp .env.production.sample .env.production.local
```

### Start the Development Server

To launch the development server, execute:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your app. The page will automatically refresh as you edit `app/page.tsx`.

### Fonts

This project utilizes [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to efficiently load the [Geist](https://vercel.com/font) font family from Vercel.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs): Discover the full range of Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn): Engage with an interactive Next.js tutorial.

For additional information and contributions, visit the [Next.js GitHub repository](https://github.com/vercel/next.js).

## Deployment

Effortlessly deploy your Next.js app on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), the creators of Next.js.

For detailed deployment guidance, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

MIT
