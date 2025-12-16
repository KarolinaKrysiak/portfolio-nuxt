<template>
	<header class="fixed z-50 w-full h-20 bg-gradient-to-t from-transparent to-custom-dark top-0 left-0 max-w-full">
		<nav class="relative w-full h-full">
			<div class="absolute top-[35px] left-[30px] font-normal">
				<NuxtLink
					to="/"
					class="no-underline text-custom-light m-0 text-base hover:cursor-pointer hover:text-custom-blue transition-colors"
				>
					Karolina Krysiak
				</NuxtLink>
			</div>

			<NavBurgerMenu @toggle="openNav" />
		</nav>

		<!-- The overlay -->
		<div
			id="myNav"
			class="h-full w-0 fixed z-[9999] right-0 top-0 bg-custom-black overflow-x-hidden transition-all duration-500"
		>
			<!-- Button to close the overlay navigation -->
			<a
				href="javascript:void(0)"
				class="absolute top-5 right-[45px] text-6xl p-2 no-underline text-custom-light block transition-colors cursor-pointer hover:text-custom-blue focus:text-custom-blue md:max-h-[450px]:text-4xl md:max-h-[450px]:top-[15px] md:max-h-[450px]:right-[35px]"
				@click="closeNav"
			>
				&times;
			</a>

			<!-- Overlay content -->
			<div class="relative top-1/4 w-full text-center mt-[30px]">
				<NavLink to="/" @click="closeNav">Home</NavLink>
				<NavLink to="/about" @click="closeNav">About me</NavLink>
				<NavLink to="/projects" @click="closeNav">Projects</NavLink>
				<NavLink to="/contact" @click="closeNav">Contact</NavLink>
				<div class="flex justify-center">
					<a target="_blank" href="https://www.linkedin.com/in/karolina-krysiak-01">
						<img src="/assets/icons/li.svg" alt="linkedin icon" class="w-10 h-auto mx-4 mt-12" />
					</a>
					<a target="_blank" href="https://github.com/KarolinaKrysiak">
						<img src="/assets/icons/git.svg" alt="github icon" class="w-10 h-auto mx-4 mt-12" />
					</a>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}
</script>
