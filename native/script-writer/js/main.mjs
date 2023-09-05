import toast from "./components/toast/toast.mjs";
import { commands, SELECTED_MODE_EVENT, COMMAND_SENT_EVENT } from "./components/commands.mjs";

commands.addEventListener(SELECTED_MODE_EVENT, (event) => {
    toast(event.detail)
});

commands.addEventListener(COMMAND_SENT_EVENT, (event) => {
    toast(event.detail)
});