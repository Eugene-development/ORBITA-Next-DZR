"use client"

import { useState, useEffect } from "react";

export default function index() {

const [count, setCount] = useState(1);

  return (
    <input
        value={count}
        onChange={(e) => setCount(e.target.value)}
        type="number"
        className="block w-24 rounded-md border-cyan-300 focus:border-cyan-600 focus:ring-cyan-600 sm:text-sm"													
    />
  )
}
