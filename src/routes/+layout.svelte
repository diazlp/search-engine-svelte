<script lang='ts'>
	const year = new Date().getFullYear()

	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main >
		<slot />
	</main>

	<footer>
		<p>Copyright &copy; {year} Diaz Linggaputra</p>
	</footer>
</div>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
	
	.app {
    font-family: 'Roboto', sans-serif;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		overflow-y: hidden;
	}

	main {
		flex: 1; 
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
    color: #b3afaf; 
		font-weight: 500;
    text-align: center;
    padding: 10px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>
