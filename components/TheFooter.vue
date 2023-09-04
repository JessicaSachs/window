<script setup lang="ts">
</script>

<template>
  <div class="mx-auto px-4 w-full text-sm space-y-2">
    <p>
      Thanks <NuxtLink alt="Vercel Logo" href="https://vercel.com">
        <Icon style="vertical-align: -0.2em" class="fill-white h-[1em] w-[4em]" name="logos:vercel" />
      </NuxtLink> for supporting the intersection of art, humor, and code.
    </p>
    <p class="space-x-3">
      <NuxtLink alt="Nuxt Logo" href="https://nuxt.com/">
        <Icon style="vertical-align: -0.1em;" class="h-[1em] w-[4em] fill-white" name="logos:nuxt" />
      </NuxtLink>
      <NuxtLink alt="Vue Logo" href="https://vuejs.org/">
        <Icon class="h-[1em] w-[1.2em]" name="logos:vue" />
      </NuxtLink>
      <NuxtLink alt="OpenAI Logo" href="https://openai.com">
        <Icon style="vertical-align: -0.2em;" class="fill-white h-[1em] w-[4em]" name="logos:openai" />
      </NuxtLink>
      <NuxtLink href="https://github.com/jessicasachs/window">Source</NuxtLink>
    </p>
  </div>
</template>

<style scoped>
a {
  @apply relative underline;
}

a svg {
  @apply transition-all duration-200
}

a svg:hover {
  @apply origin-center scale-[1.05];
}
</style>
