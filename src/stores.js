import {writable} from "svelte/store";

const apiUrl = "http://localhost:8009/aeki/v1/";

const user = writable({id: null, username: null, password: null});

const cart_id = writable(null);

export {apiUrl, user, cart_id};