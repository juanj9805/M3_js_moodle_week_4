UI → Logic → State → Data

## 3. UI Layer (`/src/ui`)

### Responsibilities

- Render HTML
- Handle user events
- Call logic layer
- Read state for rendering

### Allowed

- `document.querySelector`
- Event listeners
- DOM updates
- Calling logic functions

### Forbidden

- Accessing `localStorage`
- Reading/writing `db.json`
- Making business decisions
- Mutating state directly

### Rule

UI must be **dumb and reactive**.

---

## 4. Logic Layer (`/src/logic`)

### Responsibilities

- Application rules
- Auth simulation logic
- Inventory rules
- Validation

### Files (example)

authService.js
inventoryService.js

### Allowed

- Calling `api.js`
- Calling `store.js`
- Pure functions

### Forbidden

- DOM access
- Storage access
- UI imports

### Rule

## Logic contains **rules**, not rendering.

## 5. State Layer (`/src/state`)

### Responsibilities

- Centralized application state
- Controlled state mutations

### File

### State Example

```js
state = {
  currentUser: null,
  isAuthenticated: false,
  inventory: []
}

### Exposed API

getState()
setUser(user)
setInventory(items)
resetState()

Forbidden

Direct state mutation

Multiple state sources

DOM-derived state

Rule

State changes must be explicit and named.

6. Data Layer (/src/data)
Responsibilities

Abstract persistence

Hide storage mechanism

File
api.js

Exposed API (example)
getUsers()
getInventory()
saveInventory(items)
saveSession(session)
clearSession()

10. Self-Audit Checklist (Must All Be YES)

Can I replace storage without touching UI?

Can I test logic without a browser?

Does UI contain zero business rules?

Is all state mutation intentional?

Is data access centralized?

If any answer is NO, refactor is incomplete.
```

### Completed

## 1. Objective

Refactor the project to enforce **clear architectural boundaries**:

- UI (presentation)
- Business logic (rules)
- State management (single source of truth)
- Data access (storage abstraction)

The goal is **discipline**, not functionality.

## 2. Target Folder Structure

/src
/ui → HTML, CSS, DOM interaction
/logic → Business rules, workflows
/state → Application state
/data → Data persistence abstraction
