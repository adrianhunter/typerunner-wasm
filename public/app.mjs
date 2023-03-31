import mod from "./typescript_main.mjs";

const app = await mod();

console.log(app);
window.app = app;
