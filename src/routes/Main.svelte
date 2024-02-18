<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation'
  import logo from '$lib/images/paaty-logo.png'
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import AiOutlineSearch  from 'svelte-icons-pack/ai/AiOutlineSearch';
  import { selectedTab } from '../stores'

  let searchQuery: string = "";

  function handleSearch(): void {
    if (searchQuery.trim() !== "") {
      let url:string =''
      
      switch($page.url.pathname) {
        case '/':
          url = 'all'
          selectedTab.set(url)
          break

        case '/images':
          url = 'images'
          selectedTab.set(url)
          break

        case '/news':
          url = 'news'
          selectedTab.set(url)
          break

        default: 
          break;
      }

      /* Redirect to search results page with the search query */
      goto(`/search/${url}?q=${searchQuery}`)
    }
  }

  function handleKeyDown(event: KeyboardEvent): void {
    if(event.key === 'Enter') {
      handleSearch()
    }
  }
</script>

<div class="container">
	<div class="search-logo">
		<img src={logo} alt="search-party-logo" />
		<div>{$page.url.pathname.substring(1)}</div>
	</div>
  <div class="search-input">
    <Icon src={AiOutlineSearch} color="gray" size="20" />
    <input
      type="text"
      placeholder="Launch search party here"
      bind:value={searchQuery}
      on:keydown={handleKeyDown}
    />
    <button on:click={handleSearch}>Launch</button>
  </div>
</div> 

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    gap: 2vh;
  }

	.search-logo {
		position: relative;
		margin: 0 auto;
		margin-top: 28px;
		width: fit-content;
		img {
			width: 272px; 
    	user-select: none;
		}
		div {
			position: absolute;
			right: 0;
			bottom: 0;
			font-weight: bold;
			color: var(--color-theme-2);
			user-select: none;
		}
	}

  .search-input {
    display: flex;
    align-items: center;
    width: 500px;
    padding: 10px;
    border-radius: 25px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		input {
			flex: 1;
    	padding: 10px;
    	border: none;
    	border-radius: 25px;
    	outline: none;
		}
		button {
			padding: 10px;
			font-size: 14px;
			border: none;
			border-radius: 25px;
			background-color: #1a73e8;
			color: white;
			cursor: pointer;
			transition: background-color 0.3s ease;
			&:hover {
				background-color: #0f62fe;
			}
		}
  }
</style>
