"use client"

import { useEffect } from "react"
import { useCourses } from "../../context/AppContext"
import { useNavigate } from "react-router-dom"
import { Line } from "rc-progress"

const Enrollments = () => {
  const { enrolledCourses, calcCourseTime, getEnrolledCourses } = useCourses()
  const navigate = useNavigate()

  useEffect(() => {
    getEnrolledCourses()
  }, [])

  return (
    <div className="px-4 md:px-8 pt-6 md:pt-10">
      <h1 className="font-semibold text-xl md:text-2xl mb-4 md:mb-6">My Enrollments</h1>

      <div className="hidden md:block">
        <table className="table-auto w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-left text-gray-900 text-sm">
            <tr>
              <th className="px-4 py-3 font-semibold">Course</th>
              <th className="px-4 py-3 font-semibold">Duration</th>
              <th className="px-4 py-3 font-semibold">Completed</th>
              <th className="px-4 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourses.length > 0 ? (
              enrolledCourses.map((course, id) => (
                <tr key={id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={course.courseThumbnail || "/placeholder.svg"}
                        alt={course.courseTitle}
                        className="w-28 h-16 object-cover rounded"
                      />
                      <div className="flex flex-col w-full">
                        <p className="font-normal text-sm">{course.courseTitle}</p>
                        <Line
                          percent={50}
                          strokeWidth={3}
                          strokeColor="#3b82f6"
                          trailWidth={3}
                          trailColor="#e5e7eb"
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">{calcCourseTime(course)}</td>
                  <td className="px-4 py-3 text-gray-700">
                    4 / 10 <span className="text-sm">lectures</span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      onClick={() => navigate("/player/" + course._id)}
                      className={`px-3 py-1 rounded-full text-sm font-medium cursor-pointer ${
                        course.status === "completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {course.status || "Ongoing"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  You haven't enrolled in any courses yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map((course, id) => (
            <div key={id} className="border border-gray-300 rounded-lg p-4 bg-white">
              <div className="flex gap-3 mb-3">
                <img
                  src={course.courseThumbnail || "/placeholder.svg"}
                  alt={course.courseTitle}
                  className="w-20 h-12 object-cover rounded flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-gray-900 truncate">{course.courseTitle}</p>
                  <p className="text-xs text-gray-500 mt-1">{calcCourseTime(course)}</p>
                </div>
              </div>

              <div className="mb-3">
                <Line percent={50} strokeWidth={3} strokeColor="#3b82f6" trailWidth={3} trailColor="#e5e7eb" />
                <p className="text-xs text-gray-600 mt-1">4 / 10 lectures completed</p>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Status:</span>
                <span
                  onClick={() => navigate("/player/" + course._id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer ${
                    course.status === "completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {course.status || "Ongoing"}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">You haven't enrolled in any courses yet.</div>
        )}
      </div>
    </div>
  )
}

export default Enrollments
