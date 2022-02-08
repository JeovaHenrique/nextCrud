module.exports = {
  purge: {
      content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      /^bg-/,
      /^to-/,
      /^from-/,
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
