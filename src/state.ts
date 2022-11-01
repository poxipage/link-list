import { state, type State } from "poxi";

export type Link = { text: string, url: string };
type Schema = { title: string, links: Array<Link> };
export const getState = () => state<Schema>();
export const getTitle = () => getState().get("title");
export const getLinks = () => getState().getArray("links");

export function onCreate(state: State<Schema>) {
  state.set({
    title: "List of links",
    links: [{ text: "Poxi", url: "https://poxi.page" }],
  });
}
