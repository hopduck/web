export const site = {
  creator: "@hopduck",
  description:
    "Fast, no-nonsense URL shortener. Paste a long URL, get a short one. Done.",
  links: {
    github: "https://github.com/hopduck",
    web: "https://github.com/hopduck/web",
  },
  name: "HopDuck",
  ogImage: "https://hopduck.xyz/og-image.png",
  url: "https://hopduck.xyz",
} as const;

export type Site = typeof site;
