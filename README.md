# <img src="./docs/assets/hopduck-primary.svg#gh-light-mode-only" alt="HopDuck logo" height="30" /><img src="./docs/assets/hopduck-light.svg#gh-dark-mode-only" alt="HopDuck logo" height="30" />

![License](https://img.shields.io/github/license/hopduck/web?color=blue)
![Version](https://img.shields.io/github/v/tag/hopduck/web?label=version)
![Build](https://img.shields.io/github/actions/workflow/status/hopduck/web/ci.yml)
![Last Commit](https://img.shields.io/github/last-commit/hopduck/web?color=yellow)
![Contributors](https://img.shields.io/github/contributors/hopduck/web?color=5d00ff)
![Open Issues](https://img.shields.io/github/issues/hopduck/web?color=ff0000)
![GitHub Repo stars](https://img.shields.io/github/stars/hopduck/web)

The web app behind HopDuck &mdash; short links, zero fluff.

Built with Next.js, PostgreSQL, and Drizzle Kit. Hosted on Vercel. Live at [hopduck.xyz](https://hopduck.xyz).

## Features

- Shorted long URLs into clean, shareable links
- Click analytics
- Custom aliases (coming soon)
- QR code generation (coming soon)

## Getting Started

### Prerequisites

- Node.js `22.22.1` (see [.nvmrc](./.nvmrc))
- npm `10.9.3`
- A [Neon](https://neon.com/) PostgreSQL database

If you use nvm, run:

```bash
nvm use
```

### Installation

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/hopduck/web.git
   cd web
   npm install
   ```

2. Configure environment variables:

   ```bash
   cp .env.example .env.local
   # Windows (CMD/Powershell)
   copy .env.example .env.local
   ```

   Fill in the required values &mdash; see `.env.example`for descriptions of each variable.

   | Variable              | Description                                                                                                                |
   | --------------------- | -------------------------------------------------------------------------------------------------------------------------- |
   | `NEXT_PUBLIC_APP_URL` | Base URL of the app (e.g. `http://localhost:3000/` or `https://hopduck.com`); used for generating absolute short link URLs |

3. Start the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

<!-- 3. Run migrations with Drizzle Kit: ```bash npx drizzle-kit migrate``` -->

You can start editing the project! The application will automatically reload as you edit files during development.

> This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

### Next.js Configuration

This project enables two non-default options in `next.config.ts`:

| Option                           | Description                                                                                                                       |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `turbopackFileSystemCacheForDev` | Persists Turbopack's cache to disk between dev server restarts for faster cold starts                                             |
| `reactCompiler`                  | Enables the React Compiler for automatic render optimizations; avoids `useMemo` / `useCallback` unless you have a specific reason |

## Project Structure

```ASCII
hopduck/web/
├─ .claude/                             # Claude Code workspace settings, commands, and contexts
├─ .cspell/                             # Spell-check dictionaries
├─ .github/                             # GitHub configuration (workflows, issue/PR templates, etc.)
│  ├─ hooks/                            # AI agent hook configurations (Ultracite)
│  ├─ scripts/                          # Custom scripts for GitHub automation and CI/CD tasks
│  ├─ workflows/                        # GitHub Actions CI, release, lint, auto-merge, etc.
│  │  ├─ auto-merge.yml                 # Dependabot auto-merge for safe updates
│  │  ├─ build.yml                      # Build verification
│  │  ├─ ci.yml                         # Full quality check suite
│  │  ├─ codeql.yml                     # CodeQL security scanning
│  │  ├─ commitlint.yml                 # Commit message validation
│  │  ├─ link-check.yml                 # Dead link checker
│  │  ├─ lint-and-check.yml             # Lint, format, spell, and markdown checks
│  │  ├─ release.yml                    # Automated release via release-it
│  │  └─ stale.yml                      # Stale issue and PR management
│  └─ dependabot.yml                    # Dependabot dependency update configuration
├─ .husky/                              # Git hooks for enforcing code quality and commit standards
├─ .vscode/                             # VSCode workspace settings, recommended extensions, etc.
├─ docs/assets/                         # Documentation-only assets (images, diagrams, etc.)
├─ public/                              # Static assets served directly by Next.js
├─ src/                                 # Application source code (App Router, components, styles, utilities)
│  └─ app/                              # Next.js App Router (routes, layouts, route handlers, etc.)
│     ├─ globals.css                    # Global styles
│     ├─ layout.tsx                     # Root application layout
│     └─ page.tsx                       # Home page
├─ .editorconfig                        # Editor-agnostic coding style rules
├─ .env.example                         # Example .env file for contributors
├─ .gitattributes                       # Git behavior settings (line endings, diff rules, etc.)
├─ .gitignore                           # Files and directories excluded from version control
├─ .lintstagedrc.json                   # lint-staged configuration for running checks on staged files
├─ .markdownlint-cli2.jsonc             # Markdown linting configuration
├─ .npmrc                               # npm configuration (dependency behavior, install settings)
├─ .nvmrc                               # Node.js version for local development consistency
├─ AGENTS.md                            # Guidelines for AI agents/tools interacting with the codebase
├─ CHANGELOG.md                         # Project changelog (Keep a Changelog format)
├─ CLAUDE.md                            # Project-specific instructions and context for Claude AI
├─ commitlint.config.mjs                # Commit message linting rules (Conventional Commits)
├─ cspell.json                          # Spell checking configuration for code and docs
├─ LICENSE                              # Project license (AGPL-3.0)
├─ lychee.toml                          # Dead link checker configuration
├─ next.config.ts                       # Next.js configuration
├─ oxfmt.config.ts                      # Oxfmt configuration
├─ oxlint.config.ts                     # Oxlint configuration
├─ package-lock.json                    # Locked dependency versions for reproducible installs
├─ package.json                         # Project metadata, scripts, and dependencies
├─ postcss.config.mjs                   # PostCSS configuration
├─ README.md                            # Project overview, setup, and usage instructions
├─ tsconfig.json                        # TypeScript configuration
└─ vercel.json                          # Vercel deployment configuration
```

## Scripts

| Command             | Description                                   |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start local dev server                        |
| `npm run build`     | Production build                              |
| `npm run start`     | Start production server                       |
| `npm run docs`      | Open README in browser                        |
| `npm run typecheck` | Run TypeScript type checking                  |
| `lint`              | Run Oxlint                                    |
| `lint:fix`          | Run Oxlint and auto-fix issues                |
| `lint:md`           | Run markdownlint on markdown files            |
| `fmt`               | Format code with Oxfmt                        |
| `fmt:check`         | Check formatting without writing changes      |
| `check`             | Run all Ultracite checks                      |
| `fix`               | Run all Ultracite auto-fixes                  |
| `cspell`            | Spell check the project                       |
| `cspell:words`      | Append unknown words to the project word list |

## Versioning

This project is currently in pre-1.0 development. Breaking changes may occur at any time.

Releases follow [Semantic Versioning](https://semver.org/) and are documented in [CHANGELOG.md](./CHANGELOG.md).

## Repository Standards

HopDuck includes a complete governance and automation setup, including:

- Conventional commits
- Commitlint and Husky hooks
- Dependabot configuration
- GitHub issue and pull request templates
- Standardized GitHub labels via [.github/scripts/create-gh-labels.sh](./.github/scripts/create-gh-labels.sh)
- Automated release tooling with `Release-it`

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](https://github.com/hopduck/web?tab=contributing-ov-file) before opening a pull request.

`main` is production. All work happens in branches &mdash; merged via pull request.

Branch naming conventions:

| Type    | Pattern             | Example               |
| ------- | ------------------- | --------------------- |
| Feature | `feat/description`  | `feat/custom-aliases` |
| Fix     | `fix/description`   | `fix/redirect-loop`   |
| Chore   | `chore/description` | `chore/update-deps`   |

## Links

- [HopDuck org](https://github.com/hopduck)
- [Docs](https://github.com/hopduck/docs) _(coming soon)_
- [hopduck.com](https://hopduck.com)

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

## Author

Created and maintained by [@stephen-wm](https://github.com/stephen-wm/).

## Contributors

- [@stephen-wm](https://github.com/stephen-wm/)

## License

AGPL-3.0 © 2026 HopDuck. See [LICENSE](./LICENSE) for details.

## Contact

For questions or support, open an issue or email [hellostephenwm@gmail.com](mailto:hellostephenwm@gmail.com).

---

Badges generated by [shields.io](https://shields.io/).
