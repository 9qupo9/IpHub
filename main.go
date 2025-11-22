package main

import (
	"net/http"
	"os"
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
			
			if запрос.URL.Path == "/ValidatorArticles.js" {
				отвечающий.Header().Set("Content-Type", "application/javascript")
				http.ServeFile(отвечающий, запрос, "ValidatorArticles.js")
				return
			}

			if запрос.URL.Path == "/DeveloperArticles.js" {
				отвечающий.Header().Set("Content-Type", "application/javascript")
				http.ServeFile(отвечающий, запрос, "DeveloperArticles.js")
				return
			}
			
			if запрос.URL.Path == "/CommunityArticles.js" {
				отвечающий.Header().Set("Content-Type", "application/javascript")
				http.ServeFile(отвечающий, запрос, "CommunityArticles.js")
				return
			}

			if запрос.URL.Path == "/DeveloperArticlesTwo.js" {
				отвечающий.Header().Set("Content-Type", "application/javascript")
				http.ServeFile(отвечающий, запрос, "DeveloperArticlesTwo.js")
				return
			}

			if запрос.URL.Path == "/DeveloperContent.js" {
				отвечающий.Header().Set("Content-Type", "application/javascript")
				http.ServeFile(отвечающий, запрос, "DeveloperContent.js")
				return
			}

			if запрос.URL.Path == "/EducationArticles.js" {
				отвечающий.Header().Set("Content-Type", "application/javascript")
				http.ServeFile(отвечающий, запрос, "EducationArticles.js")
				return
			}

			if запрос.URL.Path == "/EducationArticlesTwo.js" {
				отвечающий.Header().Set("Content-Type", "application/javascript")
				http.ServeFile(отвечающий, запрос, "EducationArticlesTwo.js")
				return
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
