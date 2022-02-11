# DSC @ TAMU Website

Generates static pages for the club's website using Gatsby and Netlify CMS.

## Development

### Installating dependencies

Install dependencies using install script.

```
npm install
```

If it fails, use the following:

```shell
npm install --legacy-peer-deps
```

### Starting dev server

Start the development server with the develop script. Site will be on http://localhost:8000 and has hot reloading enabled.

```shell
npm run develop
```

### Folder structure

```
src
  ⌞cms
  ⌞components
  ⌞images
  ⌞pages
  ⌞templates
static
  ⌞admin
```

- src
  - cms: Netlify CMS files, register previews for use in the admin panel
  - components: Reusuable components
  - pages: Pages to be generated, the path of a file is the exact path of the page
  - templates: Templates used for making pages based on markdown files created by CMS and used as previews
- static
  - admin: yaml file used to configure collections in the Netlify CMS admin panel

## Deployment

### Building for production

Build the site for production using the build script.

```shell
npm run build
```
