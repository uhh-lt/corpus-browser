import argparse
import json
from pathlib import Path
from typing import List
from elasticsearch import Elasticsearch

from tqdm import tqdm

parser = argparse.ArgumentParser(description="Corpus Browser Importer")
parser.add_argument(
    "--es_url",
    type=str,
    help="URL of the elasticsearch database",
    default="http://localhost:13101/",
    dest="es_url",
)
parser.add_argument(
    "--index",
    type=str,
    help="Name of the index to be created",
    required=True,
    dest="index",
)
parser.add_argument(
    "--input_dir",
    type=str,
    help="Path to directory containing .json files to be imported",
    required=True,
    dest="input_dir",
)
args = parser.parse_args()
client = Elasticsearch(args.es_url)

if client.ping():
    print(f"Connected to Elasticsearch at {args.es_url}")
else:
    print(f"Could not connect to Elasticsearch at {args.es_url}")
    exit()


def get_files(input_dir: str) -> List[str]:
    files = []
    for file in Path(input_dir).rglob("*.json"):
        files.append(str(file))
    return files


def create_index(index_name: str) -> None:
    if client.indices.exists(index=index_name):
        print(f"Index '{index_name}' already exists. Do you want to delete it? (y/N)")
        response = input()
        if response.lower() != "y":
            exit()

        client.indices.delete(index=index_name)
        print("Deleted existing index '{index_name}'")

    client.indices.create(index=index_name)
    print(f"Created index '{index_name}'")


def main():
    files = get_files(args.input_dir)
    print(f"Found {len(files)} files in {args.input_dir}. Ready to index.")

    create_index(args.index)

    print("Starting indexing...")
    for file in tqdm(files, desc="Indexing files"):
        with open(file, "r") as f:
            data = json.load(f)
        client.index(index=args.index, body=data)


if __name__ == "__main__":
    main()
