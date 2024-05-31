#!/bin/bash

set -euo pipefail

if [ "${1:-}" = "" ]; then
    echo "Please provide a version parameter, e.g. release.sh 0.0.3"
    exit 1
fi

if [ "$(git diff-index --cached HEAD --)" ]; then
    echo "There are staged changes. Please run this script in a clean working directory."
    exit 1
fi

cd ../frontend
npm version "$1" --no-git-tag-version

cd ..
git add frontend/package.json frontend/package-lock.json
git commit -m "Release v$1"
git tag v"$1"
git push
git push --tags
