<template>
	<NuxtLink
		:to="to"
		@click="$emit('click')"
		class="p-2 no-underline text-4xl text-custom-light block transition-colors cursor-pointer hover:text-custom-blue focus:text-custom-blue md:max-h-[450px]:text-xl"
	>
		<slot />
	</NuxtLink>
</template>

<script setup>
defineProps({
	to: {
		type: String,
		required: true,
	},
});

defineEmits(["click"]);
</script>
