import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env.VITE_PUBLIC_URL": JSON.stringify(process.env.PUBLIC_URL),
  },
});
