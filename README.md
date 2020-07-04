#  {APP NAME} Web App - README

## Purpose

This repository is base web app.

---
## Getting Started

- To run the project run `npm install` and then `npm start`


---
## Folder Structure

- `cypress`: cypress has example files for cypress functions and sample of of base web app screen.
- `public`: json files with textual content and configurable key-values in env json file, favicon and fonts.
- `eslint-settings`: eslint setup file and report file.
- `coverage`: output folder for code coverage reports.
- `build`: output folder for generated code. Content is excluded from repo.
- `node_modules`: standard referenced modules. Folder is excluded from repo.
- `src`: project related files including container, common component, redux files and folders.

---
## Building & Deploying

Ensure that the the following fields have application version number bumped appropriately:
- npm version (major| minor| patch)
- npm build - build command
- package.json: version
