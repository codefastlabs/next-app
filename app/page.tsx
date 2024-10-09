import Image from 'next/image';
import { type JSX } from 'react';

export default function Home(): JSX.Element {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Image
          priority
          alt="Next.js logo"
          className="dark:invert"
          height={38}
          src="https://nextjs.org/icons/next.svg"
          width={180}
        />
        <ol className="list-inside list-decimal text-center font-[family-name:var(--font-mono)] text-sm sm:text-left">
          <li className="mb-2">
            Get started by editing{' '}
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            className="flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent bg-foreground px-4 text-sm text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:h-12 sm:px-5 sm:text-base"
            href="https://vercel.com/new"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt="Vercel logomark"
              className="dark:invert"
              height={20}
              src="https://nextjs.org/icons/vercel.svg"
              width={20}
            />
            Deploy now
          </a>
          <a
            className="flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base"
            href="https://nextjs.org/docs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image aria-hidden alt="File icon" height={16} src="https://nextjs.org/icons/file.svg" width={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image aria-hidden alt="Window icon" height={16} src="https://nextjs.org/icons/window.svg" width={16} />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image aria-hidden alt="Globe icon" height={16} src="https://nextjs.org/icons/globe.svg" width={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
