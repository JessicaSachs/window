<script setup lang="ts">
const props = defineProps<{
  role: string;
  message: string;
}>()

const isAssistant = computed(() => props.role === 'assistant')
</script>

<template>
  <div v-if="isAssistant" class="text-left mr-auto text-slate-700 from-slate-200 to-slate-50 bg-gradient-to-bl">
    {{ message }}
  </div>
  <div v-else class="text-left ml-auto text-white from-indigo-400 to-indigo-200 from-90% bg-gradient-to-br">
    {{ message }}
  </div>
</template>
