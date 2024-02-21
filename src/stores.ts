import { type Writable, writable } from 'svelte/store'
import { type AllResult, type ImageResult, type NewsResult, type NewsBookmark } from '$lib/types/interface'

export const selectedTab: Writable<string> = writable('all')

export const searchAllResult: Writable<AllResult[]> = writable([])
export const searchImagesResult: Writable<ImageResult[]> = writable([])
export const searchNewsResult: Writable<NewsResult[]> = writable([])
export const searchNewsBookmark: Writable<NewsBookmark[]> = writable([])