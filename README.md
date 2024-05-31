# Corpus Browser

Elasticsearch-powered search interface to browse publicly available corpora

Try it out here: [HCDS Corpus Browser](https://corpus-browser.ltdemos.informatik.uni-hamburg.de/)

## Deployment

1. Clone this repository: `git clone https://github.com/uhh-lt/corpus-browser.git`
2. Navigate to the docker directory: `cd corpus-browser/docker`
3. Adjust the environment variables

   1. Copy the .env.example file to .env: `cp .env.example .env`
   2. Change UID and GID to the output of `id`

4. Run `docker compose up -d`
5. Visit [http://localhost:13100/](http://localhost:13100/) in your browser

## Import new corpus to elasticsearch

1. Navigate to the importer directory: `cd corpus-browser/importer`
2. Install conda environment: `conda env create -f environment.yaml`
3. Activate conda environment: `conda activate corpus-browser`
4. Run `python importer.py --index germanu15 --input_dir ../data/uhh/json`

## Developer Guide

1. Navigate to the docker directory (`cd corpus-browser/docker`) and remove `frontend` from `COMPOSE_PROFILES` in the `.env` file
2. Start the docker containers: `docker compose up -d`
3. Navigate to the frontend directory (`cd corpus-browser/frontend`) and install all dependencies (`npm i`)
4. Start the frontend: `npm run dev`
5. Visit [http://localhost:5173/](http://localhost:5173/) in your browser
