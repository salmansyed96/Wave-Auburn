import { Hero } from "@/app/sections/Hero";
import { Button } from "@/components/ui/button";
import CountdownTimer from "./sections/Countdown";


export default function page() {
  return (
    <div>
      <Hero />
      <CountdownTimer targetDate={new Date('2024-08-30T00:00:00')} />
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <Button className="ml-3 mt-3">Hello</Button>
      <Button className="ml-2">Submit</Button>
      <Button className="ml-2">Submit</Button>
    </div>
  )
}
