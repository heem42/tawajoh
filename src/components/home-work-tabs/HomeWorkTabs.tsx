import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function HomeWorkTabs({ }) {
  return (
    <div className="w-full">
      <Tabs defaultValue="todo" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="todo">Todo</TabsTrigger>
          <TabsTrigger value="done">Done</TabsTrigger>
        </TabsList>
        <TabsContent value="todo">
          
        </TabsContent>
        <TabsContent value="done">Done Items</TabsContent>
      </Tabs>
    </div>
  )
}