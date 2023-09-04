<script setup lang="ts">
import TheHomeHeader from '~~/components/TheHomeHeader.vue';
import ChatBox from '~~/components/ChatBox.vue';
import TheFooter from '~~/components/TheFooter.vue';
</script>

<template>
	<div
		class="gap-6 flex flex-col min-h-[100vh] md:max-w-xl sm:min-w-full sm:text-center mx-auto text-gray-100 transition-all duration-1000">
		<TheHomeHeader class="pt-4 px-4" />
		<ChatBox class="mx-auto min-h-full flex-grow" />
		<TheFooter class="w-full py-4 bg-slate-900" />
	</div>
</template>
