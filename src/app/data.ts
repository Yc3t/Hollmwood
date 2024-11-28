import { Character, OutlinePoint, PlotPoint, Writer, Editor, Actor, Performance } from './types';

// Mock character generation with more variety and depth
export const mockCharacters: Character[] = [
    {
        name: "Dr. Iris Hawke",
        role: "Lead Scientist",
        description: "A brilliant and audacious scientist who has made Mars her home. Originally a top-notch botanist on Earth, Iris shows her grit and genius in developing groundbreaking technology for growing crops on Martian soil.",
        traits: ["Brilliant", "Determined", "Innovative", "Workaholic"]
    },
    {
        name: "Captain Amala Summers",
        role: "Colony Leader",
        description: "A seasoned military officer turned colony administrator. Her leadership style balances pragmatism with compassion, earning her the respect and trust of the colonists.",
        traits: ["Leader", "Strategic", "Compassionate", "Disciplined"]
    },
    {
        name: "Dr. Arthur Benday",
        role: "Medical Officer",
        description: "The colony's chief medical officer with a background in xenobiology. His cautious nature often puts him at odds with Iris's bold experiments.",
        traits: ["Cautious", "Analytical", "Ethical", "Detail-oriented"]
    }
];

// Mock outline generation with structured plot progression
export const mockOutline: OutlinePoint[] = [
    {
        title: "The Initial Discovery",
        description: "Dr. Hawke develops a revolutionary method to grow food in Martian soil, bringing hope to the struggling colony.",
        characters: ["Dr. Iris Hawke", "Captain Amala Summers"],
        act: "ACT I"
    },
    {
        title: "First Signs of Trouble",
        description: "During a celebratory feast featuring the first Mars-grown meal, colonists begin showing mysterious symptoms.",
        characters: ["Dr. Iris Hawke", "Dr. Arthur Benday", "Captain Amala Summers"],
        act: "ACT I"
    },
    {
        title: "Crisis Point",
        description: "The colony faces a critical decision as more colonists fall ill, forcing Dr. Hawke to confront the consequences of her innovation.",
        characters: ["Dr. Iris Hawke", "Dr. Arthur Benday"],
        act: "ACT II"
    }
];

// Mock screenplay generation with detailed scenes and performances
export const mockScreenplay: PlotPoint[] = [
    {
        title: "The Initial Discovery",
        description: "Dr. Hawke's breakthrough moment in the Martian greenhouse",
        scene: "INT. MARTIAN GREENHOUSE - DAY",
        characters: ["Dr. Iris Hawke", "Captain Amala Summers"],
        act: "ACT I",
        sceneHeading: "MARTIAN GREENHOUSE - DAY",
        performances: [
            {
                character: "DR. IRIS HAWKE",
                action: "Stands amid rows of thriving plants, holding up a vibrant red tomato. Her eyes shine with triumph."
            },
            {
                character: "CAPTAIN SUMMERS",
                action: "Enters the greenhouse, her usual military posture softening at the sight of the flourishing crops."
            }
        ]
    },
    {
        title: "First Signs of Trouble",
        description: "The celebration turns to concern",
        scene: "INT. COLONY MESS HALL - EVENING",
        characters: ["Dr. Iris Hawke", "Dr. Arthur Benday", "Captain Amala Summers"],
        act: "ACT I",
        sceneHeading: "COLONY MESS HALL - EVENING",
        performances: [
            {
                character: "DR. ARTHUR BENDAY",
                action: "Rushes to attend to a colonist who has collapsed during the feast."
            },
            {
                character: "DR. IRIS HAWKE",
                action: "Stands defiantly, gesturing at the lab results",
                dialogue: "That's three years of work! We'll starve without these crops!",
                parenthetical: "desperate"
            }
        ]
    },
    {
        title: "Scientific Investigation",
        description: "Dr. Hawke and Dr. Benday analyze the contaminated crops",
        scene: "INT. COLONY LABORATORY - NIGHT",
        characters: ["Dr. Iris Hawke", "Dr. Arthur Benday"],
        act: "ACT II",
        sceneHeading: "COLONY LABORATORY - NIGHT",
        performances: [
            {
                character: "DR. IRIS HAWKE",
                action: "Peers intensely through a microscope, her hands shaking slightly as she adjusts the focus.",
                dialogue: "This shouldn't be possible. The molecular structure has completely altered.",
                parenthetical: "disturbed"
            },
            {
                character: "DR. ARTHUR BENDAY",
                action: "Reviews medical charts on a holographic display, his expression grim.",
                dialogue: "Whatever this is, it's not just contamination. It's transformation."
            }
        ]
    },
    {
        title: "The Hard Choice",
        description: "Captain Summers faces a critical decision about the colony's future",
        scene: "INT. COLONY COMMAND CENTER - DAY",
        characters: ["Captain Amala Summers", "Dr. Iris Hawke", "Dr. Arthur Benday"],
        act: "ACT III",
        sceneHeading: "COLONY COMMAND CENTER - DAY",
        performances: [
            {
                character: "CAPTAIN SUMMERS",
                action: "Stands at the command console, weighing the options before her.",
                dialogue: "We'll have to destroy the entire crop. And the soil. All of it.",
                parenthetical: "with authority"
            },
            {
                character: "DR. IRIS HAWKE",
                action: "Stands at the command console, weighing the options before her.",

                dialogue: "That's three years of work! We'll starve without these crops!",
                parenthetical: "desperate"
            }
        ]
    },
    {
        title: "New Beginning",
        description: "The colony finds hope in adversity",
        scene: "EXT. MARTIAN SURFACE - DAWN",
        characters: ["Dr. Iris Hawke", "Captain Amala Summers"],
        act: "ACT III",
        sceneHeading: "MARTIAN SURFACE - DAWN",
        performances: [
            {
                character: "DR. IRIS HAWKE",
                action: "Plants a new experimental seedling in fresh, carefully treated soil.",
                dialogue: "This time, we'll get it right.",
                parenthetical: "determined"
            },
            {
                character: "CAPTAIN SUMMERS",
                action: "Places a supportive hand on Iris's shoulder as the twin moons rise over the Martian horizon."
            }
        ]
    }
];

// Mock editor feedback with structured reviews
export const mockEditorFeedback = {
    characters: `
Character Review:
1. Dr. Iris Hawke's character could be more engaging with personal stakes beyond professional achievement
2. Consider developing the relationship dynamics between Dr. Hawke and Dr. Benday
3. Captain Summers' background could be expanded to show how her military experience influences her leadership
`,
    outline: `
Outline Review:
1. Strong initial setup and escalation of tension
2. Consider adding more personal conflicts between characters
3. The transition between Acts could be strengthened with more character development
4. Suggest exploring the psychological impact on Dr. Hawke as her creation causes unexpected consequences
`,
    script: `
Script Review:
1. Dialogue could be more dynamic between Dr. Hawke and Captain Summers
2. Consider adding more visual descriptions of the Martian environment
3. The pacing of the crisis revelation could be more gradual
4. Suggest adding more non-verbal reactions to build tension
`
};

// Functional mock Writer implementation
export const mockWriter: Writer = {
    generateCharacters: () => {
        return mockCharacters;
    },
    generateOutline: () => {
        return mockOutline;
    },
    expandStory: (subplot: OutlinePoint) => {
        const expandedStory = `In ${subplot.act}, ${subplot.description} 
    The scene unfolds as ${subplot.characters.join(' and ')} face the challenges ahead.
    The tension builds as they must deal with the consequences of their actions.`;
        return expandedStory;
    },
    draftScreenplay: (chapter: string) => {
        const relevantScene = mockScreenplay.find(scene =>
            scene.description.toLowerCase().includes(chapter.toLowerCase().substring(0, 10))
        ) || mockScreenplay[0];
        return relevantScene;
    }
};

// Functional mock Editor implementation
export const mockEditor: Editor = {
    reviewCharacters: (characters: Character[]) => {
        const reviews = characters.map(char =>
            `${char.name}: ${char.role}\n- Consider deepening ${char.name}'s personal motivations\n- Explore relationships with other characters`
        );
        return reviews.join('\n\n') + '\n\n' + mockEditorFeedback.characters;
    },
    reviewOutline: (outline: OutlinePoint[]) => {
        const reviews = outline.map(point =>
            `${point.act} - ${point.title}:\n- Strong setup with ${point.characters.join(', ')}\n- Consider adding more conflict`
        );
        return reviews.join('\n\n') + '\n\n' + mockEditorFeedback.outline;
    },
    suggestRevisions: (content: string) => {
        return `Review for current scene:\n${mockEditorFeedback.script}\n\nSpecific suggestions:\n- Add more environmental details\n- Deepen character interactions\n- Build tension gradually`;
    }
};

// Functional mock Actor implementation with memory
export const mockActor = (character: Character): Actor => {
    const characterHistory: string[] = [];

    const generatePerformance = (scene: string): Performance => {
        const isMainCharacter = scene.toLowerCase().includes(character.name.toLowerCase());
        const performance: Performance = {
            character: character.name,
            action: isMainCharacter
                ? `${character.name} takes center stage, embodying their ${character.traits[0]} nature`
                : `Reacts to the unfolding events, their ${character.traits[0]} nature evident`,
            parenthetical: isMainCharacter ? "(with intensity)" : "(observing)",
            dialogue: isMainCharacter
                ? "This is more than just an experiment. This is our future."
                : "We need to consider all possibilities here."
        };

        characterHistory.push(`Performed in scene: ${scene.substring(0, 30)}...`);
        return performance;
    };

    return {
        character: character.name,
        profile: character.description,
        history: characterHistory,
        performScene: generatePerformance
    };
};

// Helper function to group screenplay by acts
export const groupScreenplayByAct = (screenplay: PlotPoint[]) => {
    return screenplay.reduce((acc, scene) => {
        if (!acc[scene.act]) {
            acc[scene.act] = [];
        }
        acc[scene.act].push(scene);
        return acc;
    }, {} as Record<string, PlotPoint[]>);
};
