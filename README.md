如果没有`html` 文件入口，控制台警告

```sh
Could not auto-determine entry point from rollupOptions or html files and there are no explicit optimizeDeps.include patterns. Skipping dependency pre-bundling.
```

```ts
console.log('command', command) // 'serve' 'build'
console.log('mode', mode)
console.log('ssrBuild', ssrBuild) // false

let root = process.cwd()
console.log('root', root) // index.html文件所在的位置
```

```ts
export function sharedOptionsRoot(): string {
  const root: string = process.cwd()
  return root
}

export function sharedOptionsBase(): string {
  const path = '/'

  return path
}
```
