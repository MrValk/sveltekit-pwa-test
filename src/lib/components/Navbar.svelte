<script>
	import Fa from 'svelte-fa';
	import {
		faHouse,
		faNewspaper,
		faPlus,
		faBell,
		faSun,
		faMoon
	} from '@fortawesome/free-solid-svg-icons';

	import { theme, toggleTheme } from '$stores/theme';
</script>

<nav class="flex justify-around items-center w-full h-20 mt-auto primary-color">
	<button>
		<Fa icon={faHouse} />
	</button>
	<button>
		<Fa icon={faNewspaper} />
	</button>
	<button>
		<Fa icon={faPlus} />
	</button>
	<button>
		<Fa icon={faBell} />
	</button>
	<button on:click={toggleTheme}>
		{#if $theme == 'light'}
			<Fa icon={faSun} />
		{:else}
			<Fa icon={faMoon} />
		{/if}
	</button>
</nav>

<style lang="scss">
	nav {
		button {
			display: flex;
			align-items: center;
			justify-content: center;
			aspect-ratio: 1/1;
			width: 18vw;
			font-size: 1.2rem;
		}
	}
</style>
