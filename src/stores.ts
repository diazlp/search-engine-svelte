import { type Writable, writable } from 'svelte/store'

export const selectedTab: Writable<string> = writable('')
export const searchAllResult: Writable<any> = writable([])