package main

import (
	"fmt"
	"net/http"
)

func main() {
	Сервер := http.FileServer(http.Dir("."))
	http.Handle("/", Сервер)

	fmt.Println("http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
