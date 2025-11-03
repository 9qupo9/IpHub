package main

import (
	"net/http"
)

func main() {
	серв := http.NewServeMux()

	серв.Handle("/media/", http.StripPrefix("/media/", http.FileServer(http.Dir("./media"))))

	серв.HandleFunc("/validator.html", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "validator.html")
	})

	серв.HandleFunc("/developer.html", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "developer.html")
	})

	серв.HandleFunc("/community.html", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "community.html")
	})

	серв.HandleFunc("/education.html", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "education.html")
	})

	серв.HandleFunc("/Header.js", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "Header.js")
	})
	
	серв.HandleFunc("/", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "Index.html")
	})

	http.ListenAndServe(":8080", серв)
}
