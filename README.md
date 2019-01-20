<p align="center">
  <a href="https://github.com/Jared-Dev/gatsby-starter-improved">
    <img
      src="https://raw.githubusercontent.com/Jared-Dev/gatsby-starter-improved/master/static/logo/banner.png"
      height="80"
      alt="gatsby-starter-improved"
      title="Gatsby Starter Improved"
    />
  </a>
</p>

<p align="center">
  <a href="https://circleci.com/gh/Jared-Dev/gatsby-starter-improved">
    <img
      src="https://circleci.com/gh/Jared-Dev/gatsby-starter-improved.svg?style=svg"
      alt="CircleCI"
    />
  </a>
  <a href="https://david-dm.org/Jared-Dev/gatsby-starter-improved">
    <img
      src="https://img.shields.io/david/Jared-Dev/gatsby-starter-improved.svg"
      alt="Dependencies"
    />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img
      src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"
      alt="styled with prettier"
    />
  </a>
  <a href="https://www.netlify.com">
    <img
      src="https://img.shields.io/badge/deploys%20by-netlify-00c7b7.svg"
      alt="deploys by netlify"
    />
  </a>
</p>

<p align="center">
  <strong>
    View the demo at <a href="https://gatsby-starter-improved.netlify.com">gatsby-starter-improved.netlify.com</a>.
  </strong>
</p>

## Features

- Gatsby v2
- Emotion for styling
- Code syntax highlighting
- Tags
- SEO
  - Sitemap generation
  - Schema.org JSON-LD for Google Rich Snippets
  - Twitter Tags
  - OpenGraph Tags for Facebook/Google+/Pinterest
  - robots.txt
- Typography.js
- Typefaces for faster font loading
- Offline Support
- Manifest Support
- Gatsby Image
  - Responsive images
  - Traced SVG Loading with Lazy-Loading
  - WebP Support
- Development tools
  - ESLint for linting
  - Prettier for code style
  - CircleCI support
  - Google Lighthouse Optimization

# Lighthouse Audit

<p align="center">
  <a href="https://github.com/Jared-Dev/gatsby-starter-improved">
    <img
      src="https://i.imgur.com/YOVC76X.png"
      alt="Google Lighthouse Audit"
      title="Google Lighthouse Audit"
    />
  </a>
</p>
<p align="center">
  Metrics may vary slightly, but should be near 100 for all metrics!
</p>

# Usage

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Jared-Dev/gatsby-starter-improved)

```bash
Download project
# With `gatsby-cli`
gatsby new my-site https://github.com/Jared-Dev/gatsby-starter-improved

OR

# Cloning
git clone my-site https://github.com/Jared-Dev/gatsby-starter-improved.git
cd my-site

THEN

# Install dependencies
npm i

# Start dev server
gatsby develop

# Build for production
gatsby build

# Format with Prettier
npm format

```

## Folder structure
```bash
├──.circleci # Circleci integration
├── config # Theme and site metadata
├── content # Post markdown and images
├── src
│   ├── components
│   ├── layouts
│   ├── pages
│   ├── style
│   └── templates # For Post and Tag page generation
├── static # Images for logo and favicon, and robots.txt
├── gatsby-config.js # Plugin loading and configuration
└── gatsby-node.js # Generate posts/tags and modify webpack
```