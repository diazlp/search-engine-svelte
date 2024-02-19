import { type Writable, writable } from 'svelte/store'
import { type AllResult } from '$lib/types/interface'

export const selectedTab: Writable<string> = writable('all')

export const searchAllResult: Writable<AllResult[]> = writable([])
export const searchImagesResult: Writable<any> = writable([])
export const searchNewsResult: Writable<any> = writable([])