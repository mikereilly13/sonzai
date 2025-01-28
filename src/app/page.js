"use client";


import { useState, useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import TaskList from './_components/taskList';
import ClockWidget from "./_components/clock-widget";
import PageHeader from "./_components/page-header";

export default function Home() {
  const [date, setDate] = useState(new Date());
  

  return (
    <div className="flex flex-col">
      <PageHeader title={"Home"} />
      <div className="flex justify-between w-full mt-2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          modifiers={{
            today: new Date(),
          }}
          className="rounded-lg border shadow-lg"
        />
        <ClockWidget />
      </div>
      
    </div>
  );
}
