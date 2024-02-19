import { json } from '@sveltejs/kit';
import { TOKEN, GOOGLE_SEARCH_ALL_API_KEY } from '$env/static/private';
import { SearchType } from '$lib/types/enum.js';

export async function GET({ url }) {
  let response: any
	const queryParams = url.searchParams.get('q')
	const typeParams = url.searchParams.get('type')

  if(typeParams === SearchType.ALL) {
    // response = await fetch(
    //   `https://google-search74.p.rapidapi.com/?query=${queryParams}&limit=20&related_keyword='false'`,
    //   {
    //     cache: 'force-cache',
    //     method: 'GET',
    //     headers: {
    //       'X-RapidAPI-Key': GOOGLE_SEARCH_ALL_API_KEY,
    //   		'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
    //     },
    //   },
    // )
    response = await fetch(
      `https://api.raindrop.io/rest/v1/raindrops/41720507`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      },
    )
  } else if(typeParams === SearchType.IMAGES) {
    response = await fetch(
      `https://api.raindrop.io/rest/v1/raindrops/41720507`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      },
    )
  } else if (typeParams === SearchType.NEWS) {
    response = await fetch(
      `https://api.raindrop.io/rest/v1/raindrops/41720507`,
      {
        cache: 'no-cache',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      },
    )
  }

  const data = await response.json()
	return json(data);
}
