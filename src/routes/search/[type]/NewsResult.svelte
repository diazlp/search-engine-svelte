<script lang="ts">
  import { searchNewsResult, searchNewsBookmark } from "../../../stores";
  import { type NewsResult, type NewsBookmark } from '$lib/types/interface';
  import { formatDate } from "$lib/utils";
  import Icon from 'svelte-icons-pack/Icon.svelte';
  import AiOutlineCamera from "svelte-icons-pack/ai/AiOutlineCamera";
  import AiOutlineFieldTime from "svelte-icons-pack/ai/AiOutlineFieldTime";
  import FaBookmark from "svelte-icons-pack/fa/FaBookmark";
  import FaSolidBookmark from "svelte-icons-pack/fa/FaSolidBookmark";
  import FaSolidTrash from "svelte-icons-pack/fa/FaSolidTrash";

  let isShowBookmarkList: boolean = false;

  /*20 ITEMS TO POPULATE DUMMY NEWS RESULT DATA*/
  // let results: NewsResult[] = Array.from({ length: 20 }, (_) => ({
  //   date:"2024-02-19T00:00:00+00:00",
  //   title:"Gazprom grapples with collapse in sales to Europe",
  //   body:"Europe has defied expectations by breaking its addiction to Russian gas, and the state-run gas monopoly — Putin's trump card when he launched his full-scale invasion of Ukraine — has become one of the war's biggest corporate casualties.",
  //   url:"https://www.ft.com/content/e1b65044-1a97-429a-b1e2-c337a343ec2a?_hsenc=p2ANqtz-9_bC8IWBZHauNHave1d_DlUHh7MMpaFubvfX68bbozhCqCzvV3ZMUi3b-phSv3v1BPFy4F",
  //   image:"https://www.ft.com/__origami/service/image/v2/images/raw/https://d1e00ek4ebabms.cloudfront.net/production/be963363-7adb-4803-9264-3f5129936f25.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1",
  //   source:"The Financial Times",
  // }));

  /*COMMENT BELOW ON DEVELOPMENT*/
  let results: NewsResult[]
  searchNewsResult.subscribe((value: NewsResult[]) => {
    results = value
  })

  let bookmarks: NewsBookmark[]
  searchNewsBookmark.subscribe((value: NewsBookmark[]) => {
    bookmarks = value
  })

  function toggleReadingList() {
    const bookmarkEl = document.querySelector('.result-bookmark');

    if(isShowBookmarkList) {
      isShowBookmarkList = false
      bookmarkEl?.classList.remove('hidden');
    } else {
      isShowBookmarkList = true
      bookmarkEl?.classList.add('hidden');
    }
  }

  function handleBookmarkNews(record: NewsResult) {
    searchNewsBookmark.update((prevState) => [...prevState, {title: record.title, url: record.url, source: record.source}])
  }

  function handleUnbookmarkNews(record: NewsResult | NewsBookmark) {
    searchNewsBookmark.update((prevState) => prevState.filter(item => item.title !== record.title));
  }
</script>

<div class="results-wrapper">
  <div class="result-news-wrapper">
    <nav>
      <button on:click={toggleReadingList}>
        My Reading List
      </button>
    </nav>
    <div class="result-news">
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
            {#if Object.keys(bookmarks.filter((bookmark) => bookmark.title === result.title)).length}
              <button on:click={() => handleUnbookmarkNews(result)}>
                <Icon src={FaSolidBookmark} color="orangered" size="15" />
              </button>
            {:else}
              <button on:click={() => handleBookmarkNews(result)}>
                <Icon src={FaBookmark} color="orangered" size="15" />
              </button>
            {/if}
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
  <div class="result-bookmark" class:hidden={isShowBookmarkList}>
    <div class="bookmark-header">
      <h3>Reading List</h3>
    </div>
    <div class="bookmark-list">
      {#if !bookmarks.length}
        <div class="bookmark-notification">
          <Icon src={AiOutlineFieldTime} color="gray" size="100"/>
          <h4>Reading List will appear here</h4>
        </div>
      {/if}
      {#each bookmarks as bookmark}
        <div class="bookmark-item">
          <div>
            <h4><a href={bookmark.url} target="_blank" rel="noopener">{bookmark.title}</a></h4>
            <p>{bookmark.source}</p>
          </div>
          <button on:click={() => handleUnbookmarkNews(bookmark)}>
            <Icon src={FaSolidTrash} color="orangered" size="14"/>
          </button>
        </div>
      {/each}
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
      max-width: 37rem;
      line-height: 2rem;
      margin: 1rem 0;

      button {
        display: none;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 600;
        color: rgb(59, 130, 246);
        cursor: pointer;
        background: transparent;
        border: none;

        @media (min-width: 1310px) {
          display: block;
        }
      }
    }

    .result-news {
      margin-bottom: 2rem;
      max-width: 37rem;
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

          button {
            cursor: pointer;
            border: none;
            background: transparent;
            padding: 0.25rem;
          }
          
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
      display: none;
      position: fixed; 
      top: 9rem; 
      right: 2vw; 
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

      @media (min-width: 1310px) {
        display: block;
      }

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
          background-color: #fff;
          padding: 0.75rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;

          h4 {
            font-size: 15px;
            font-weight: bold;
            margin: 0;
            cursor: pointer;

            a {
              color: var(--color-theme-2);
            }
          }

          p {
            font-size: 14px;
            color: #888888;
            margin: 0;
          }

          button {
            background: transparent;
            color: #ffffff;
            border: none;
            padding-top: 4px;
            border-radius: 4px;
            cursor: pointer;
          }
        }

        .bookmark-notification {
          padding: 2rem;
          text-align: center;
          background-color: #fff;

          h4 {
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
            color: gray;
          }
        }
      }
    }

    .hidden {
      visibility: hidden;
    }
  }
</style>