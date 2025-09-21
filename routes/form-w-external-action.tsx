import { define } from "../utils.ts";

export default define.page(async (ctx) => {
  // bjesuiter: Form POST action will automatically be sent with partials enabled

  // TODO: issue: when executing external action, the url will change so that reloads will fail
  return (
    <div>
      <form
        method="POST"
        class="flex flex-col gap-4 p-4"
        action="/partials/form-echo-name"
      >
        <h1 class="text-3xl font-bold">Form Test with External Action</h1>
        <label for="name" class="text-gray-500">Name</label>
        <input
          type="text"
          name="name"
          class="border border-gray-500 bg-gray-50 inset-shadow-gray-500 inset-shadow-md"
        />
        <button type="submit" class="p-4 border border-gray-500 bg-gray-100">
          Submit
        </button>
      </form>
    </div>
  );
});
