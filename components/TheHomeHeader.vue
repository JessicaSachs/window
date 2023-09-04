<script setup lang="ts">
import WrapBalancer from 'vue-wrap-balancer';
</script>
<template>
  <div class="text-left sm:text-center">
    <h1 class="text-3xl font-normal text-gray-100">
      <WrapBalancer>Are you on window.top?</WrapBalancer>
    </h1>
    <div class="font-normal text-sm">
      <p>
        <WrapBalancer>Unravel the matrix, one execution context at a time.</WrapBalancer>
      </p>
      <p>
        <NuxtLink href="https://google.com" class="underline">
          <WrapBalancer>What is window.top for real though?</WrapBalancer>
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
