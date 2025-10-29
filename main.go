package main

import (
	"net/http"
)

func main() {
http.Handle("/", http.FileServer(http.Dir(".")))
	http.Handle("/media/", http.StripPrefix("/media/", http.FileServer(http.Dir("./media"))))
	http.ListenAndServe(":8080", nil)
}
