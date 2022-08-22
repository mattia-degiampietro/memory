import { writable } from "svelte/store";

export const activePage_ = writable('start');

export const nPlayers_ = writable(1);

export const nCards_ = writable(20);

export const timePlayer_  = writable(10);  //s

export const timeMessage_ = writable(2000);  //ms

export const time_ = writable(0);

export const argument_ = writable('animals');

export const roundArray_ = writable([[]]);

export const pointCounter_ = writable(0);

export const totalPoints_ = writable(10);

export const players_ = writable([]);

export const message_ = writable('msg');