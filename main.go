package main

import (
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path == "/" {
			http.ServeFile(w, r, "Index.html")
			return
		}
		http.FileServer(http.Dir(".")).ServeHTTP(w, r)
	})
	http.Handle("/media/", http.StripPrefix("/media/", http.FileServer(http.Dir("./media"))))
	http.ListenAndServe(":8080", nil)
}
