export interface Character {
  name: string;
  introduction: string;
}

export async function getCharacterData(): Promise<Character[]> {
  const response = await fetch('/api/characters');
  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }
  return response.json();
}