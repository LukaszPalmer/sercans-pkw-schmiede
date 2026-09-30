/** Minimalistischer className-Joiner – filtert falsy-Werte, keine Runtime-Abhängigkeit. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}
