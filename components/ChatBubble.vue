<script setup lang="ts">
const props = defineProps<{
  role: string;
  message: string;
}>()

const isAssistant = computed(() => props.role === 'assistant')
const htmlMessage = computed(() => {
  // write a regex to replace inline code tags with <pre> tags
  // 'Hello `world`'.replace(/`([`]+)`/g, '<code>$1</code>'
  return props.message.replace(/`([`]+)`/g, '<br/><code>$1</code>').replace(/\n/g, '<br />').replace(/(https?:\/\/[^\s]+)/g, '<a class="underline" href="$1" target="_blank">$1</a>').replace(/\*([^\*]+)\*/g, '<strong>$1</strong>').replace(/_([^_]+)_/g, '<em>$1</em>').replace(/`(.+)`/g, '<pre class="inline">$1</pre>')
})
</script>

<template>
  <div v-if="isAssistant"
    class=" selection:bg-indigo-200 text-left mr-auto text-slate-700 from-slate-200 to-slate-50 bg-gradient-to-bl"
    v-html="htmlMessage">
  </div>
  <div v-else class="text-left ml-auto text-white selection:bg-indigo-800 from-indigo-600 to-indigo-400 bg-gradient-to-br"
    v-html="htmlMessage">
  </div>
</template>
