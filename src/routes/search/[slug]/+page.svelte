<script lang="ts">
	import { goto } from '$app/navigation'
  import logo from '$lib/images/paaty-logo.png'
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import BsSearch from "svelte-icons-pack/bs/BsSearch";
	import BsImage from "svelte-icons-pack/bs/BsImage";
	import BsNewspaper from "svelte-icons-pack/bs/BsNewspaper";
	import { selectedTab } from '../../../stores'

	let selected_tab: string;

	selectedTab.subscribe((value) => {
		selected_tab = value
	})

	function handleImageClick(): void {
		goto('/')
	}

	function handleSelectedTab(name: string): void {
		selectedTab.set(name)
	}
</script>

<svelte:head>
	<title>Search Result</title>
	<meta name="description" content="Search Party Result Page" />
</svelte:head>

<div class="app">
	<header>
		<div>
			<button on:click={handleImageClick}>
				<img
					src={logo}
					alt="search-party-logo"
					width={100}
					height={50}
				/>
			</button>

			<input type="text" />
		</div>
	</header>

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

	<div class="search-result">
		search result
	</div>
</div>

<style lang="scss">
	.app {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	header {
		position: relative;
		z-index: 15;
		div {
			position: relative;
			display: flex;
			align-items: center;
			flex-direction: row;
			padding: 1rem 2rem;

			button {
				cursor: pointer;
				border: none;
				background-color: transparent;
				user-select: none;
				img {	
					margin-right: 1rem;
				}	
			}

			input {
				flex: 1;
				padding: 10px 20px;
				border: none;
				border-radius: 1.5rem;
				outline: none;
				box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
				max-width: 34rem;
			}
		}
	}

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

	.search-result {
		flex: 1;
		margin-left: 2rem;
	}
</style>