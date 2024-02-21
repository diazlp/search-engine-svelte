<script lang="ts">
  import { page } from '$app/stores';
	import { goto } from '$app/navigation'
  import logo from '$lib/images/paaty-logo.png'
	import { selectedTab, searchAllResult, searchImagesResult, searchNewsResult } from '../../../stores'
	import { SearchType } from '$lib/types/enum'
	import Icon from 'svelte-icons-pack/Icon.svelte';
  import AiOutlineSearch  from 'svelte-icons-pack/ai/AiOutlineSearch';
	import AiOutlineClose from "svelte-icons-pack/ai/AiOutlineClose";

	function handleImageClick(): void {
		if($selectedTab === SearchType.ALL) {
			goto('/')
		} else {
			goto(`/${$selectedTab}`)
		}
	}

	let searchQuery: string = "";

	async function handleSearch(): Promise<void> {
		if (searchQuery.trim() !== "") {
			const { type } = $page.params
			
			/* Redirect to corresponding results page with the search query */
			goto(`/search/${type}?q=${searchQuery}`)

			/*Fetch the current input*/
			const response = await fetch(`/search?q=${searchQuery}&type=${type}`)
			const data = await response.json()

			/*Update corresponding store*/
			switch(type) {
				case SearchType.ALL:
					// searchAllResult.set(data.items);
					searchAllResult.set(data.results);
					break;

				case SearchType.IMAGES:
					// searchImagesResult.set(data.items);
					searchImagesResult.set(data.result);
					break;

				case SearchType.NEWS:
					// searchNewsResult.set(data.items);
					searchNewsResult.set(data.news);
					break;

				default:
					break;
			}

			handleResetSearch()
		}
	}

	function handleKeyDown(event: KeyboardEvent): void {
		if(event.key === 'Enter') {
			handleSearch()
		}
	}

	function handleResetSearch() {
		/* Remove searchQuery input text */
		searchQuery = ''
	}
</script>

<svelte:head>
	<title>Search Party Result</title>
	<meta name="description" content="Search Party Result Page" />
</svelte:head>

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

		<div class="search-input">
			<input
			type="text"
			bind:value={searchQuery}
			on:keydown={handleKeyDown}
			/>
			{#if searchQuery}
				<button on:click={handleResetSearch}>
					<Icon src={AiOutlineClose} color="gray" size="18" />
				</button>
			{:else}
				<Icon src={AiOutlineSearch} color="gray" size="22" />
			{/if}
		</div>
  </div>
</header>

<style lang="scss">
  header {
		position: relative;
		z-index: 15;
		div {
			position: relative;
			display: flex;
			align-items: center;
			flex-direction: row;
			padding: 1rem;
			
			@media (min-width: 640px) {
				padding-left: 2rem;
				padding-right: 2rem;
			}

			button {
				cursor: pointer;
				border: none;
				background-color: transparent;
				user-select: none;
				img {	
					margin-right: 1rem;

					@media (min-width: 640px) {
						margin-right: 2rem;
					}
				}	
			}
			
			.search-input {
    		display: flex;
				align-items: center;
				width: 100%;
   			max-width: 36rem;
				padding: 10px;
				border-radius: 25px;
				background-color: white;
				box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
				input {
					width: 100%;
					flex: 1;
					padding: 0 20px;
					max-width: 36rem;
					border: none;
					border-radius: 1.5rem;
					outline: none;
				}
				button {
					background: transparent;
					border: none;
				}
		}
		}
	}
</style>