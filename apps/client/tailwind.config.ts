import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graybg: "#EEEEED",
        cwhite: "#FFFFFF",
        primary: "#1E1A34",
        secondary: "#BEDE18",
        borders: "#C0BFC6",
        tplaceholder: "#747181",
        purple: "#5D3D9A",
        buttontext: "#8A8895",
        boxpasswordinfo: "#CEBFE8",
        toastbg: "#F2F8D1",
      },
    },
  },
  plugins: [],
};
export default config;
