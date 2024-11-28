import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Film, ChevronDown } from "lucide-react" // Import icons
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface MovieGeneration {
  id: string
  title: string
  // Add other movie properties
}

interface MovieSidebarProps {
  generations: MovieGeneration[]
  onSelectMovie: (movie: MovieGeneration) => void
}

export function MovieSidebar({ generations, onSelectMovie }: MovieSidebarProps) {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center">
                Movie Generations
                <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {generations.map((movie) => (
                    <SidebarMenuItem key={movie.id}>
                      <SidebarMenuButton onClick={() => onSelectMovie(movie)}>
                        <Film className="mr-2 h-4 w-4" />
                        <span>{movie.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  )
}