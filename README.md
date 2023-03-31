# typerunner-wasm

requirements:
    - install deno https://deno.land/manual@v1.32.2/getting_started/installation
    - install denon https://github.com/denosaurs/denon


then run `denon dev` 

If everything was successfull, you should have a webserver running on http://localhost:8000

You can try running:
```js
app.checkCode(`const v1: number = "abc"; const v2: number = 123;`)
```
in the browser console and it should print something like:
```
demo:6:8 - error TS0000: Type '"abc"' is not assignable to type 'number'
 
 »const v1: number = "abc"
 »      ~~
 
 Found 1 errors in demo
```