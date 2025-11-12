<template>
	<div
		class="absolute right-[30px] top-[30px] flex flex-col justify-between h-[30px] cursor-pointer group"
		@click="$emit('toggle')"
	>
		<span class="w-10 h-[5px] block bg-white group-hover:bg-custom-blue transition-colors"></span>
		<span class="w-10 h-[5px] block bg-white group-hover:bg-custom-blue transition-colors"></span>
		<span class="w-10 h-[5px] block bg-white group-hover:bg-custom-blue transition-colors"></span>
	</div>
</template>

<script setup>
defineEmits(["toggle"]);
</script>
