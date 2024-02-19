<script lang="ts">
	import { fly } from 'svelte/transition'
	import ResultHeader from './ResultHeader.svelte';
  import ResultNav from './ResultNav.svelte'

	let lastScrollTop = 0;
  let scrollingUp = true;

	window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const header = document.querySelector('header');

		if (scrollTop > 100 && scrollTop >lastScrollTop) {
			// Scrolling down
			scrollingUp = false;
			header?.classList.remove('visible');
		} else {
			// Scrolling up
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
		<div class="result-item">
      <span>wikipedia</span>
      <a href="https://en.wikipedia.org/wiki/Freddie_Mercury" target="_blank">Freddie Mercury</a>
      <p class="result-snippet">Freddie Mercury (born Farrokh Bulsara; 5 September 1946 - 24 November 1991) was a British singer and songwriter who achieved worldwide fame as the lead vocalist and pianist of the rock band Queen.Regarded as one of the greatest singers in the history of rock music, he was known for his</p>
    </div>
	</div>
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		// background-image: linear-gradient(180deg, var(--color-bg-2) 0%, var(--color-bg-2) 15%, var(--color-bg-2) 50%);
		header {
			position: relative;
			z-index: 15;	
		}
		.visible {
			position: sticky;
			top: 0;
			background-color: var(--color-bg-2);
  	}
	}


	.search-results {
		flex: 1;
		margin-left: 11rem;
  }

	.result-item {
    margin-top: 20px;
		// cursor: pointer;
		display: flex;
		flex-direction: column;
		max-width: 36rem;
		gap: 1rem;
		span {
			display: block;
			font-size: 0.875rem;
		}
		a {
			color:  rgb(29,78, 216); 
    	// text-decoration: none;
    	font-size: 1.25rem;
			font-weight: 500;
			line-height: 0px;
			// &:visited { 
			// 	color: rgb(147, 51, 234 )
			// }
		}
		p {
			margin: 0;
			font-size: 0.875rem;
			overflow: hidden;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
		}
  }
</style>