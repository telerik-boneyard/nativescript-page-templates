# Testing tool for pages
### Use this 'tool' to out put application ready page directory. 

## How to use
Clone this repository and checkout `test` branch:

```
git clone https://github.com/NativeScript/nativescript-page-templates.git
git checkout test
cd test-tool
npm install
```

To run the tool:

```
npm run start
```

> Note: This command will compile and run the tool. No extra commands required.

The tool will list the available page types from the parent directory:

```
blank
login
signup
```

Choose page type and enter desired page name. 
After that the tool will create new folder under `test-tool/` with
the new page files. Copy this folder in to your app root folder `app/`

**NB:** Please, have in mind the page and app flavor!
