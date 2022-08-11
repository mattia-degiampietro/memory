import { writable } from "svelte/store";

export const activePage_ = writable('start');

export const nPlayers_ = writable(1);

export const nCards_ = writable(20);

export const timePlayer_  = writable(10000);

export const argument_ = writable('animals');

export const roundArray_ = writable([[]]);

export const pointCounter_ = writable(0);

export const totalPoints_ = writable(10);

export const players_ = writable([{name: 'ale', points: 0}, {name: 'fede', points: 0}, {name: 'gio', points: 0},])