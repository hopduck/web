import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Link href="/">
          <Image
            alt="Next.js logo"
            className="hover:opacity-75 transition-opacity duration-150"
            src="/hopduck.svg"
            width={0}
            height={0}
            style={{ height: "auto", width: "120px" }}
            priority
          />
        </Link>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-max text-3xl lg:text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Something great is on its way.
          </h1>

          <p className="text-lg leading-8 text-zinc-300 text-balance">
            HopDuck is a fast, no-nonsense URL shortener currently under
            construction. Short links, zero fluff — launching soon.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://github.com/hopduck/web"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.svg"
              alt="GitHub logomark"
              width={16}
              height={16}
            />
            View Source
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://github.com/hopduck"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow Along
          </a>
        </div>
      </main>

      <footer className="h-18 w-full max-w-full flex items-center justify-center">
        <div className="container self-stretch px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="max-w-3xl w-full px-16">
            <p className="text-sm text-zinc-500 relaxed">
              &copy; {new Date().getFullYear()} HopDuck
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
