# curl --header 'If-Match: "2a-Eborn9I9DzupjsFH1FqbUjOHvOw"' -H 'Content-Type: application/json' -X PUT -d '{ "name": "Pod sosną" }' http://localhost:4000/restaurants/5b379338875b1c343ddac606
curl -v -H "If-Match: \"$2\"" -H 'Content-Type: application/json' -X PUT -d '{"name":"The Brand new Restaurant"}' http://localhost:4000/restaurants/$1