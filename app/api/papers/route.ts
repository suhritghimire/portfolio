import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const { title, date, link } = await request.json();

        // Security check: Only allow this in development environment effectively
        // (Though technically nextjs runs server code, writing to source is a dev-time activity)

        const filePath = path.join(process.cwd(), 'lib/data.ts');
        let content = fs.readFileSync(filePath, 'utf8');

        const newEntry = `  {
    id: '${Date.now()}',
    title: "${title.replace(/"/g, '\\"')}",
    date: '${date}',
    link: '${link}'
  },`;

        // Regex to find the start of the research array
        const researchStartRegex = /export const research = \[\s*/;
        const match = content.match(researchStartRegex);

        if (!match) {
            return NextResponse.json({ error: 'Could not find research array in lib/data.ts' }, { status: 500 });
        }

        const insertPosition = match.index! + match[0].length;
        const newContent = content.slice(0, insertPosition) + '\n' + newEntry + content.slice(insertPosition);

        fs.writeFileSync(filePath, newContent, 'utf8');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ error: 'Failed to update file' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();

        const filePath = path.join(process.cwd(), 'lib/data.ts');
        let content = fs.readFileSync(filePath, 'utf8');

        // Regex to find the object with the specific ID
        // Matches { ... id: '123' ... }, allowing for multiline
        const regex = new RegExp(`\\s*{\\s*id:\\s*'${id}'[\\s\\S]*?},?`, 'g');

        if (!regex.test(content)) {
            return NextResponse.json({ error: 'Paper not found' }, { status: 404 });
        }

        const newContent = content.replace(regex, '');
        fs.writeFileSync(filePath, newContent, 'utf8');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('API DELETE Error:', error);
        return NextResponse.json({ error: 'Failed to delete paper' }, { status: 500 });
    }
}
