<script lang="ts">
  import logo from '$lib/images/paaty-logo.png'
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import AiOutlineSearch  from 'svelte-icons-pack/ai/AiOutlineSearch';

  let searchQuery: string = "";

  function search(): void {
    if (searchQuery.trim() !== "") {
      // Redirect to search results page with the search query
      const url = `https://www.google.com/search?q=${encodeURIComponent(
        searchQuery
      )}`;
      window.location.href = url;
    }
  }

  function handleKeyDown(event: KeyboardEvent): void {
    if(event.key === 'Enter') {
      search()
    }
  }
</script>

<div class="container">
  <img src={logo} alt="Logo" class="search-logo" />
  <div class="search-container">
    <Icon src={AiOutlineSearch} color="gray" size="20" className="custom-icon" title="Custom icon params" />
    <input
      type="text"
      class="search-input"
      placeholder="Launch search party here"
      bind:value={searchQuery}
      on:keydown={handleKeyDown}
    />
    <button class="search-button" on:click={search}>Launch</button>
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

  .search-container {
    display: flex;
    align-items: center;
    width: 500px;
    padding: 10px;
    border-radius: 25px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .search-logo {
    width: 272px; 
    user-select: none;
  }

  .search-input {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 25px;
    outline: none;
  }

  .search-button {
    padding: 10px;
    font-size: 14px;
    border: none;
    border-radius: 25px;
    background-color: #1a73e8;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .search-button:hover {
    background-color: #0f62fe;
  }
</style>