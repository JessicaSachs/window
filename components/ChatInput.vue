<script setup lang="ts">
import { useVModel } from '@vueuse/core';
const props = defineProps<{
  modelValue: string;
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', message: string): void
  (e: 'submit'): void
}>()

const message = useVModel(props, 'modelValue', emit)

const placeholder = 'Type here...'
</script>

<template>
  <form @submit.prevent="$emit('submit')">
    <div class="flex items-center w-full p-4">
      <input v-model="message" type="text" :placeholder="placeholder"
        class="w-full p-1 text-sm text-black focus:outline-indigo-500 outline-transparent outline-offset-2 border-2 border-indigo-200 bg-transparent bg-gray-100 border rounded-md border-white/40 grow" />
      <button :disabled="loading" type="submit"
        class="flex items-center justify-center flex-none w-10 h-10 ml-2 bg-indigo-500 rounded-full focus:outline-indigo-500 outline-transparent outline-offset-2 border-2 border-indigo-200">
        <Icon class="transform translate-x-[2px] hover:rotate-2 focus:rotate-2" size="24px" name="carbon:send"></Icon>
      </button>
    </div>
  </form>
</template>
