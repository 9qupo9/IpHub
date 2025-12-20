# IPHub - Technical Specifications

## Project Overview

The main goal of IPHub is to provide Story users with everything they need in one place, conveniently divided into several sections, with constantly updated information. We believe that such a resource will simplify interaction for a large number of users, regardless of whether you have just joined or have been interacting with Story and the ecosystem for a long time. 

The platform includes four main sections:

- **Validator Hub** - A collection of services, guides, snapshots, useful tools, and articles for validators. Helpful for both newcomers exploring validation and active participants.
- **Developer Hub** - SDKs, GitHub, dev tools, Dev Office Hours recaps, and ecosystem projects from other developers. We'll also take Jacob's feedback into account to make this section as valuable as possible throughout the buildathon.
- **Community Hub** - Events, useful resources, activities, articles, AMA recaps, and more.
- **Educational Hub** - Learning materials, guides, podcasts, and videos - everything needed to understand and explore Story easily.

## Technical Architecture

IPHub is built as a centralized web platform using a static file server architecture powered by Go. The project implements a modular approach to content organization through JavaScript components, enabling dynamic content loading without page reloads.

The technical architecture follows separation of concerns principles: the server-side handles routing and static file serving, while the client-side manages interactivity and dynamic content. Tailwind CSS integration ensures consistent design and responsive interface across all devices.

The project structure is organized by functional sections, each having dedicated JavaScript modules for content management. This approach enables easy platform scaling and addition of new sections without modifying the core architecture.

## Backend Technical Stack

- **Language**: Go 1.25
- **HTTP Server**: Built-in net/http package
- **Port**: 8080 (default)
- **Architecture**: Static file server with custom routing
- **File Serving**: Multiple static directories with prefix stripping
- **MIME Type Handling**: Automatic content-type detection for JavaScript modules
- **Error Handling**: 404 fallback with proper HTTP status codes

## Frontend Technical Stack

- **Core Technologies**: HTML5, CSS3, JavaScript ES6+
- **CSS Framework**: Tailwind CSS (CDN-based)
- **Fonts**: Google Fonts (Source Code Pro, Kantumruy)
- **Responsive Design**: Mobile-first approach with breakpoint system
- **Browser Compatibility**: Modern browsers with ES6+ support
- **Mobile Detection**: JavaScript-based device detection with fallback UI

## Project Structure

### Core Files
- `main.go` - Main server application with routing logic
- `go.mod` - Go module definition
- `Index.html` - Landing page with section overview
- `Header.js` - Shared navigation component

### Page Components
- `validators.html` - Validator resources interface
- `developers.html` - Developer tools and documentation
- `community.html` - Community resources and social links
- `educational.html` - Learning materials and tutorials

### JavaScript Modules
- **Validator**: `ValidatorContent.js`, `ValidatorArticles.js`
- **Developer**: `DeveloperContent.js`, `DeveloperArticles.js`, `DeveloperArticlesTwo.js`
- **Community**: `CommunityContent.js`, `CommunityArticles.js`
- **Education**: `EducationAbout.js`, `EducationArticles.js`, `EducationArticlesTwo.js`, `EducationArticlesResource.js`

### Static Asset Directories
- `media/` - Core images and branding assets
- `icon/` - UI icons and interface elements
- `face/` - User avatars and profile images
- `ValidArticles/`, `DevelArticles/`, `DevelArticlesTwo/` - Article images
- `ComArticles/`, `EducArticles/`, `EducArticlesTwo/`, `EducResources/`, `EducAbout/` - Section-specific assets

## Server Implementation

### Routing System
- Root handler serves `Index.html` for base path
- Dynamic HTML serving based on URL path + `.html` extension
- JavaScript module serving with proper `application/javascript` MIME type
- Static directory mounting with URL prefix stripping
- Favicon handling with `image/x-icon` content type

### File Server Configuration
```go
серв.Handle("/media/", http.StripPrefix("/media/", http.FileServer(http.Dir("./media"))))
серв.Handle("/ValidArticles/", http.StripPrefix("/ValidArticles/", http.FileServer(http.Dir("./ValidArticles"))))
// Additional static directories...
```

## Client-Side Architecture

### Component System
- Modular JavaScript classes for each content section
- Dynamic content loading without page refresh
- Event-driven navigation between sections
- Shared header component with modal functionality

### UI Features
- Animated starfield background with CSS keyframes
- Responsive grid layouts using Tailwind CSS
- Modal dialogs with backdrop blur effects
- Mobile hamburger menu with toggle functionality
- Hover effects and smooth transitions

### Performance Optimizations
- CDN-based external dependencies
- Minimal JavaScript bundle size
- Lazy loading of content modules
- Optimized image formats and sizes

## Development & Deployment

### Local Development
```bash
go run main.go
```

### Access Points
- Local: `http://localhost:8080`
- Routes: `/`, `/validators`, `/developers`, `/community`, `/educational`

### Build Requirements
- Go 1.25 or higher
- No external dependencies beyond standard library
- Static file structure maintained in project root