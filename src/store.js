import { writable } from "svelte/store";

export const nPlayers_ = writable(1);
export const nCards_ = writable(10);
export const timePlayer_  = writable(10000);
export const pointsToWin_ = writable(10);
export const argument_ = writable('forms');
export const roundsArray_ = writable([]);