<script lang="ts">
	import { onMount } from 'svelte';
	import { selectedTab, isLoadingResult, searchAllResult, searchImagesResult, searchNewsResult } from '../../../stores'
	import { SearchType } from '$lib/types/enum'
	// import { fly } from 'svelte/transition'
	import { page } from '$app/stores'
	import ResultHeader from './ResultHeader.svelte';
  import ResultNav from './ResultNav.svelte'
	import AllResult from './AllResult.svelte'
  import ImageResult from './ImageResult.svelte'
  import NewsResult from './NewsResult.svelte'
	const { type } = $page.params
	const queryParams = $page.url.searchParams.get('q')

	let lastScrollTop = 0;
  let scrollingUp = true;
	let selected_tab: string;
	let is_loading_result: boolean;

	selectedTab.subscribe((value) => selected_tab = value)
	isLoadingResult.subscribe((value) => is_loading_result = value)

	function handleScroll(): void {
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

	async function handleFetchResult(): Promise<void> {
		isLoadingResult.set(true)
		try {
			/*Fetch current query params */
			const response = await fetch(`/search?q=${queryParams}&type=${type}`)
			const data = await response.json()
	
			/*Update corresponding store*/
			switch(type) {
				case SearchType.ALL:
					searchAllResult.set(data.results)
					break;
	
				case SearchType.IMAGES:
					searchImagesResult.set(data.result);
					break;
	
				case SearchType.NEWS:
					searchNewsResult.set(data.news);
					break;
	
				default:
					break;
			}
			isLoadingResult.set(false)
		} catch (error) {
			isLoadingResult.set(false)
		}
	}

	onMount(async () => {
		await handleFetchResult()
	});
</script>

<div class="app">
	{#if is_loading_result}
		<div class="loading-result"></div>
	{/if}

	<header class:visible={scrollingUp}>
		<ResultHeader />
		<ResultNav />
	</header>

	<div class="search-results">
		{#if selected_tab === SearchType.ALL}
			<AllResult />
		{:else if selected_tab === SearchType.IMAGES}
			<ImageResult />
		{:else if selected_tab === SearchType.NEWS}
			<NewsResult />
		{/if}
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
		margin-left: 2rem;

		@media (min-width: 1024px) {
      margin-left: 11rem;
    }
  }
</style>