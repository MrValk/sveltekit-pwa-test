<script>
	import Fa from 'svelte-fa';
	import { faHouse, faNewspaper, faPlus, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
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
	<button>
		<Fa icon={faUser} />
	</button>
</nav>
