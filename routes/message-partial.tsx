import { Partial } from "fresh/runtime";
import { define } from "../utils.ts";
import { RouteConfig } from "https://jsr.io/@fresh/core/2.1.1/src/types.ts";

// We only want to render the content, so disable
// the `_app.tsx` template as well as any potentially
// inherited layouts
export const config: RouteConfig = {
  skipAppWrapper: true,
  skipInheritedLayouts: true,
};

export default define.page((ctx) => {
  console.debug("Rendering /message-partial");
  return (
    <Partial name="messages">
      <div>Message: This is a test message in a messages partial</div>
    </Partial>
  );
});
