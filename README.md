# ReCODE Chat Documentation

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

Documentation site for ReCODE Medical's cardiology coding assistant.

## Getting Started

```bash
npm install
npm start
```

## Development

- Edit pages in `/docs`
- Update sidebar in `sidebars.js`
- Customize styling in `src/css/custom.css`

## Docker

A `Dockerfile` is included for building and running the documentation site in a containerized environment. This is the recommended method for deployment platforms like Coolify.

### Building the Docker Image

```bash
docker build -t recode-chat-docs .
```

### Running the Docker Container Locally

```bash
docker run -p 8080:80 recode-chat-docs
```

This will make the site available at http://localhost:8080. The container exposes port 80 (Nginx default), which is mapped to port 8080 on the host.

## Deployment

Built with Docusaurus. Can be deployed directly by building static files or using the provided Dockerfile.

### Deploy with Docker (Recommended for Coolify)
1. Connect your Git repository to Coolify.
2. Choose the "Build with Dockerfile" option.
3. Coolify will use the `Dockerfile` in the root of the repository.
4. Configure the domain (e.g., `docs.recodemedical.com`). Coolify typically detects the exposed port (80) automatically.
5. Deploy.

### Deploy Static Build Directly
1. Build: `npm run build`
2. Output directory: `build/`
3. Configure your hosting provider (like Cloudflare Pages, Netlify, Vercel, or Coolify's Static Site option) to serve the `build/` directory.
4. Domain: `docs.recodemedical.com`

## Documentation Structure

- **Introduction** - Overview of ReCODE Chat
- **CPT Basics** - Medical billing fundamentals
- **Getting Started** - Quick start guide
- **Common Scenarios** - Cardiology examples
- **Advanced Features** - Command system details
- **Support** - Contact info

## Links

- [Live Documentation](https://docs.recodemedical.com)
- [ReCODE Medical](https://recodemedical.com)
- [Support Email](mailto:support@recodemedical.com)