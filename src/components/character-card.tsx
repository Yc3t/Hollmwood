"use client"
import { Tabs, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { getCharacterData } from '@/utils/characterData';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { TabsList } from '@radix-ui/react-tabs';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Edit3, MoreVertical, Sparkles, Users } from "lucide-react";

const CharacterCard = async() => {
    

const handleClick  = () =>{
    console.log('rewriting...')
}

  return (
            <div className="space-y-6">
          <Tabs defaultValue="characters" className="w-full">
            <TabsList className="w-full bg-zinc-900 border-b border-zinc-800">
              <TabsTrigger value="characters" className="flex-1">Characters</TabsTrigger>
              <TabsTrigger value="outline" className="flex-1">Outline</TabsTrigger>
              <TabsTrigger value="script" className="flex-1">Script</TabsTrigger>
            </TabsList>
            <ScrollArea className="h-[calc(100vh-12rem)] mt-6">
              <TabsContent value="characters">
                <div className="space-y-6">
                  {characters.map((char, index) => (
                    <Card key={index} className="bg-black/50 border-zinc-800">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div>
                          <CardTitle className="text-zinc-100">{char.name}</CardTitle>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="border-zinc-800" onClick={handleClick}>
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
                        <p className="text-sm text-zinc-300 mb-4">{char.introduction}</p>

                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="outline">
                <h1>hi</h1>
              </TabsContent>
              <TabsContent value="script">
                <h1>xdd</h1>
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </div>
  )
}

export default CharacterCard 