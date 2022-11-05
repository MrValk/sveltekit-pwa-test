<script>
	import Fa from 'svelte-fa';
	import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
</script>

<header class="flex justify-between items-center w-full h-20 px-4 gap-4">
	<form class="flex-auto flex rounded-full secondary-color h-12 min-w-0" on:submit|preventDefault>
		<img src="header-icon.svg" alt="logo" width="32" class="mx-4" />
		<input type="text" placeholder="Search..." class="flex-auto bg-transparent min-w-48" />
		<button class="aspect-square flex justify-center items-center">
			<Fa icon={faMagnifyingGlass} />
		</button>
	</form>
	<button
		class="user flex justify-center items-center min-w-12 aspect-square secondary-color rounded-full"
	>
		<Fa icon={faUser} />
	</button>
</header>

<style>
	.min-w-12 {
		min-width: 3rem;
	}

	.min-w-48 {
		min-width: 4rem;
	}
</style>
