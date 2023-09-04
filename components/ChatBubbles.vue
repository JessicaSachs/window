<script setup lang="ts">
defineProps<{
  messages: {
    role: string;
    message: string;
  }[];
}>()

</script>

<template>
  <div v-for="(message, i) in messages" :key="i" class="flex flex-col px-4 py-1 first:pt-4 last:pb-4">
    <ChatBubble :role="message.role" :message="message.message"
      class="font-light rounded-2xl text-smp-2 p-2 mt-1 text-sm" />
  </div>
</template>
