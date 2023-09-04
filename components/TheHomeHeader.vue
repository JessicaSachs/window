<script setup lang="ts">
import WrapBalancer from 'vue-wrap-balancer';
</script>
<template>
  <div class="text-left sm:text-center dark">
    <h1 class="text-3xl font-normal text-gray-100">
      <WrapBalancer>Are you on window.top?</WrapBalancer>
    </h1>
    <div class="font-normal text-sm">
      <p>
        <WrapBalancer>Unravel the matrix, one execution context at a time.</WrapBalancer>
      </p>
      <p>
        <WrapBalancer class="space-x-1">What is <NuxtLink href="https://stackoverflow.com/a/3473971">
            window.top</NuxtLink>
          <NuxtLink href="https://developer.mozilla.org/en-US/docs/Web/API/Window/top">for</NuxtLink>
          <NuxtLink href="https://www.youtube.com/watch?v=YHCIeCOkErc">real</NuxtLink>
          <NuxtLink href="https://superuser.com/q/105699">though</NuxtLink>?
        </WrapBalancer>
      </p>
    </div>
  </div>
</template>

<style scoped>
a {
  @apply underline;
}
</style>
