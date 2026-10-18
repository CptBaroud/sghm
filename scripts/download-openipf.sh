#!/bin/sh
# Download the latest OpenIPF dataset to data/openipf/openipf.csv
set -eu
dir="$(dirname "$0")/../data/openipf"
mkdir -p "$dir"
curl -fL -o "$dir/openipf.zip" https://openpowerlifting.gitlab.io/opl-csv/files/openipf-latest.zip
unzip -o -j -p "$dir/openipf.zip" '*.csv' > "$dir/openipf.csv"
rm "$dir/openipf.zip"
echo "Saved $dir/openipf.csv"
