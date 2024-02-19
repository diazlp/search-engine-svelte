<script lang="ts">
	import { onMount } from 'svelte';
	import { searchAllResult } from '../../../stores'
	// import { fly } from 'svelte/transition'
	import { page } from '$app/stores'
	import ResultHeader from './ResultHeader.svelte';
  import ResultNav from './ResultNav.svelte'
	import AllResult from './AllResult.svelte'
	const { type } = $page.params
	const queryParams = $page.url.searchParams.get('q')

	let lastScrollTop = 0;
  let scrollingUp = true;

	function handleScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const header = document.querySelector('header');

    if (scrollTop > 100 && scrollTop > lastScrollTop) {
      /* Scrolling down */
      scrollingUp = false;
      header?.classList.remove('visible');
    } else {
      /* Scrolling up */
      scrollingUp = true;
      header?.classList.add('visible');
    }
    lastScrollTop = scrollTop;
  }

	onMount(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

	onMount(async () => {
		const response = await fetch(`/search?q=${queryParams}&type=${type}`)
		const data = await response.json()
		// searchAllResult.set(data.results)
		searchAllResult.set(data.items)
	});
</script>

<div class="app">
	<header class:visible={scrollingUp}>
		<ResultHeader />
		<ResultNav />
	</header>

	<div class="search-results">
		<AllResult />
	</div>
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		header {
			position: relative;
			z-index: 15;
		}
		.visible {
			position: sticky;
			z-index: 100;	
			top: 0;
			background-color: var(--color-bg-1);
  	}	
	}

	.search-results {
		flex: 1;
		margin-left: 11rem;
  }
</style>