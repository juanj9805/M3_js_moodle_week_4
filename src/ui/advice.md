1. How to Implement a Dumb & Reactive UI (Practically)

“Dumb and reactive” is not a slogan. It is a mechanical way of writing code.

Below is the only acceptable mental model.

Step 1 — UI Does NOT Own Data

UI never asks:

“What should I do?”

UI only asks:

“What happened?” and “What do I need to render?”

Bad UI thinking ❌
if (user.role === "admin") {
showAdminPanel();
}

UI is deciding business rules. This is wrong.

Correct UI thinking ✅
const state = getState();
render(state);

UI does not care why the user is admin.

Step 2 — UI Talks ONLY to Logic

UI must never do this:

fetch("/products");
localStorage.setItem(...);

Correct flow
User clicks → UI calls logic → logic updates state → UI re-renders

Example:

import { addProduct } from "../logic/inventoryService.js";
import { getState } from "../state/store.js";

button.addEventListener("click", async () => {
await addProduct(formData);
render(getState());
});

UI does not validate rules.
UI does not enforce permissions.

Step 3 — Rendering Is a Pure Function of State

Your UI rendering should behave like this:

function render(state) {
if (!state.isAuthenticated) {
renderLogin();
} else {
renderDashboard(state);
}
}

Important:

Rendering depends on state only

No API calls

No storage

No decisions beyond “what to show”

Step 4 — Events Are Just Signals

Events are signals, not logic.

Bad ❌
button.addEventListener("click", () => {
if (stock > 0) {
stock--;
}
});

Good ✅
button.addEventListener("click", () => {
requestAddProduct(formData);
});

UI signals intent.
Logic decides outcome.

Step 5 — UI Never Mutates State

UI does NOT do this:

state.inventory.push(item);

UI does this instead:

await inventoryService.addItem(item);
render(getState());

Step 6 — You Should Be Able to Delete the UI

This is the acid test.

If I delete /ui:

Logic still works

Data still works

State still works

If deleting UI breaks rules → architecture is wrong.
