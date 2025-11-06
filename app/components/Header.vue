<template>
	<header class="main-navigation">
		<nav class="main-nav">
			<div class="nav-item">
				<NuxtLink to="/">Karolina Krysiak</NuxtLink>
			</div>

			<div class="icons">
				<a target="_blank" href="https://www.linkedin.com/in/karolina-krysiak-8b3433189/"
					><img src="/icons/li.svg" alt="linkedin icon" class="some_image"
				/></a>
			</div>
			<div class="burger-menu" onclick="openNav()">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>

		<!-- The overlay -->
		<div id="myNav" class="overlay">
			<!-- Button to close the overlay navigation -->
			<a href="javascript:void(0)" class="closebtn" onclick="closeNavX()">&times;</a>

			<!-- Overlay content -->
			<div class="overlay-content">
				<NuxtLink to="/">Home</NuxtLink>
				<NuxtLink to="/about">About me</NuxtLink>
				<NuxtLink to="/projects">Projects</NuxtLink>
				<NuxtLink to="/">Contact</NuxtLink>
			</div>
		</div>
	</header>
</template>
