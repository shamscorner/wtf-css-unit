<script lang="ts">
	import Footer from './components/footer/Footer.svelte';
	import Navbar from './components/navbar/Navbar.svelte';
</script>

<div class="h-full md:flex md:flex-col">
	<Navbar />

	<main class="md:flex-1">
		<slot />
	</main>

	<Footer />
</div>
