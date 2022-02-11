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
  ⌞preview-templates
 ⌞components
  ⌞layout
  ⌞templates
 ⌞images
 ⌞page-templates
 ⌞pages
static
 ⌞admin
 ⌞assets
```

- src
  - cms: Netlify CMS files, register previews for use in the admin panel
    - preview-templates: Templates to render the previews within the admin panel
  - components: Reusuable components
    - layout: Main layout templates
    - templates: Content templates to render content, used in components found in cms/preview-templates and page-templates folders
  - page-templates: Templates used for making pages based on markdown files created by CMS
  - pages: Pages to be generated, the path of a file is the exact path of the page
- static
  - admin: yaml file used to configure collections in the Netlify CMS admin panel
  - assets: Static files created by the CMS

## Deployment

### Building for production

Build the site for production using the build script.

```shell
npm run build
```
