<script setup lang="ts">
import { nonApologies } from '~~/responses';
import ChatInput from './ChatInput.vue';
import DeviHeader from './DeviHeader.vue'

const messages = ref([
  {
    role: 'assistant',
    message: 'Let me guess, you want to know what `window.top` is?'
  }
]);
const loading = ref(false);
const message = ref('');

const scrollToEnd = () => {
  setTimeout(() => {
    const chatMessages = document.querySelector('.chat-messages > div:last-child');
    chatMessages?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, 100);
};

const sendPrompt = async () => {
  if (message.value === '') return;
  loading.value = true;

  messages.value.push({
    role: 'user',
    message: message.value
  });

  scrollToEnd();
  message.value = '';

  const res = await fetch(`/api/chat`, {
    body: JSON.stringify(messages.value.slice(1)),
    method: 'post'
  });

  if (res.status === 200) {
    const response = await res.json();
    messages.value.push({
      role: 'assistant',
      message: response?.message
    });
  } else {
    messages.value.push({
      role: 'assistant',
      message: nonApologies[Math.floor(Math.random() * nonApologies.length)]
    });
  }

  loading.value = false;
  scrollToEnd();
};
</script>

<template>
  <div class="chat-messages-layout-wrapper">
    <div class="chat-messages-wrapper bg-white rounded-md shadow flex flex-col justify-between">
      <DeviHeader class="px-4 pt-2"></DeviHeader>
      <div class="h-full overflow-auto chat-messages">
        <ChatBubbles :messages="messages" />
        <div class="p-4 ml-10 mr-auto" v-if="loading">
          <span class="loader"></span>
        </div>
      </div>
      <ChatInput v-model="message" :loading="loading" @submit="sendPrompt" />
    </div>
  </div>
</template>

<style>
@media (max-width: 480px) {
  .chat-messages-layout-wrapper {
    min-width: calc(100vw - 2em);
    max-width: auto;
  }
}

.chat-messages-layout-wrapper {
  min-width: initial;
  max-width: 400px;
  width: calc(100% - 2rem);
}

.chat-messages-wrapper {
  width: 100%;
  max-height: 400px;
}
</style>


<style scoped>
.loader {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: block;
  position: relative;
  color: #d3d3d3;
  box-sizing: border-box;
  animation: animloader 2s linear infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 -2px;
  }

  25% {
    box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 2px;
  }

  50% {
    box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 2px, -38px 0 0 -2px;
  }

  75% {
    box-shadow: 14px 0 0 2px, 38px 0 0 -2px;
  }
}
</style>
