<script>
	import Fa from 'svelte-fa';
	import { faHouse, faNewspaper, faPlus, faBell, faSun } from '@fortawesome/free-solid-svg-icons';

	import switchTheme from '$scripts/themeSwitcher';
</script>

<nav class="flex justify-around w-full h-20 mt-auto">
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
	<button on:click={switchTheme}>
		<Fa icon={faSun} />
	</button>
</nav>
