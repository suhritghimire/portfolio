const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const DATA_FILE = path.join(__dirname, '../lib/data.ts');

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function main() {
    console.log('\n📄  Add New Research Paper\n');

    const title = await question('Enter Paper Title: ');
    if (!title.trim()) {
        console.error('❌ Title is required.');
        rl.close();
        return;
    }

    let date = await question('Enter Date (YYYY-MM-DD) [Today]: ');
    if (!date.trim()) {
        date = new Date().toISOString().split('T')[0];
    }

    const link = await question('Enter Paper/Drive Link: ');
    if (!link.trim()) {
        console.error('❌ Link is required.');
        rl.close();
        return;
    }

    try {
        let content = fs.readFileSync(DATA_FILE, 'utf8');

        // Find the research array
        const researchStartRegex = /export const research = \[\s*/;
        const match = content.match(researchStartRegex);

        if (!match) {
            console.error('❌ Could not find "export const research = [" in lib/data.ts');
            rl.close();
            return;
        }

        const newEntry = `  {
    id: '${Date.now()}',
    title: "${title.replace(/"/g, '\\"')}",
    date: '${date}',
    link: '${link}'
  },`;

        // Insert the new entry right after the opening bracket
        const insertPosition = match.index + match[0].length;
        const newContent = content.slice(0, insertPosition) + '\n' + newEntry + content.slice(insertPosition);

        fs.writeFileSync(DATA_FILE, newContent, 'utf8');

        console.log(`\n✅  Successfully added "${title}" to library!`);
        console.log(`    Date: ${date}`);
        console.log(`    Link: ${link}`);

    } catch (err) {
        console.error('❌ Error updating file:', err);
    }

    rl.close();
}

main();
