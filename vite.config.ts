import { defineConfig,loadEnv, UserConfig } from 'vite';
import * as path from 'path';
import uni from '@dcloudio/vite-plugin-uni';
export default defineConfig(({ command, mode }) => {
  const env=loadEnv(mode,process.cwd());
  console.log(env)
  const config: UserConfig = {
    plugins: [uni()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: { charset: false, additionalData: `@import "@/styles/variables.scss";
        $ossUrl:"${env.VITE_OSS_URL}";
        ` }
      }
    },
    // 依赖预构建
    optimizeDeps: {
      entries: ['@dcloudio/uni-ui']
    }
  };

  if (command === 'serve') {
    // 开发
    return config;
  } else {
    // 生产
    return config;
  }
});
