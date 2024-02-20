import { type Writable, writable } from 'svelte/store'
import { type AllResult, type ImageResult } from '$lib/types/interface'

export const selectedTab: Writable<string> = writable('all')

export const searchAllResult: Writable<AllResult[]> = writable([])
export const searchImagesResult: Writable<ImageResult[]> = writable([])
export const searchNewsResult: Writable<any> = writable([])