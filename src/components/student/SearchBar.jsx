"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = ({ data }) => {
  const navigate = useNavigate()
  const [input, setInput] = useState(data ? data : "")
  const handleSearch = (e) => {
    e.preventDefault()
    navigate("/course-list/" + input)
  }

  return (
    <form onSubmit={handleSearch} className="relative flex justify-center items-center w-full">
      <div className="relative w-full max-w-2xl">
        <input
          onChange={(e) => setInput(e.target.value)}
          className="border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none px-4 py-3 sm:py-4 lg:py-5 rounded-lg w-full text-sm sm:text-base lg:text-lg pr-24 sm:pr-28 shadow-sm"
          type="text"
          placeholder="Search for courses"
          value={input}
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-blue-600 hover:bg-blue-700 transition-colors rounded-md px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm lg:text-base font-medium flex items-center gap-1 sm:gap-2">
          <span className="inline">Search</span>
        </button>
      </div>
    </form>
  )
}

export default SearchBar
