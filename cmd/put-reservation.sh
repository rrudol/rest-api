curl -v -H "If-Match: \"$4\"" -H 'Content-Type: application/json' -X PUT -d '{"bill": "15.99"}' http://localhost:4000/restaurants/$1/tables/$2/reservations/$3