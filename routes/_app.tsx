import { Partial } from "fresh/runtime";
import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh2-partial-missing-issue</title>
      </head>
      <body f-client-nav>
        <div class="absolute top-8 right-8 min-w-sm min-h-20">
          <Partial name="messages" mode="append" />
        </div>
        <Component />
      </body>
    </html>
  );
});
