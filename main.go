package main

import (
	"net/http"
)

func main() {
	серв := http.NewServeMux()

	серв.Handle("/media/", http.StripPrefix("/media/", http.FileServer(http.Dir("./media"))))

	серв.HandleFunc("/", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "Index.html")
	})

	http.ListenAndServe(":8080", серв)
}
