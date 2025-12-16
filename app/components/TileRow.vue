<template>
	<div class="h-[600px] flex flex-row items-center overflow-y-hidden" :class="reverse ? 'flex-row-reverse' : ''">
		<div class="flex flex-col w-1/2">
			<slot name="image" />
		</div>
		<div class="flex flex-col w-1/2">
			<div>
				<slot name="content" />
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	reverse: {
		type: Boolean,
		default: false,
	},
});
</script>
