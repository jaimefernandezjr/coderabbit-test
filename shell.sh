#!/bin/bash

API_KEY="hardcoded_api_key"

unused_var="This variable is never used"

count=0
while [ $count -lt 5 ]; do
    echo "Count is: $count"
    count=$((count + 1))
done

mkdir /some/directory

current_dir=`pwd`

echo "This is the unset variable: $unset_var"

while true; do
    echo "This loop will run forever"
done

echo "This line should have a shebang at the start"

touch -c file.txt

cp /path/to/source.txt /path/to/destination.txt

read -p "Enter your name: " user_name
echo "Hello, $user_name!"

if [ $count = 0 ]; then
    echo "Count is zero"
fi
