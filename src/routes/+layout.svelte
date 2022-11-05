<script>
	import '../app.css';

	import Header from '$components/Header.svelte';
	import Navbar from '$components/Navbar.svelte';
</script>

<div class="flex flex-col h-screen w-screen">
	<Header />
	<main>
		<slot />
	</main>
	<Navbar />
</div>
