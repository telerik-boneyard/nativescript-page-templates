const path = require("path");
const ejs = require("ejs");
const fs = require("fs-extra");
const _ = require("lodash");

export class EjsHelper {
    createPage(srcDir: string, destDir: string, pageName: string): Promise<string> {
        const camelCaseNameString = _.camelCase(pageName);
        const pageDirPath = path.join(destDir, pageName);

        const newPageName = {
            originalName: pageName,
            pascalCaseName: _.upperFirst(camelCaseNameString),
            camelCaseName: camelCaseNameString
        };

        return new Promise((resolve, reject) => {
            this.prepareRenderedFiles(srcDir, newPageName)
                .then((renderedPageFiles) => {
                    fs.ensureDir(pageDirPath, (error: any) => {
                        if (error) {
                            reject(error);

                            return;
                        }

                        renderedPageFiles.forEach((page: any) => {
                            const filePath = path.join(pageDirPath, page.filename);

                            try {
                                fs.writeFileSync(filePath, page.content, "utf8");
                            } catch (error) {
                                return Promise.reject(error);
                            }
                        });

                        return resolve();
                    });
                }).catch((error) => {
                    reject(error);
                });
        });
    }

    renderFile(filePath: string, pageName: any): Promise<any> {
        const directoryName = path.basename(path.dirname(filePath));
        const filename = path.basename(filePath);
        const newFileName = filename.replace(directoryName, pageName.originalName);

        const data = {
            OriginalName: pageName.originalName,
            PascalCaseName: pageName.pascalCaseName,
            CamelCaseName: pageName.camelCaseName
        };

        return new Promise((resolve, reject) => {
            ejs.renderFile(filePath, data, (error: any, renderedContent: any) => {
                if (error) {
                    return Promise.reject(new Error("Fail to render file with: " + error));
                }

                resolve({
                    filename: newFileName,
                    content: renderedContent
                });
            });
        });
    }

    prepareRenderedFiles(srcDir: string, pageName: any): Promise<Array<any>> {
        return new Promise((resolve, reject) => {
            fs.readdir(srcDir, (error: any, files: any) => {
                if (error) {
                    reject(error);

                    return;
                }

                const promises: Array<any> = [];

                files.forEach((file: any) => {
                    const filePath = path.join(srcDir, file);
                    const stat = fs.statSync(filePath);

                    if (stat.isFile()) {
                        promises.push(this.renderFile(filePath, pageName));
                    }
                });

                Promise.all(promises)
                    .then((newPageFiles) => {
                        resolve(newPageFiles);
                    })
                    .catch((errorPromises) => {
                        reject(errorPromises);
                    });
            });
        });
    }
}