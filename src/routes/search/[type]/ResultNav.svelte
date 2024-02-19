<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores'
	import { selectedTab } from '../../../stores'
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import BsSearch from "svelte-icons-pack/bs/BsSearch";
	import BsImage from "svelte-icons-pack/bs/BsImage";
	import BsNewspaper from "svelte-icons-pack/bs/BsNewspaper";
  const queryParams = $page.url.searchParams.get('q')

	let selected_tab: string;

	selectedTab.subscribe((value) => {
		selected_tab = value
	})

	function handleSelectedTab(name: string): void {
		selectedTab.set(name)
    goto(`${name}?q=${queryParams}`)
		// will fetch here
	}
</script>

<nav>
  <div>
    <button on:click={() => handleSelectedTab('all')} aria-current={selected_tab === 'all' ? true : undefined}>
      <Icon src={BsSearch} size="10" />
      All
    </button>
    <button on:click={() => handleSelectedTab('images')} aria-current={selected_tab === 'images' ? true : undefined}>
      <Icon src={BsImage} size="10" />
      Images
    </button>
    <button on:click={() => handleSelectedTab('news')} aria-current={selected_tab === 'news' ? true : undefined}>
      <Icon src={BsNewspaper} size="10" />
      News
    </button>
  </div>
</nav>

<style lang="scss">
  nav {
		box-shadow: 0 1px 0 rgba(0,0,0,0.15);
		padding: 0 9rem;
		div {
			display: flex;
			margin: 0 1rem;

			button {
				background: transparent;
				border: none;
				display: flex;
				cursor: pointer;
				align-items: center;
				margin: 0 1rem;
				padding-bottom: 0.5rem;
				font-size: 0.9rem;
  			line-height: 1.5rem;
				gap: 0.350rem;
				color: gray;
			}
			
			button[aria-current=true] {
				border-bottom: 2px solid var(--color-theme-2);
				color: var(--color-theme-2);
			}
		}
	}

</style>