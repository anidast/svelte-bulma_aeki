import {writable} from "svelte/store";

const user = writable({id: null, username: null, password: null});

export {user};