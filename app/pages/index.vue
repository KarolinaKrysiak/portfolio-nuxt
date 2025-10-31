<template>
	<div>
		<section class="h-screen relative">
			<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
				<h1>Karolina Krysiak</h1>
				<h2 class="font-sans">Software Engineer</h2>
			</div>
			<img
				alt="background circle"
				src="assets/img/circle.png"
				class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
			/>
		</section>
		<section class="h-[600px] flex items-center overflow-y-hidden">
			<div class="flex flex-col w-1/2">
				<img
					alt="painted over picture of me"
					src="assets/img/pic.png"
					class="min-w-full min-h-[600px] object-cover"
				/>
			</div>
			<div class="flex flex-col w-1/2">
				<div>
					<h3>A bit about me</h3>
					<RedDivider />

					<p>
						I am a 5th semester student at VIA University Horsens on a Software Technology Engineering programme.
						I also have an AP Degree in Multimedia Design and Communication with frontend development
						specialization from Business Academy Aarhus.
					</p>
					<NuxtLink to="/about">Read more about me</NuxtLink>
				</div>
			</div>
		</section>
	</div>
</template>
