<script lang="ts">
	import { goto } from '$app/navigation'
  import logo from '$lib/images/paaty-logo.png'
	
	function handleImageClick(): void {
		goto('/')
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

    <input type="text" />
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
</style>