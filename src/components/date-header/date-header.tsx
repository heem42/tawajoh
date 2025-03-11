
interface Props {
  date: Date,
}

export default function DateHeader({ date }: Props) {
  return (
    <div className="pb-10 pt-10 flex justify-center">
      {date.toDateString()}
    </div>
  )
}