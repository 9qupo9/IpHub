package main

import (
	"net/http"
	"os"
	"strings"
)

func main() {
	серв := http.NewServeMux()

	серв.Handle("/media/", http.StripPrefix("/media/", http.FileServer(http.Dir("./media"))))
	серв.Handle("/ValidArticles/", http.StripPrefix("/ValidArticles/", http.FileServer(http.Dir("./ValidArticles"))))
	серв.Handle("/DevelArticles/", http.StripPrefix("/DevelArticles/", http.FileServer(http.Dir("./DevelArticles"))))
	серв.Handle("/DevelArticlesTwo/", http.StripPrefix("/DevelArticlesTwo/", http.FileServer(http.Dir("./DevelArticlesTwo"))))
	серв.Handle("/icon/", http.StripPrefix("/icon/", http.FileServer(http.Dir("./icon"))))
	серв.Handle("/ComArticles/", http.StripPrefix("/ComArticles/", http.FileServer(http.Dir("./ComArticles"))))
	серв.Handle("/EducArticles/", http.StripPrefix("/EducArticles/", http.FileServer(http.Dir("./EducArticles"))))
	серв.Handle("/EducArticlesTwo/", http.StripPrefix("/EducArticlesTwo/", http.FileServer(http.Dir("./EducArticlesTwo"))))
	серв.Handle("/EducResources/", http.StripPrefix("/EducResources/", http.FileServer(http.Dir("./EducResources"))))
	серв.Handle("/face/", http.StripPrefix("/face/", http.FileServer(http.Dir("./face"))))
	серв.Handle("/EducAbout/", http.StripPrefix("/EducAbout/", http.FileServer(http.Dir("./EducAbout"))))

	
	серв.HandleFunc("/validator-content", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "validator-content.html")
	})
	
	серв.HandleFunc("/validator-articles", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "validator-articles.html")
	})


	серв.HandleFunc("/community-content", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "community-content.html")
	})
	
	серв.HandleFunc("/community-articles", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "community-articles.html")
	})


	серв.HandleFunc("/education-about", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "education-about.html")
	})
	
	серв.HandleFunc("/education-tutorial", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "education-tutorial.html")
	})
	
	серв.HandleFunc("/education-resource", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "education-resource.html")
	})
	
	серв.HandleFunc("/education-articles", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "education-articles.html")
	})


	серв.HandleFunc("/developer-content", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "developer-content.html")
	})
	
	серв.HandleFunc("/developer-recap", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "developer-recap.html")
	})
	
	серв.HandleFunc("/developer-articles", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		http.ServeFile(отвечающий, запрос, "developer-articles.html")
	})

	серв.HandleFunc("/", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		if запрос.URL.Path != "/" {
			имяФайла := запрос.URL.Path[1:] + ".html"
			
			if _, ошибка := os.Stat(имяФайла); ошибка == nil {
				http.ServeFile(отвечающий, запрос, имяФайла)
				return
			}
			
			if strings.HasSuffix(запрос.URL.Path, ".js") {
				имяФайла := запрос.URL.Path[1:] 
				if _, ошибка := os.Stat(имяФайла); ошибка == nil {
					отвечающий.Header().Set("Content-Type", "application/javascript")
					http.ServeFile(отвечающий, запрос, имяФайла)
					return
				}
			}
			
			if запрос.URL.Path == "/favicon.ico" {
				отвечающий.Header().Set("Content-Type", "image/x-icon")
				отвечающий.WriteHeader(http.StatusNoContent)
				return
			}

			
			
			http.NotFound(отвечающий, запрос)
			return
		}
		
		http.ServeFile(отвечающий, запрос, "Index.html")
	})

	http.ListenAndServe(":8080", серв)
}
