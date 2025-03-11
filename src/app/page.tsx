"use client"
import DateHeader from "@/components/date-header/date-header";
import HomeWorkTabs from "@/components/home-work-tabs/HomeWorkTabs";
import TodoCard from "@/components/todo-card/todo-card";
import { Button } from "@/components/ui/button";
import { Todo } from "@/types/todo";
import { useState } from "react";

export default function Home() {
  const date = new Date();
  const [todos,] = useState<Todo[]>([
    {
      title: "Update Orders Board",
      dueBy: new Date(),
      isDone: false,
    }
  ]);

  return (
    <div className="p-20">
      <DateHeader date={date} />
      <div className="w-full flex justify-end">
        <Button>+</Button>
      </div>
      <HomeWorkTabs />

      {todos.map((todo) => (
        <TodoCard key={todo.title} todo={todo} />
      ))}
    </div>
  );
}
