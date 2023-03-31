import { serve, serveStatic } from "https://deno.land/x/sift@0.6.0/mod.ts";
const indexHtml = Deno.readFile(
  new URL("./public/index.html", import.meta.url)
);

serve({
  "/": async () =>
    new Response(await indexHtml, {
      headers: {
        "Cross-Origin-Embedder-Policy": "require-corp",
        "Cross-Origin-Opener-Policy": "same-origin",
        "content-type": "text/html",
      },
    }),
  "/:filename+": serveStatic("public", {
    intervene: (_, resp) => {
      resp.headers.set("Cross-Origin-Embedder-Policy", "require-corp");
      resp.headers.set("Cross-Origin-Opener-Policy", "same-origin");
      return resp;
    },
    baseUrl: import.meta.url,
  }),
});
