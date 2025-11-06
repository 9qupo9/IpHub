package main

import (
	"net/http"
	"os"
)

func main() {
	серв := http.NewServeMux()

	серв.Handle("/media/", http.StripPrefix("/media/", http.FileServer(http.Dir("./media"))))
	серв.Handle("/articles/", http.StripPrefix("/articles/", http.FileServer(http.Dir("./articles"))))

	серв.HandleFunc("/", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		if запрос.URL.Path != "/" {
			имяФайла := запрос.URL.Path[1:] + ".html"
			
			if _, ошибка := os.Stat(имяФайла); ошибка == nil {
				http.ServeFile(отвечающий, запрос, имяФайла)
				return
			}
			
			if запрос.URL.Path == "/Header.js" {
				отвечающий.Header().Set("Content-Type", "application/javascript")
				http.ServeFile(отвечающий, запрос, "Header.js")
				return
			}
			
			if запрос.URL.Path == "/ValidatorContent.js" {
				отвечающий.Header().Set("Content-Type", "application/javascript")
				http.ServeFile(отвечающий, запрос, "ValidatorContent.js")
				return
			}
			
			if запрос.URL.Path == "/UsefulArticles.js" {
				отвечающий.Header().Set("Content-Type", "application/javascript")
				http.ServeFile(отвечающий, запрос, "UsefulArticles.js")
				return
			}
			
			http.NotFound(отвечающий, запрос)
			return
		}
		
		http.ServeFile(отвечающий, запрос, "Index.html")
	})

	http.ListenAndServe(":8080", серв)
}
