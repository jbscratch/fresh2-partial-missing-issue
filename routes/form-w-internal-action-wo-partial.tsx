import { Partial } from "fresh/runtime";
import { define } from "../utils.ts";

/**
 * Result: using a form with an internal action with partials enabled
 * will not work with 2 partials with the same name in the response.
 *
 * Test 2: using a form with an internal action which does not return a partial,
 * but a partial is available in _app.tsx
 */
export default define.page(async (ctx) => {
  let name = "";
  if (ctx.req.method === "POST") {
    const formData = await ctx.req.formData();
    name = formData.get("name")?.toString() ?? "";
  }

  // bjesuiter: Form POST action will automatically be sent with partials enabled
  return (
    <div>
      <form
        method="POST"
        class="flex flex-col gap-4 p-4"
        action="/form-w-internal-action-wo-partial"
      >
        <h1 class="text-3xl font-bold">Form Test with Internal Action</h1>
        <label for="name" class="text-gray-500">Name</label>
        <input
          type="text"
          name="name"
          class="border border-gray-500 bg-gray-50 inset-shadow-gray-500 inset-shadow-md"
        />
        <button type="submit" class="p-4 border border-gray-500 bg-gray-100">
          Submit
        </button>

        {name && (
          <p>Form submitted with name: {name} at {new Date().toISOString()}</p>
        )}
      </form>
    </div>
  );
});
