import * as State from "../state/state.js";
import * as Session from "../state/session.js";

if (Session.isAuthenticated() !== "true") {
  window.location.href = "login.html";
}
