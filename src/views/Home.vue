<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

    <!-- <ElButton @click="runShell">执行shell</ElButton> -->
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
// import { simpleGit, SimpleGit, SimpleGitOptions } from 'simple-git'

// // const options: Partial<SimpleGitOptions> = {
// //   baseDir: process.cwd(),
// //   binary: 'git',
// //   maxConcurrentProcesses: 6,
// //   trimmed: false
// // }

// // const git: SimpleGit = simpleGit(options)
// const git: SimpleGit = simpleGit('../node/test', { binary: 'git' })

// const runShell = async () => {
//   // shell.echo('hello world')
//   try {
//     const res = await git.raw('git init')
//     return res
//   } catch (e) {
//     console.error('执行 simple-git 命令时发生错误', e)
//     throw e
//   }
// }

</script>
