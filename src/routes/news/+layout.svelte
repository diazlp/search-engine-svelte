<script lang='ts'>
	import Header from '../Header.svelte';
	import '../styles.css';

	const year = new Date().getFullYear()
</script>

<div class="app">
	<Header />

	<slot />

	<footer>
		<p>Copyright &copy; {year} Diaz Linggaputra</p>
	</footer>
</div>

<style lang="scss">	
	.app {
    font-family: 'Roboto', sans-serif;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		overflow-y: hidden;
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
