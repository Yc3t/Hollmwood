import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'outputs', '2024-11-10T20-21-43-871Z_characters.txt');
    const xmlContent = await fs.readFile(filePath, 'utf8');
    
    // Basic XML parsing using regex (for simple cases)
    const characters = xmlContent.match(/<character_\d+>[\s\S]*?<\/character_\d+>/g) || [];
    
    const parsedCharacters = characters.map(char => {
      const name = char.match(/<full_name>(.*?)<\/full_name>/)?.[1] || '';
      const intro = char.match(/<character_introduction>(.*?)<\/character_introduction>/)?.[1] || '';
      
      return {
        name,
        introduction: intro
      };
    });

    return NextResponse.json(parsedCharacters);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load characters' }, { status: 500 });
  }
}