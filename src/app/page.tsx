"use client"
import { useState } from 'react';
import { 
  mockCharacters, 
  mockOutline, 
  mockScreenplay, 
  mockWriter, 
  mockEditor, 
  mockActor,
  groupScreenplayByAct 
} from './data';
import { Character, OutlinePoint, PlotPoint, Performance, EditorFeedback } from './types';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Plus, 
  Settings, 
  MoreVertical,
  Clock,
  Image as ImageIcon,
  Film,
  Edit3,
  Users,
  FileText,
  BookOpen,
  Sparkles,
  Volume2
} from 'lucide-react';

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>(mockCharacters);
  const [outline, setOutline] = useState<OutlinePoint[]>(mockOutline);
  const [screenplay, setScreenplay] = useState<PlotPoint[]>(mockScreenplay);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationProgress, setGenerationProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [editorFeedback, setEditorFeedback] = useState<EditorFeedback>({
    characters: '',
    outline: '',
    script: ''
  });

  const triggerCharacterGeneration = async () => {
    setIsGenerating(true);
    setError(null);
    setGenerationProgress(0);
    
    try {
      // Generate characters
      setGenerationProgress(20);
      const writer = mockWriter;
      const newCharacters = await writer.generateCharacters();
      setGenerationProgress(50);
      
      // Get editor feedback
      const editor = mockEditor;
      const feedback = await editor.reviewCharacters(newCharacters);
      setGenerationProgress(80);
      
      // Update state
      setCharacters(newCharacters);
      setEditorFeedback(prev => ({
        ...prev,
        characters: feedback
      }));
      setGenerationProgress(100);
    } catch (error) {
      console.error('Error generating characters:', error);
      setError('Failed to generate characters. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const triggerOutlineGeneration = async () => {
    setIsGenerating(true);
    setError(null);
    setGenerationProgress(0);
    
    try {
      setGenerationProgress(20);
      const writer = mockWriter;
      const newOutline = await writer.generateOutline(characters);
      setGenerationProgress(50);
      
      const editor = mockEditor;
      const feedback = await editor.reviewOutline(newOutline);
      setGenerationProgress(80);
      
      setOutline(newOutline);
      setEditorFeedback(prev => ({
        ...prev,
        outline: feedback
      }));
      setGenerationProgress(100);
    } catch (error) {
      console.error('Error generating outline:', error);
      setError('Failed to generate outline. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const triggerScreenplayGeneration = async () => {
    setIsGenerating(true);
    setError(null);
    setGenerationProgress(0);
    
    try {
      setGenerationProgress(20);
      const writer = mockWriter;
      const newScreenplay = await writer.generateScreenplay(outline);
      setGenerationProgress(50);
      
      const editor = mockEditor;
      const feedback = await editor.reviewScreenplay(newScreenplay);
      setGenerationProgress(80);
      
      setScreenplay(newScreenplay);
      setEditorFeedback(prev => ({
        ...prev,
        script: feedback
      }));
      setGenerationProgress(100);
    } catch (error) {
      console.error('Error generating screenplay:', error);
      setError('Failed to generate screenplay. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const triggerImageGeneration = async (point: OutlinePoint) => {
    setIsGenerating(true);
    setError(null);
    
    try {
      // Mock image generation
      const imageUrl = await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve('https://example.com/generated-image.jpg');
        }, 2000);
      });
      
      setSelectedImage(imageUrl);
    } catch (error) {
      console.error('Error generating image:', error);
      setError('Failed to generate image. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const renderCharacterCard = (char: Character, index: number) => (
    <Card key={index} className="bg-black/50 border-zinc-800">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <CardTitle className="text-zinc-100">{char.name}</CardTitle>
          <CardDescription className="text-zinc-400">{char.role}</CardDescription>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-zinc-800">
            <Sparkles className="h-4 w-4 mr-2" />
            Rewrite
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black border-zinc-800">
              <DropdownMenuItem>
                <Edit3 className="mr-2 h-4 w-4" /> Edit Character
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" /> Manage Relationships
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-300 mb-4">{char.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {char.traits.map((trait, idx) => (
            <span 
              key={idx} 
              className="px-2 py-1 bg-zinc-900 rounded-md text-xs text-zinc-300 border border-zinc-800"
            >
              {trait}
            </span>
          ))}
        </div>
        {char.relationships && (
          <>
            <Separator className="my-4" />
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-zinc-400">Relationships</h4>
              {Object.entries(char.relationships).map(([name, relationship], idx) => (
                <div key={idx} className="text-sm">
                  <span className="text-zinc-300">{name}:</span>{" "}
                  <span className="text-zinc-500">{relationship}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );

  const renderCharacterTab = () => (
    <div className="space-y-6">
      {characters.map((char, index) => renderCharacterCard(char, index))}
      
      <Button 
        onClick={triggerCharacterGeneration}
        disabled={isGenerating}
        className="w-full"
        variant="secondary"
      >
        {isGenerating ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Generating Characters ({generationProgress}%)</span>
          </>
        ) : (
          <>
            <Plus className="mr-2 h-4 w-4" />
            Generate Characters
          </>
        )}
      </Button>
      
      {error && (
        <div className="text-red-500 text-sm mt-2">
          {error}
        </div>
      )}
      
      {editorFeedback.characters && (
        <Card className="mt-6 bg-black/50 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-sm text-zinc-400">Editor Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm text-zinc-300 whitespace-pre-wrap">
              {editorFeedback.characters}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderOutlinePoint = (point: OutlinePoint, index: number) => (
    <Card key={index} className="bg-black/50 border-zinc-800">
      <CardHeader className="flex flex-row items-start justify-between space-y-0">
        <div>
          <span className="text-sm text-zinc-500">{point.act}</span>
          <CardTitle className="text-zinc-100">{point.title}</CardTitle>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-zinc-800">
            <Sparkles className="h-4 w-4 mr-2" />
            Rewrite
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="border-zinc-800">
                <ImageIcon className="h-4 w-4 mr-2" />
                Generate
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black/90 border-zinc-800">
              <DialogHeader>
                <DialogTitle>Generate Scene Image</DialogTitle>
              </DialogHeader>
              <div className="aspect-video bg-zinc-900/50 rounded-lg flex items-center justify-center">
                {selectedImage ? (
                  <img 
                    src={selectedImage} 
                    alt="Generated Scene" 
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <div className="text-center text-zinc-500">
                    <ImageIcon className="h-10 w-10 mx-auto mb-2" />
                    <p>No image generated yet</p>
                  </div>
                )}
              </div>
              <Button 
                onClick={() => triggerImageGeneration(point)}
                disabled={isGenerating}
                className="w-full"
              >
                Generate Image
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-300 text-sm mb-4">{point.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {point.characters.map((char, idx) => (
            <span 
              key={idx} 
              className="px-2 py-1 bg-zinc-900 rounded-md text-xs text-zinc-300 border border-zinc-800"
            >
              {char}
            </span>
          ))}
        </div>
        {point.themes && (
          <>
            <Separator className="my-4" />
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-zinc-400">Themes</h4>
              <div className="flex flex-wrap gap-2">
                {point.themes.map((theme, idx) => (
                  <span 
                    key={idx} 
                    className="px-2 py-1 bg-zinc-900/50 rounded-md text-xs text-zinc-400"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );

  const renderOutlineTab = () => (
    <div className="space-y-6">
      {outline.map((point, index) => renderOutlinePoint(point, index))}
      
      <Button 
        onClick={triggerOutlineGeneration}
        disabled={isGenerating || characters.length === 0}
        className="w-full"
        variant="secondary"
      >
        {isGenerating ? (
          <>
            <svg className="animate-spin h-5 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating Outline ({generationProgress}%)
          </>
        ) : (
          <>
            <FileText className="mr-2 h-4 w-4" />
            Generate Outline
          </>
        )}
      </Button>

      {error && (
        <div className="text-red-500 text-sm mt-2">
          {error}
        </div>
      )}

      {editorFeedback.outline && (
        <Card className="mt-6 bg-black/50 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-sm text-zinc-400">Editor Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm text-zinc-300 whitespace-pre-wrap">
              {editorFeedback.outline}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderScriptTab = () => {
    const groupedScenes = groupScreenplayByAct(screenplay);
    
    return (
      <div className="space-y-8">
        {Object.entries(groupedScenes).map(([act, scenes]) => (
          <div key={act} className="space-y-6">
            <h2 className="text-2xl font-bold text-white">{act}</h2>
            {scenes.map((scene, sceneIndex) => (
              <Card key={sceneIndex} className="bg-black/50 border-zinc-800">
                <CardHeader>
                  <div className="flex justify-end mb-4">
                    <Button variant="outline" size="sm" className="border-zinc-800">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Rewrite Scene
                    </Button>
                  </div>
                  <div className="font-mono space-y-4">
                    {/* Scene Heading */}
                    <div className="uppercase text-zinc-300">
                      {scene.sceneHeading}
                    </div>
                    
                    {/* Scene Description */}
                    <div className="text-zinc-100 max-w-[60ch]">
                      {scene.description}
                    </div>

                    {/* Performances */}
                    <div className="space-y-6">
                      {scene.performances?.map((performance, perfIndex) => (
                        <div key={perfIndex} className="space-y-2">
                          {/* Character Name */}
                          <div className="text-center uppercase text-zinc-300 mt-4">
                            {performance.character}
                          </div>
                          
                          {/* Parenthetical */}
                          {performance.parenthetical && (
                            <div className="text-center text-zinc-400 italic">
                              ({performance.parenthetical})
                            </div>
                          )}
                          
                          {/* Dialogue with Audio Generation */}
                          <div className="text-center max-w-[35ch] mx-auto group relative">
                            <div className="text-zinc-100">
                              {performance.dialogue}
                            </div>
                            {performance.dialogue && (
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="absolute -right-16 top-0 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Volume2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                          
                          {/* Action */}
                          {performance.action && (
                            <div className="text-zinc-100 max-w-[60ch]">
                              {performance.action}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        ))}

        <Button 
          onClick={triggerScreenplayGeneration}
          disabled={isGenerating || outline.length === 0}
          className="w-full"
          variant="secondary"
        >
          {isGenerating ? (
            <>
              <svg className="animate-spin h-5 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating Screenplay ({generationProgress}%)
            </>
          ) : (
            <>
              <BookOpen className="mr-2 h-4 w-4" />
              Generate Screenplay
            </>
          )}
        </Button>

        {error && (
          <div className="text-red-500 text-sm mt-2">
            {error}
          </div>
        )}

        {editorFeedback.script && (
          <Card className="mt-6 bg-black/50 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-sm text-zinc-400">Editor Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-sm text-zinc-300 whitespace-pre-wrap">
                {editorFeedback.script}
              </pre>
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto">
        <header className="flex items-center justify-between py-6 px-6 border-b border-zinc-800">
          <div>
            <h1 className="text-2xl font-bold text-zinc-100">
              HOLL<span className="text-purple-500">M</span>WOOD
            </h1>
            <p className="text-sm text-zinc-500">AI-Powered Screenplay Generation</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="border-zinc-800">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" size="sm" className="border-zinc-800">
              <Film className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-2 gap-6 p-6">
          <div className="space-y-6">
            <Tabs defaultValue="characters" className="w-full">
              <TabsList className="w-full bg-zinc-900 border-b border-zinc-800">
                <TabsTrigger value="characters" className="flex-1">Characters</TabsTrigger>
                <TabsTrigger value="outline" className="flex-1">Outline</TabsTrigger>
                <TabsTrigger value="script" className="flex-1">Script</TabsTrigger>
              </TabsList>
              <ScrollArea className="h-[calc(100vh-12rem)] mt-6">
                <TabsContent value="characters">
                  {renderCharacterTab()}
                </TabsContent>
                <TabsContent value="outline">
                  {renderOutlineTab()}
                </TabsContent>
                <TabsContent value="script">
                  {renderScriptTab()}
                </TabsContent>
              </ScrollArea>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card className="bg-black/50 border-zinc-800">
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-zinc-900/50 rounded-lg flex items-center justify-center mb-6">
                  {selectedImage ? (
                    <img 
                      src={selectedImage} 
                      alt="Generated Scene" 
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <div className="text-center text-zinc-500">
                      <ImageIcon className="h-10 w-10 mx-auto mb-2" />
                      <p>No preview available</p>
                    </div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-zinc-300">Timeline</h3>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <SkipBack className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <SkipForward className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-zinc-500">00:00</span>
                      <Slider
                        defaultValue={[0]}
                        max={100}
                        step={1}
                        className="flex-1"
                      />
                      <span className="text-sm text-zinc-500">00:30</span>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center gap-4">
                        <span className="w-20 text-sm text-zinc-500">Video</span>
                        <div className="flex-1 h-8 bg-zinc-900/50 rounded border border-zinc-800" />
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="w-20 text-sm text-zinc-500">Audio</span>
                        <div className="flex-1 h-8 bg-zinc-900/50 rounded border border-zinc-800" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
