/**
 * Taken by bromveldt from https://github.com/nodemailer/nodemailer/issues/1599
 * on 6-8-2026
 */
const fs = require('fs');
const path = require('path');
// Currently made ineffective as the punycode depreation has been fixed
// by bumping up @actions/artifact
const pathArray = [
    //"./node_modules/whatwg-url/lib/url-state-machine.js",
    //"./node_modules/tr46/index.js",
];
console.log(`Searching for punycode`);
for (const [_i, entry] of pathArray.entries()) {
    try {
        // Read the content of the file
        const pathEntry = path.resolve(entry);
        const content = fs.readFileSync(pathEntry, "utf8");
        normalize_punycode(content, pathEntry);
        console.log(`punycode successfully patched ${value}`);
    } catch (error) {
        console.error(`punycode error patching ${value}`, error);
    }
}

/**
 * Replaces all occurrences of a specific line in the content and writes the updated content to a file.
 * @param {string} content - The original content.
 * @param {string} pathEntry - The path of the file to write the updated content to.
 */
function normalize_punycode(content, pathEntry) {
    content = content.replace(/("punycode")/g, '("punycode/")');
    writeTheFile(content, pathEntry);
}

/**
 * Writes the modified content back to the file.
 *
 * @param {string} content - The modified content to write.
 * @param {string} pathEntry - The path of the file to write to.
 */
function writeTheFile(content, pathEntry) {
    fs.writeFileSync(pathEntry, content, "utf8");
}
