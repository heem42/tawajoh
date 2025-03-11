import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Checkbox } from "@/components/ui/checkbox"
import { Todo } from "@/types/todo"

interface Props {
  todo: Todo,
}

export default function TodoCard({ todo }: Props) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
        <CardTitle>{todo.title}</CardTitle>
        <Checkbox />
        </div>
        <CardDescription>{`Due by ${todo.dueBy.toDateString()} (52 minutes left)`}</CardDescription>
      </CardHeader>
    </Card>
  )
}