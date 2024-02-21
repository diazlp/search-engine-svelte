<script lang="ts">
  import { searchNewsResult } from "../../../stores";
  import { type NewsResult } from '$lib/types/interface';
  import { formatDate } from "$lib/utils";
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import AiOutlineCamera from "svelte-icons-pack/ai/AiOutlineCamera";
  import BiSolidTrashAlt from "svelte-icons-pack/bi/BiSolidTrashAlt";

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
  <div class="result-news-wrapper">
    <nav>
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
              <Icon src={AiOutlineCamera} color="gray" size="100" />
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
  <div class="result-bookmark">
    <div class="bookmark-header">
      <h3>Reading List</h3>
    </div>
    <div class="bookmark-list">
      <div class="bookmark-item">
        <div>
          <h4>Gazprom grapples with collapse in sales to Europe</h4>
          <p>News Source</p>
        </div>
        <button>
          <Icon src={BiSolidTrashAlt} color="white" size="25"/>
        </button>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .result-news-wrapper {
    display: flex;
    flex-direction: column;
  }

  .results-wrapper {
    margin-right: 1rem;
    padding: 1rem 0;
    display: flex;

    nav {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      max-width: 36rem;
      line-height: 2rem;
      margin: 1rem 0;

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
      justify-self: flex-start;

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

    .result-bookmark {
      flex: 1;
      width: 100%;
      margin: 0 4rem;
      position: fixed; 
      top: 9rem; 
      right: 3vw; 
      max-width: 29rem;
      width: 100%; 
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      color: var(--color-theme-2);
      z-index: 100; 
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      user-select: none;
      background-color: var(--color-bg-2);
      border-radius: 8px;
      font-size: 15px;

      .bookmark-header {
        padding: 0.25rem 0.75rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-bottom: 0.2rem solid rgba(0, 0, 0, 0.1);

        h2 {
          font-weight: bold;
          margin-bottom: 5px;
        }
      }

      .bookmark-list {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
        overflow-y: auto;
        max-height: 50vh;
        
        .bookmark-item {
          background-color: #f2f2f2;
          padding: 0.75rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;

          h4 {
            font-size: 15px;
            font-weight: bold;
            margin: 0;
          }

          p {
            font-size: 14px;
            color: #888888;
            margin: 0;
          }

          button {
            background-color: var(--color-theme-1); /* Red color for delete button */
            color: #ffffff;
            border: none;
            padding-top: 4px;
            border-radius: 4px;
            cursor: pointer;

            &:hover {
              background-color: #cc4c3f;
            }
          }
        }
      }
    }
  }
</style>