import { defineConfig, loadEnv } from 'vite'
import dayjs from 'dayjs'
import pkg from './package.json'
const { dependencies, devDependencies, name, version } = pkg

const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
}

export default defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, process.cwd(), '') // 'D:\gh-code\vite.config'

  return {
    root: process.cwd(),
    base: '/',
    mode: 'development',
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    }
  }
})
