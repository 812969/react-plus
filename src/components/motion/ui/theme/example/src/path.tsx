
import fs from 'fs';

export async function ReadFileLine (filePath : string) {
    return fs.readFileSync(filePath, 'utf-8')
}
