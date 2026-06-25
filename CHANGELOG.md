# Changelog

All notable changes to HopDuck will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) and [Conventional Commits](https://www.conventionalcommits.org/). The formatting for this document is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

## [0.3.1] - 2026-06-24

### Changed

- Updated `cspell.json` ignorePaths to exclude all shellscript files and the `tsconfig.tsbuildinfo` file.

### Removed

- Unreachable docs link in README files [Links](./README.MD#links) section.

## [0.3.0] - 2026-06-24

### Added

- GitHub Actions workflow for automated dependency auto-merging (`auto-merge.yml`).
- GitHub Actions workflow for build validation (`build.yml`).
- GitHub Actions workflow for CI (`ci.yml`).
- GitHub Actions workflow for CodeQL security analysis (`codeql.yml`).
- GitHub Actions workflow for commitlint PR validation (`commitlint.yml`).
- GitHub Actions workflow for link checking with Lychee (`link-check.yml`).
- GitHub Actions workflow for linting and checks (`lint-and-check.yml`).
- GitHub Actions workflow for releases (`release.yml`).
- GitHub Actions workflow for stale issue and PR management (`stale.yml`).
- Dependabot configuration for automated dependency updates (`.github/dependabot.yml`).
- Label automation script (`.github/scripts/create-gh-labels.sh`).
- Lychee link checker configuration (`lychee.toml`).
- Husky `pre-push` hook to validate commit messages against `origin/main` before pushing.
- Preceding commit message validation in `pre-commit` hook.
- Release-it configuration with `@release-it/keep-a-changelog` and `@release-it/conventional-changelog` plugins (`.release-it.json`).

### Changed

- Updated project structure in README to reflect added `lychee.toml`, GitHub scripts, workflows, and Dependabot configuration files.
- Updated `cspell.json` ignorePaths to exclude `.github/**/*.yml`.

## [0.2.0] - 2026-06-24

### Added

- Ultracite integration with Oxlint and Oxfmt for linting and formatting.
- `oxlint.config.ts` and `oxfmt.config.ts` configuration files.
- `commitlint.config.mjs` for enforcing conventional commit message format.
- `cspell.json` for spell checking with project-specific word list.
- `.markdownlint-cli2.jsonc` for markdown linting.
- Husky with `pre-commit` hook via `prepare` script, and `commit-msg` hook for conventional commit message enforcement.
- `.github/hooks/ultracite.json` for Ultracite hook configuration.
- `.claude/settings.json` and `.claude/CLAUDE.md` added by Ultracite.
- `lint`, `lint:fix`, `fmt`, `fmt:check`, `check`, `fix`, `cspell`, `cspell:words`, and `typecheck` scripts in `package.json`.
- `.lintstagedrc.json` running Ultracite, CSpell, and markdownlint on staged files.
- Added Ultracite linting and formatting context in AGENTS file.
- VSCode workspace settings in `.vscode/settings.json`.
- GitHub Pull Requests, OXC, and Code Spell Checker to recommended extensions file in `.vscode/extensions.json`.

### Changed

- Fixed typos in the README, CHANGELOG, and home page files.
- Formatted root `layout.tsx` file with Oxfmt.
- Update project structure in README to reflect new files and folders.

## [0.1.0] - 2026-06-24

### Added

- Initial project scaffold via create-next-app with Next.js app router
- TailwindCSS configuration with PostCSS.
- Under construction landing page with HopDuck branding.
- `.nvmrc` pinned Node.js to `22.22.1`.
- `engines` field in `package.json` enforcing Node.js `22.22.1` and npm version `10.9.0`.
- `.env.example` with placeholder environment variable keys.
- Project documentation and setup instructions in the README.
- Repository metadata and AI agent guidance files.
- `.editorconfig` and `.gitattributes` for consistent editor and git behavior.
- `.npmrc` with project-level npm configuration.
- `vercel.json` for Vercel deployment configuration.
- `README.md` with setup instructions, project structure, and contributing guidelines.
- Enabled `turbopackFileSystemCacheForDev` in `next.config.ts` for faster local dev builds
- Enabled `reactCompiler` in `next.config.ts` for automatic render optimization

[Unreleased]: https://github.com/hopduck/web/compare/v0.3.1...HEAD
[0.3.1]: https://github.com/hopduck/web/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/hopduck/web/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/hopduck/web/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/hopduck/web/releases/tag/v0.1.0
