"use client"
import { Link, useNavigate } from "react-router-dom"
import { useCourses } from "../../context/AppContext"
import CoursesCard from "./CoursesCard"

const CoursesSection = () => {
  const { allCourses } = useCourses()
  const navigate = useNavigate()

  return (
    <div className="w-full max-w-7xl mx-auto pt-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-6">
      <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold">Learn from the best</h1>
      <p className="text-center text-gray-500 max-w-3xl text-sm sm:text-base leading-relaxed">
        Discover our top-rated courses across various categories. From coding and design to business and wellness, our
        courses are crafted to deliver results.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 py-8 w-full">
        {allCourses.slice(0, 4).map((course, id) => (
          <CoursesCard key={id} course={course} onClick={() => navigate(`/course-list${course.id}`)} />
        ))}
      </div>
      <Link to={"/course-list"}>
        <button className="border border-gray-300 text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors cursor-pointer rounded-md px-6 py-3 text-sm sm:text-base">
          Show all courses
        </button>
      </Link>
    </div>
  )
}

export default CoursesSection
