"use client"

import { useEffect, useState } from "react"
import SearchBar from "../../components/student/SearchBar"
import { useNavigate, useParams } from "react-router-dom"
import { useCourses } from "../../context/AppContext"
import CoursesCard from "../../components/student/CoursesCard"
import cross from "../../assets/cross_icon.svg"

const CoursesList = () => {
  const navigate = useNavigate()
  const { input } = useParams()
  const { allCourses } = useCourses()
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = [...allCourses]

      if (input) {
        setFiltered(tempCourses.filter((item) => item.courseTitle.toLowerCase().includes(input.toLowerCase())))
      } else {
        setFiltered(tempCourses)
      }
    }
  }, [allCourses, input])

  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-45 px-4 md:px-25 pt-8 md:pt-15">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold">Courses List</h1>
            <p className="text-gray-500 font-normal">
              <span className="text-blue-400 cursor-pointer" onClick={() => navigate("/")}>
                Home
              </span>{" "}
              / Course List
            </p>
          </div>
          <div className="w-full md:w-auto">
            <SearchBar data={input} />
          </div>
        </div>

        {input && (
          <div className="inline-flex items-center gap-4 px-4 py-2 border mt-4 md:mt-8 -mb-4 md:-mb-8 mx-4 md:mx-25 text-gray-600">
            <p>{input}</p>
            <img
              src={cross || "/placeholder.svg"}
              alt="Clear search"
              srcSet=""
              className="cursor-pointer"
              onClick={() => navigate("/course-list/")}
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 px-4 md:px-20 py-8 md:py-15">
          {filtered.length > 0 ? (
            filtered.map((course, id) => (
              <CoursesCard course={course} key={course.id ?? id} onClick={() => navigate(`/courses/${course._id}`)} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center py-8">No courses found.</p>
          )}
        </div>
      </div>
    </>
  )
}

export default CoursesList
