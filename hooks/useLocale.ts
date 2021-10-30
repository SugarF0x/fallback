import { wrapProperty } from "@nuxtjs/composition-api";

export function useLocale() {
  return wrapProperty('$i18n', false)()
}
