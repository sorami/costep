#!/bin/bash

# Check if an input file is provided
if [ $# -ne 1 ]; then
  echo "Usage: $0 <input_file>"
  exit 1
fi

# Input and output filenames
input_file="$1"
output_file="$(basename "$input_file" | cut -d. -f1).webp"

# Convert to WebP using cwebp
cwebp "$input_file" -o "$output_file"

# Check if conversion was successful
if [ $? -ne 0 ]; then
  echo "Error converting image to WebP."
  exit 1
fi

# Resize using convert
convert "$output_file" -resize 50% "$output_file"

# Check if resize was successful
if [ $? -ne 0 ]; then
  echo "Error resizing image."
  exit 1
fi

echo "Image conversion and resize completed successfully."

