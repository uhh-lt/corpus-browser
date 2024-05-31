import { Link } from "react-router-dom";

function CorpusOverview() {
  return (
    <div className="bg-gray-50 h-screen">
      <div className="container mx-auto bg-gray-50">
        <h1 className="pt-8 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-center">
          HCDS Corpus Browser
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 text-center">
          Elasticsearch-powered search interface to browse publicly available
          corpora
        </p>
        <div className="grid grid-cols-4 gap-4">
          <Link
            to={"/corpus/teaching"}
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              University Website Corpus
            </h5>
            <p className="font-normal text-gray-700">
              A crawl of German U15 websites. Universities among the most
              academically distinguished and internationally renowned
              institutions of the German science system.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CorpusOverview;
