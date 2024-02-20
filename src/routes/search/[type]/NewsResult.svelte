<script lang="ts">
  import { searchNewsResult } from "../../../stores";
  import { type NewsResult } from '$lib/types/interface';
  import { formatDate } from "$lib/utils";
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import AiOutlineCamera from "svelte-icons-pack/ai/AiOutlineCamera";

  let results: NewsResult[] = Array.from({ length: 20 }, (_) => ({
    date:"2024-02-19T00:00:00+00:00",
    title:"Gazprom grapples with collapse in sales to Europe",
    body:"Europe has defied expectations by breaking its addiction to Russian gas, and the state-run gas monopoly — Putin's trump card when he launched his full-scale invasion of Ukraine — has become one of the war's biggest corporate casualties.",
    url:"https://www.ft.com/content/e1b65044-1a97-429a-b1e2-c337a343ec2a?_hsenc=p2ANqtz-9_bC8IWBZHauNHave1d_DlUHh7MMpaFubvfX68bbozhCqCzvV3ZMUi3b-phSv3v1BPFy4F",
    image:"https://www.ft.com/__origami/service/image/v2/images/raw/https://d1e00ek4ebabms.cloudfront.net/production/be963363-7adb-4803-9264-3f5129936f25.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1",
    source:"The Financial Times",
  }));

  // let results: NewsResult[]
  // searchNewsResult.subscribe((value: NewsResult[]) => {
  //   results = value
  // })
</script>

<div class="results-wrapper">
  <nav>
    <h1>Headlines</h1>
    <button>
      My Reading List
    </button>
  </nav>
  <div class="result-news">
    <div class="result-item">
      <div class="result-image">
        <img src="https://www.ft.com/__origami/service/image/v2/images/raw/https://d1e00ek4ebabms.cloudfront.net/production/be963363-7adb-4803-9264-3f5129936f25.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1" alt="News" />
      </div>
      
      <h2 class="result-title">
        <a rel="noopener" href="https://www.ft.com/content/e1b65044-1a97-429a-b1e2-c337a343ec2a?_hsenc=p2ANqtz-9_bC8IWBZHauNHave1d_DlUHh7MMpaFubvfX68bbozhCqCzvV3ZMUi3b-phSv3v1BPFy4F" target="_blank">
          Gazprom grapples with collapse in sales to Europe
        </a>
      </h2>
  
      <div class="result-source">
        <span class="result-source-url">
          <a rel="noopener" href="https://www.ft.com/content/e1b65044-1a97-429a-b1e2-c337a343ec2a?_hsenc=p2ANqtz-9_bC8IWBZHauNHave1d_DlUHh7MMpaFubvfX68bbozhCqCzvV3ZMUi3b-phSv3v1BPFy4F" target="_blank">
            The Financial Times
          </a>
        </span>
        <span class="result-source-time">
          | Mon, 19 February 2024
        </span>
      </div>
  
      <div class="result-snippet">
        Europe has defied expectations by breaking its addiction to Russian gas, and the state-run gas monopoly — Putin's trump card when he launched his full-scale invasion of Ukraine — has become one of the war's biggest corporate casualties.
      </div>
    </div>
    {#each results as result}
      <div class="result-item">
        <div class="result-image">
          {#if result.image}
            <img src={result.image} alt={result.title} />
          {:else}
            <Icon src={AiOutlineCamera} color="gray" size="100"  />
          {/if}
        </div>
        
        <h2 class="result-title">
          <a rel="noopener" href={result.url} target="_blank">
            {result.title}
          </a>
        </h2>
    
        <div class="result-source">
          <span class="result-source-url">
            <a rel="noopener" href={result.url} target="_blank">
              {result.source}
            </a>
          </span>
          <span class="result-source-time">
            | {formatDate(result.date)}
          </span>
        </div>
    
        <div class="result-snippet">
          {result.body}
        </div>
      </div>
     {/each}
  </div>
</div>

<style lang="scss">
  .results-wrapper {
    margin-right: 1rem;
    padding: 1rem 0;
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 36rem;
      margin-bottom: 0.5rem;

      h1 {
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 600;
      }

      button {
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 600;
        color: rgb(59, 130, 246);
        cursor: pointer;
        background: transparent;
        border: none;
      }
    }

    .result-news {
      margin-bottom: 2rem;
      max-width: 36rem;
      // overflow: hidden;
      // border-radius: 0.5rem;
      // border-width: 1px;

      .result-item {
        overflow: hidden;
        margin-bottom: 3rem;
        border: 1px solid transparent;
        cursor: pointer;

        .result-image {
          float: right;
          margin-left: 16px;
          height: 130px;
          width: 30%;
          overflow: hidden;
          position: relative;
          border-radius: 4px;
          
          img {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            object-fit: cover;
            object-position: top;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
          }
        }

        .result-title {
          position: static;
          overflow: hidden;
          display: block;
          font-size: 1.25em;
          line-height: 1.15;
          padding: 0;
          margin: 0;
          margin-bottom: 0.15em;
          max-width: 100%;
          a {
            color: var(--color-theme-2);
          }
        }

        .result-source {
          display: flex;
          justify-content: flex-start;
          margin: 1px 0 2px;
          font-size: 0.85rem;
          
          .result-source-url {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            flex-grow: 0;
            flex-shrink: 1;
            width: auto;

            a {
              color: var(--color-text);
            }
          }
          
          .result-source-time {
            flex-grow: 1;
            flex-shrink: 0;
            color: #666;
            padding: 0 5px;
          }
        }

        .result-snippet {
          color: #555555;
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 1rem 0;
        }
      }
    }
  }
</style>