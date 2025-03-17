import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({mode})=>{
  const env=loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    server:{
      proxy:{
        '/api': { // axios라이브러리 등으로 http 요청인데 api로 시작하면
          target: `https://portfolio-production-790b.up.railway.app:8080`, // 이쪽 주소로 맵핑하여 백그라운드로 보냄.
          changeOrigin: true, // cors 에러 방지
        }
      }
    }
  }
});