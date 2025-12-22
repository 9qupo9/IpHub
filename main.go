package main

import (
	"net/http"
	"os"
	"strings"
)

func main() {
	серв := http.NewServeMux()

	
	серв.Handle("/media/", http.StripPrefix("/media/", http.FileServer(http.Dir("./media"))))
	серв.Handle("/icon/", http.StripPrefix("/icon/", http.FileServer(http.Dir("./icon"))))
	серв.Handle("/face/", http.StripPrefix("/face/", http.FileServer(http.Dir("./face"))))
	
	
	серв.Handle("/ValidArticles/", http.StripPrefix("/ValidArticles/", http.FileServer(http.Dir("./ValidArticles"))))
	серв.Handle("/DevelArticles/", http.StripPrefix("/DevelArticles/", http.FileServer(http.Dir("./DevelArticles"))))
	серв.Handle("/DevelArticlesTwo/", http.StripPrefix("/DevelArticlesTwo/", http.FileServer(http.Dir("./DevelArticlesTwo"))))
	серв.Handle("/ComArticles/", http.StripPrefix("/ComArticles/", http.FileServer(http.Dir("./ComArticles"))))
	серв.Handle("/EducArticles/", http.StripPrefix("/EducArticles/", http.FileServer(http.Dir("./EducArticles"))))
	серв.Handle("/EducArticlesTwo/", http.StripPrefix("/EducArticlesTwo/", http.FileServer(http.Dir("./EducArticlesTwo"))))
	серв.Handle("/EducResources/", http.StripPrefix("/EducResources/", http.FileServer(http.Dir("./EducResources"))))
	серв.Handle("/EducAbout/", http.StripPrefix("/EducAbout/", http.FileServer(http.Dir("./EducAbout"))))

	
	серв.HandleFunc("/Header.js", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "application/javascript")
		http.ServeFile(отвечающий, запрос, "Header.js")
	})
	
	серв.HandleFunc("/ValidatorContent.js", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "application/javascript")
		http.ServeFile(отвечающий, запрос, "ValidatorContent.js")
	})
	
	серв.HandleFunc("/ValidatorArticles.js", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "application/javascript")
		http.ServeFile(отвечающий, запрос, "ValidatorArticles.js")
	})
	
	серв.HandleFunc("/CommunityContent.js", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "application/javascript")
		http.ServeFile(отвечающий, запрос, "CommunityContent.js")
	})
	
	серв.HandleFunc("/CommunityArticles.js", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "application/javascript")
		http.ServeFile(отвечающий, запрос, "CommunityArticles.js")
	})
	
	серв.HandleFunc("/EducationAbout.js", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "application/javascript")
		http.ServeFile(отвечающий, запрос, "EducationAbout.js")
	})
	
	серв.HandleFunc("/EducationAboutMobile.js", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "application/javascript")
		http.ServeFile(отвечающий, запрос, "EducationAboutMobile.js")
	})
	
	серв.HandleFunc("/EducationArticles.js", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "application/javascript")
		http.ServeFile(отвечающий, запрос, "EducationArticles.js")
	})
	
	серв.HandleFunc("/EducationArticlesResource.js", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "application/javascript")
		http.ServeFile(отвечающий, запрос, "EducationArticlesResource.js")
	})
	
	серв.HandleFunc("/EducationArticlesTwo.js", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "application/javascript")
		http.ServeFile(отвечающий, запрос, "EducationArticlesTwo.js")
	})
	
	серв.HandleFunc("/DeveloperContent.js", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "application/javascript")
		http.ServeFile(отвечающий, запрос, "DeveloperContent.js")
	})
	
	серв.HandleFunc("/DeveloperArticles.js", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "application/javascript")
		http.ServeFile(отвечающий, запрос, "DeveloperArticles.js")
	})
	
	серв.HandleFunc("/DeveloperArticlesTwo.js", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "application/javascript")
		http.ServeFile(отвечающий, запрос, "DeveloperArticlesTwo.js")
	})


	серв.HandleFunc("/validator-content", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "text/html; charset=utf-8")
		http.ServeFile(отвечающий, запрос, "validator-content.html")
	})
	
	серв.HandleFunc("/validator-articles", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "text/html; charset=utf-8")
		http.ServeFile(отвечающий, запрос, "validator-articles.html")
	})

	серв.HandleFunc("/community-content", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "text/html; charset=utf-8")
		http.ServeFile(отвечающий, запрос, "community-content.html")
	})
	
	серв.HandleFunc("/community-articles", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "text/html; charset=utf-8")
		http.ServeFile(отвечающий, запрос, "community-articles.html")
	})

	серв.HandleFunc("/education-about", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "text/html; charset=utf-8")
		http.ServeFile(отвечающий, запрос, "education-about.html")
	})
	
	серв.HandleFunc("/education-tutorial", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "text/html; charset=utf-8")
		http.ServeFile(отвечающий, запрос, "education-tutorial.html")
	})
	
	серв.HandleFunc("/education-resource", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "text/html; charset=utf-8")
		http.ServeFile(отвечающий, запрос, "education-resource.html")
	})
	
	серв.HandleFunc("/education-articles", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "text/html; charset=utf-8")
		http.ServeFile(отвечающий, запрос, "education-articles.html")
	})

	серв.HandleFunc("/developer-content", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "text/html; charset=utf-8")
		http.ServeFile(отвечающий, запрос, "developer-content.html")
	})
	
	серв.HandleFunc("/developer-recap", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "text/html; charset=utf-8")
		http.ServeFile(отвечающий, запрос, "developer-recap.html")
	})
	
	серв.HandleFunc("/developer-articles", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "text/html; charset=utf-8")
		http.ServeFile(отвечающий, запрос, "developer-articles.html")
	})


	серв.HandleFunc("/favicon.ico", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		отвечающий.Header().Set("Content-Type", "image/x-icon")
		отвечающий.WriteHeader(http.StatusNoContent)
	})

	
	серв.HandleFunc("/", func(отвечающий http.ResponseWriter, запрос *http.Request) {
		if запрос.URL.Path == "/" {
			отвечающий.Header().Set("Content-Type", "text/html; charset=utf-8")
			http.ServeFile(отвечающий, запрос, "Index.html")
			return
		}
		
		
		имяФайла := запрос.URL.Path[1:] + ".html"
		if _, ошибка := os.Stat(имяФайла); ошибка == nil {
			отвечающий.Header().Set("Content-Type", "text/html; charset=utf-8")
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
		
	
		http.NotFound(отвечающий, запрос)
	})

	http.ListenAndServe(":8080", серв)

}