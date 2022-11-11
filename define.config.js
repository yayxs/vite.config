import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode, ssrBuild }) => {
  console.log('command', command) // 'serve' 'build'
  console.log('mode', mode)
  console.log('ssrBuild', ssrBuild) // false

  const root = process.cwd()
  console.log('root', root)
  console.log('root-type', typeof root)
  console.log(`D:\gh-code\vite.config` === root)
  const env = loadEnv(mode, root, '') // 'D:\gh-code\vite.config'
  // console.log('env', env)
  return {}
})
