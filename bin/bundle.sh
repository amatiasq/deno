#!/bin/bash -e

PROJECT="$1"
DEST="dist/$PROJECT"

if [ -z "$PROJECT" ]
then
    echo "Usage: $0 <project_name>"
    exit 1
fi

mkdir -p "$DEST"
deno bundle --config config/tsconfig.json "$PROJECT/main.ts" > "$DEST/bundle.js"
cp config/canvas.html "$DEST/index.html"
