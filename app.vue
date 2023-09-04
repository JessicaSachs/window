<script setup lang="ts">
import { BalancerProvider } from 'vue-wrap-balancer'
</script>

<template>
	<div class="bg-gray-50">
		<NuxtLayout>
			<BalancerProvider>
				<NuxtPage />
			</BalancerProvider>
		</NuxtLayout>
	</div>
</template>
