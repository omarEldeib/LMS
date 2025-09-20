"use client"

import React from "react"

const MyCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Build Text to Image SaaS App in React JS",
      thumbnail: "/react-course-thumbnail.jpg",
      earnings: "$100",
      students: 25,
      status: "Live",
      isLive: true,
    },
    {
      id: 2,
      title: "Build Text to Image SaaS App in React JS",
      thumbnail: "/saas-app-thumbnail.jpg",
      earnings: "$100",
      students: 28,
      status: "Private",
      isLive: false,
    },
    {
      id: 3,
      title: "Build Text to Image SaaS App in React JS",
      thumbnail: "/javascript-course-thumbnail.png",
      earnings: "$50",
      students: 22,
      status: "Live",
      isLive: true,
    },
    {
      id: 4,
      title: "Build Text to Image SaaS App in React JS",
      thumbnail: "/web-development-course.png",
      earnings: "$200",
      students: 8,
      status: "Live",
      isLive: true,
    },
    {
      id: 5,
      title: "Build Text to Image SaaS App in React JS",
      thumbnail: "/programming-tutorial.png",
      earnings: "$250",
      students: 15,
      status: "Live",
      isLive: true,
    },
  ]

  const latestEnrollments = [
    { id: 1, name: "Richard", avatar: "/richard.jpg" },
    { id: 2, name: "Enrique", avatar: "/enrique.jpg" },
    { id: 3, name: "Alison", avatar: "/alison.jpg" },
    { id: 4, name: "Richard", avatar: "/richard2.jpg" },
    { id: 5, name: "Enrique", avatar: "/enrique2.jpg" },
    { id: 6, name: "Alison", avatar: "/alison2.jpg" },
    { id: 7, name: "Richard", avatar: "/richard3.jpg" },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold mb-2">My Courses</h1>
          <p className="text-gray-600">Manage and track your course performance</p>
        </header>

        <section className="bg-white shadow-sm rounded-lg">
          <header className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">All Courses</h2>
            <div className="flex gap-8 text-sm text-gray-600">
              <span>Earnings</span>
              <span>Students</span>
              <span>Course Status</span>
            </div>
          </header>

          <div className="space-y-4 px-6 pb-6">
            {courses.map((course) => (
              <article
                key={course.id}
                className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-20 h-15 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      width={80}
                      height={60}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 truncate">{course.title}</h3>
                </div>

                <div className="flex items-center gap-8">
                  <span className="text-sm font-medium text-gray-900 w-16 text-center">{course.earnings}</span>
                  <span className="text-sm font-medium text-gray-900 w-16 text-center">{course.students}</span>
                  <div className="flex items-center gap-3 w-20">
                    <input
                      type="checkbox"
                      checked={course.isLive}
                      readOnly
                      className="w-5 h-5 rounded-full cursor-pointer accent-blue-600"
                    />
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        course.isLive
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {course.status}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Latest Enrollments Sidebar */}
      <aside className="w-80 bg-white border-l border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Latest Enrollments</h2>
        <ul className="space-y-4">
          {latestEnrollments.map((student, index) => (
            <li key={student.id} className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-500 w-4">{index + 1}</span>
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                {student.avatar ? (
                  <img
                    src={student.avatar}
                    alt={student.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xs">{student.name[0]}</span>
                )}
              </div>
              <span className="text-sm font-medium text-gray-900">{student.name}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

export default MyCourses
