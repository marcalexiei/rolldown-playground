import { defineConfig } from "rolldown";

export default defineConfig({
  input: "src/index",
  output: { dir: "dist" },
  external: ['react', 'react-dom'],
});
