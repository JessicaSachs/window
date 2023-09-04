<script setup lang="ts">
const props = defineProps<{
  role: string;
  message: string;
}>()

const isAssistant = computed(() => props.role === 'assistant')
</script>

<template>
  <div v-if="isAssistant"
    class=" selection:bg-indigo-200 text-left mr-auto text-slate-700 from-slate-200 to-slate-50 bg-gradient-to-bl">
    {{ message }}
  </div>
  <div v-else
    class="text-left ml-auto text-white selection:bg-indigo-800 from-indigo-600 to-indigo-400 bg-gradient-to-br">
    {{ message }}
  </div>
</template>
