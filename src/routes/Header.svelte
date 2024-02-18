<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<a href="/" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>Search</a>
		<a href="/images" aria-current={$page.url.pathname === '/images' ? 'page' : undefined}>Images</a>
		<a href="/news" aria-current={$page.url.pathname === '/news' ? 'page' : undefined}>News</a>
	</nav>
</header>

<style lang="scss">
	header {
    width: 100%;
    padding: 20px 0;
    display: flex;
		position: fixed;
		justify-content: flex-end;
    top: 0;
    left: 0;
    z-index: 10;
	}

	nav {
		display: flex;
		a {
			text-decoration: none;
			color: #333;
			font-weight: bold;
			padding: 10px 20px;
			margin: 0 10px;
			border-radius: 5px;
			transition: background-color 0.3s ease;
		}
	}

	a[aria-current="page"] {
		color: var(--color-theme-2);
	}
</style>
