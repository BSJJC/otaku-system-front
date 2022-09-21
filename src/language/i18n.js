import { createI18n } from "vue-i18n";
import messages from "./index"

const i18n = createI18n({
 legacy: false,
 locale: localStorage.lang || "zh",
 messages
})

export default i18n