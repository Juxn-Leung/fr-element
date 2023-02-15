<template>
  <div
    id="nav"
    class="p-12 text-right"
  >
    <router-link to="/">
      Home
    </router-link> |
    <router-link to="/about">
      About
    </router-link>
  </div>
  <router-view />
</template>
