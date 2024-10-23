# Project Overview

This project leverages the power of [Next.js](https://nextjs.org) and is initialized with [
`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Clone the Repository

To start a new project based on this template, clone the repository using the command:

```bash
git clone https://github.com/codefastlabs/next-app.git your-new-repo-name
```

Replace `your-new-repo-name` with the desired name for your project.

### Navigate to Your Project Directory

After cloning, move into the project directory:

```bash
cd your-new-repo-name
```

### Rename the Project

To rename your project and update all necessary files, run the `rename-project.sh` script:

```bash
./scripts/rename-project.sh
```

#### Provide a New Project Name

When prompted, input your new project name.

_Note:_ If your project name contains spaces (for example, "my new project"), enclose it in quotes. If entered without
quotes, only the first word will be recognized.

This script automatically updates:

- `package.json`
- Docker Compose files in the `docker` directory
- `.env.development.sample`

### Example

To rename the project to `next-fullstack`, you can run:

```bash
./scripts/rename-project.sh next-fullstack
```

Alternatively, if you omit the project name, the script will prompt you:

```bash
./scripts/rename-project.sh
Enter the new project name: next-fullstack
```

### Prerequisites

Ensure `jq` is installed on your system to run the script. Install it using your package manager. For macOS, you can use
Homebrew:

```bash
brew install jq
```

If you encounter issues, check that the required files exist in your project directory.

### Environment Setup

To configure the project for WebStorm, create a `.env.local` file in the root directory with the following content:

```dotenv
REACT_EDITOR=webstorm
```

Quickly set up your environment by running:

```bash
cp .env.sample .env.local
```

To configure the environment for testing, run:

```bash
cp .env.sample .env.test.local
```

If you're using Docker, copy `.env.sample` for various environments:

```bash
cp .env.sample .env.development.local
cp .env.sample .env.production.local
cp .env.sample .env.staging.local
```

Generate an `AUTH_SECRET` for token encryption and email verification hashes:

```bash
openssl rand -base64 32
```

### Starting the Development Server

Launch the development server with:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your app. The page automatically refreshes
when you edit `app/page.tsx`.

### Fonts

The project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to load
the [Geist](https://vercel.com/font) font family efficiently from Vercel.

### Quick Commands

#### Database Commands

- **Start the database container:**
  ```bash
  make database-up
  ```
- **Stop the database container:**
  ```bash
  make database-down
  ```

#### Development Environment Commands

- **Build the development Docker image:**

  ```bash
  make development-build
  ```

- **Start the development Docker container:**

  ```bash
  make development-up
  ```

- **Build and start the development Docker container:**

  ```bash
  make development-build-up
  ```

- **Stop the development Docker container:**

  ```bash
  make development-down
  ```

- **Stop, build, and start the development of a Docker container:**
  ```bash
  make development-down-build-up
  ```

#### Staging Environment Commands

- **Build the staging Docker image:**

  ```bash
  make staging-build
  ```

- **Start the staging Docker container:**

  ```bash
  make staging-up
  ```

- **Build and start the staging Docker container:**

  ```bash
  make staging-build-up
  ```

- **Stop the staging Docker container:**

  ```bash
  make staging-down
  ```

- **Stop, build, and start staging Docker container:**
  ```bash
  make staging-down-build-up
  ```

#### Production Environment Commands

- **Build the production Docker image:**

  ```bash
  make production-build
  ```

- **Start the production Docker container:**

  ```bash
  make production-up
  ```

- **Build and start the production Docker container:**

  ```bash
  make production-build-up
  ```

- **Stop the production Docker container:**

  ```bash
  make production-down
  ```

- **Stop, build, and start the production Docker container:**
  ```bash
  make production-down-build-up
  ```

#### Cleanup Command

- **Remove unused Docker images and volumes:**
  ```bash
  make cleanup
  ```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs): Explore all of Next.js' features and API.
- [Learn Next.js](https://nextjs.org/learn): Follow the interactive Next.js tutorial.

For further contributions and info, visit the [Next.js GitHub repository](https://github.com/vercel/next.js).

## Deployment

Deploy your Next.js app
on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme),
the creators of Next.js.

Refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for
more details.

## License

MIT
