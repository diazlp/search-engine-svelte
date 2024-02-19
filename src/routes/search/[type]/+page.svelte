<script lang="ts">
	import { onMount } from 'svelte';
	import { searchAllResult } from '../../../stores'
	import { fly } from 'svelte/transition'
	import { page } from '$app/stores'
	import ResultHeader from './ResultHeader.svelte';
  import ResultNav from './ResultNav.svelte'
	import AllResult from './AllResult.svelte'
	const queryParams = $page.url.searchParams.get('q')

	let lastScrollTop = 0;
  let scrollingUp = true;

	onMount(async () => {
		const response = await fetch(`/api/all?q=${queryParams}`)
		const data = await response.json()
		searchAllResult.set(data.results)
		// searchAllResult.set(data.items)
	});


	window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const header = document.querySelector('header');

		if (scrollTop > 100 && scrollTop >lastScrollTop) {
			/*Scrolling down*/
			scrollingUp = false;
			header?.classList.remove('visible');
		} else {
			/*Scrolling up*/
			scrollingUp = true;
			header?.classList.add('visible');
		}
    lastScrollTop = scrollTop;
  });
</script>

<div class="app">
	{#if scrollingUp}
		<header class:visible={scrollingUp} in:fly={{ y: -50, duration: 200 }} out:fly={{ y: -50, duration: 500}}>
			<ResultHeader />
			<ResultNav />
		</header>
	{/if}

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