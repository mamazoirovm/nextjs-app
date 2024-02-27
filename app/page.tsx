"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [names, setNames] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const fetchNames = async () => {
    const res = await fetch("/api/names");
    const data = await res.json();

    setNames(data);
  };

  useEffect(() => {
    fetchNames();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const value = inputRef.current?.value;

    const res = await fetch("/api/names", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: value }),
    });

    console.log(res.status);
  };
  return (
    <div className="container">
      <div>
        <input
          type="text"
          placeholder="Search"
          className="border border-slate-800 p-1 rounded-sm"
        />
      </div>
      <form
        className="flex gap-1 items-center"
        action={"http://localhost:3000/api"}
        method="post"
        onSubmit={handleSubmit}
      >
        <input
          className="border border-slate-600 rounded-sm p-1"
          placeholder="Salomat"
          type="text"
          ref={inputRef}
        />
        <br />
        <button className="px-6 py-2 border-none bg-slate-600 text-slate-50 rounded-md">
          Add
        </button>
      </form>
      <ul>
        {names.map((name) => (
          <li key={name} className="border p-3 flex gap-5">
            {name}
            <button className="bg-red-700 text-slate-50 p-2">delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
