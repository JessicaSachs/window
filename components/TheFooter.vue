<script setup lang="ts">
</script>

<template>
  <div class="mx-auto px-4 w-full text-sm space-y-2 dark">
    <p>
      Thanks <NuxtLink alt="Vercel Logo" href="https://vercel.com">
        <Icon style="vertical-align: -0.2em" class="fill-white h-[1em] w-[4em]" name="logos:vercel" />
      </NuxtLink> for supporting the intersection of art, humor, and code.
    </p>
    <p class="space-x-3">
      <span>Built with:</span>
      <NuxtLink alt="Nuxt Logo" href="https://nuxt.com/">
        <Icon style="vertical-align: -0.1em;" class="h-[1em] w-[4em] fill-white" name="logos:nuxt" />
      </NuxtLink>
      <span>
        Made with ♥ by <NuxtLink href="https://jess.sh/">Jessica Sachs</NuxtLink>
      </span>
      <NuxtLink href="https://github.com/jessicasachs/window">
        <Icon name="logos:github-icon" class="w-[1.25em] h-[1.25em]" style="filter: invert();"></Icon>
      </NuxtLink>
    </p>
  </div>
</template>

<style scoped>
a {
  @apply relative underline;
}
</style>
