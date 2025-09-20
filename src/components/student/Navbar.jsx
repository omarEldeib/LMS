"use client"
import logo from "../../assets/logo.svg"
import { Link, useNavigate } from "react-router-dom"
import { useClerk, useUser } from "@clerk/clerk-react"
import { useCourses } from "../../context/AppContext"
import { useState, useRef, useEffect } from "react"
import {
  ChevronDownIcon,
  AcademicCapIcon,
  BookOpenIcon,
  CogIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline"

const Navbar = () => {
  const isCourseList = window.location.pathname.includes("/course-list")
  const { openSignIn, signOut } = useClerk()
  const { user } = useUser()
  const { isEducator } = useCourses()
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSignOut = () => {
    signOut()
    setIsMenuOpen(false)
  }

  return (
    <div
      className={`flex justify-between items-center w-full mx-auto py-4 md:py-6 px-4 md:px-[8rem] border-b border-gray-500 ${isCourseList ? "bg-white " : "bg-cyan-100/70"}`}
    >
      <img
        src={logo || "/placeholder.svg"}
        alt=""
        className="w-20 md:w-28 cursor-pointer"
        onClick={() => navigate("/")}
      />

      <div className="flex justify-between items-center gap-4">
        {user ? (
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <img
                src={user.imageUrl || "/placeholder.svg?height=32&width=32"}
                alt="User avatar"
                className="w-8 h-8 rounded-full"
              />
              <ChevronDownIcon className="w-4 h-4 text-gray-600" />
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">{user.fullName || user.firstName}</p>
                  <p className="text-xs text-gray-500">{user.primaryEmailAddress?.emailAddress}</p>
                </div>

                <button
                  onClick={() => {
                    navigate("/educator")
                    setIsMenuOpen(false)
                  }}
                  className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <AcademicCapIcon className="w-4 h-4" />
                  Educator Dashboard
                </button>

                <Link
                  to="/my-enrollments"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <BookOpenIcon className="w-4 h-4" />
                  My Enrollments
                </Link>

                <button
                  onClick={() => {
                    // Add manage account functionality
                    setIsMenuOpen(false)
                  }}
                  className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <CogIcon className="w-4 h-4" />
                  Manage Account
                </button>

                <div className="border-t border-gray-100 mt-2 pt-2">
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <ArrowRightOnRectangleIcon className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-700 rounded-full px-3 py-1.5 md:py-1 text-gray-200 text-xs md:text-sm font-medium whitespace-nowrap"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
