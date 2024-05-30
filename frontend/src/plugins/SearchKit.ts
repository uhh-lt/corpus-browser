import Client from "@searchkit/instantsearch-client";
import Searchkit from "searchkit";

const sk = new Searchkit({
  connection: {
    host: import.meta.env.VITE_APP_ELASTICSEARCH,
  },
  search_settings: {
    search_attributes: ['title', 'text', 'tag'],
    result_attributes: ['url', 'title', 'html', 'text', 'tag'],
    highlight_attributes: ['title', 'text'],
    snippet_attributes: ['text'],
    facet_attributes: [
      { attribute: 'tag', field: 'tag', type: "string" }
    ]
  },
})
 
export const searchClient = Client(sk);