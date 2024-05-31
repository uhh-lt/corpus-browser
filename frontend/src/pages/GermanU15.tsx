import {
  ErrorBoundary,
  Facet,
  Paging,
  PagingInfo,
  Results,
  ResultsPerPage,
  SearchBox,
  SearchProvider,
  Sorting,
  WithSearch,
} from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import type { SearchDriverOptions } from "@elastic/search-ui";
import ElasticsearchAPIConnector from "@elastic/search-ui-elasticsearch-connector";
import React from "react";

const connector = new ElasticsearchAPIConnector({
  host: import.meta.env.VITE_APP_ELASTICSEARCH,
  index: "germanu15",
});

// https://docs.elastic.co/search-ui/api/core/configuration
const config: SearchDriverOptions = {
  searchQuery: {
    search_fields: {
      title: {},
      text: {},
    },
    result_fields: {
      title: {},
      text: {
        snippet: {},
      },
      tag: {},
      url: {},
    },
    disjunctiveFacets: ["tag.keyword"],
    facets: {
      "tag.keyword": { type: "value" },
    },
  },
  apiConnector: connector,
  alwaysSearchOnInitialLoad: true,
};

const SORT_OPTIONS = [
  {
    name: "Relevance",
    value: "",
    direction: "",
  },
  {
    name: "Title",
    value: [
      {
        field: "title.keyword",
        direction: "asc",
      },
    ],
  },
];

function GermanU15() {
  return (
    <SearchProvider config={config}>
      <WithSearch
        mapContextToProps={({ wasSearched }) => ({
          wasSearched,
        })}
      >
        {({ wasSearched }) => {
          return (
            <div className="App">
              <ErrorBoundary>
                <Layout
                  header={
                    <SearchBox debounceLength={300} searchAsYouType={true} />
                  }
                  sideContent={
                    <div>
                      {wasSearched && (
                        <Sorting label={"Sort by"} sortOptions={SORT_OPTIONS} />
                      )}
                      <Facet
                        field={"tag.keyword"}
                        label="Tag"
                        filterType="any"
                        isFilterable={true}
                      />
                    </div>
                  }
                  bodyContent={<Results titleField="title" urlField="url" />}
                  bodyHeader={
                    <React.Fragment>
                      {wasSearched && <PagingInfo />}
                      {wasSearched && <ResultsPerPage />}
                    </React.Fragment>
                  }
                  bodyFooter={<Paging />}
                />
              </ErrorBoundary>
            </div>
          );
        }}
      </WithSearch>
    </SearchProvider>
  );
}

export default GermanU15;
