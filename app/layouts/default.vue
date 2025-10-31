<template>
	<div class="gradient-bg font-lato text-light min-h-screen">
		<nav>
			<NuxtLink to="/">Home</NuxtLink>
			<NuxtLink to="/about">About</NuxtLink>
			<NuxtLink to="/projects">Projects</NuxtLink>
		</nav>
		<slot />
	</div>
</template>
