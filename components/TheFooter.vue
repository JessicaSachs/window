<script setup lang="ts">
</script>

<template>
  <div class="mx-auto px-4 w-full text-sm space-y-2 dark">
    <p>
      Thanks <NuxtLink alt="Vercel Logo" href="https://vercel.com">
        <Icon style="vertical-align: -0.2em" class="fill-white h-[1em] w-[4em]" name="logos:vercel" />
      </NuxtLink> for supporting the intersection of art, humor, and code.
    <div class="inline">
      <span>Built with</span>
      <NuxtLink alt="Nuxt Logo" href="https://nuxt.com/">
        <Icon style="vertical-align: -0.1em;" class="mx-[0.2em] h-[1em] w-[3.5em] fill-white" name="logos:nuxt" />
      </NuxtLink>by <NuxtLink href="https://jess.sh">Jessica Sachs</NuxtLink>
    </div>
    </p>
  </div>
</template>

<style scoped>
a {
  @apply relative underline;
}
</style>
