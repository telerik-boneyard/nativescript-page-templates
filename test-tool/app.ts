const path = require("path");
const inquirer = require('inquirer');
const fs = require("fs-extra");
const _ = require("lodash");

import { EjsHelper } from "./ejs-helper";

const ejsHelper = new EjsHelper();

getAvailablePagesList((availablePagesList: Array<string>) => {
  console.dir(availablePagesList);

  const questions = [
    {
      type: 'list',
      name: 'selectedPage',
      message: 'Page type:',
      choices: availablePagesList,
      default: availablePagesList[0]
    },
    {
      name: 'pageName',
      type: 'input',
      message: 'Enter your new Page name:',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Enter your new Page name:';
        }
      }
    }
  ];

  inquirer.prompt(questions).then((result) => {
    const pageDirectory = path.join(__dirname, '../' + result.selectedPage);
    ejsHelper.createPage(pageDirectory, __dirname, result.pageName);
  });
});

function getAvailablePagesList(done) {
  const pagesDirectory = path.join(__dirname, '../');
  fs.readdir(pagesDirectory, (err, files: any) => {
    if (err) {
      console.log(err);
      return;
    }

    let pageList = [];
    const excludedFolders = ["test-tool", ".git"];

    files.forEach(filePath => {
      const file = path.join(pagesDirectory, filePath);

      try {
        const stat = fs.statSync(path.normalize(file));
        const isExcluded: boolean = _.indexOf(excludedFolders, filePath) > -1;

        if (stat.isDirectory() && !isExcluded) {
          pageList.push(filePath);
        }
      } catch (error) {
        console.log(error);
      }
    });

    done(pageList);
  })
}