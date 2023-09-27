import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'
dotenv.config(); 

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), ''); 
  return {
    plugins: [react()],
    define: {
      'apiUrl': JSON.stringify(process.env.API_URL),
      'k8Enabled': JSON.stringify(process.env.K8_ENABLED),
    },
  }
})

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: 'localhost', 
//     port: 5173, 
//   },
// });