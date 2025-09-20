"use client"

import React, { useState } from "react"
import Sidebar from "../../components/educator/Sidebar"

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    headings: "",
    description: "",
    price: "",
  })

  const studentsEnrolled = [
    { id: 1, name: "Richard" },
    { id: 2, name: "Enrique" },
    { id: 3, name: "Alison" },
    { id: 4, name: "Richard2" },
    { id: 5, name: "Enrique2" },
    { id: 6, name: "Alison2" },
    { id: 7, name: "Richard3" },
  ]

  const handleInputChange = (field, value) => {
    setCourseData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Course data:", courseData)
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar on the left */}
      <Sidebar activeTab="add-course" onTabChange={() => {}} />

      {/* Main content */}
      <main style={{ flex: 1, padding: "2rem", backgroundColor: "#f9fafb" }}>
        <header style={{ marginBottom: "2rem" }}>
          <h1>Add Course</h1>
          <p>Create a new course for your students</p>
        </header>

        <section style={{ backgroundColor: "#fff", padding: "2rem", borderRadius: "8px", marginBottom: "2rem" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Course Title */}
            <div>
              <label htmlFor="title">Course Title</label>
              <input
                type="text"
                id="title"
                value={courseData.title}
                onChange={e => handleInputChange("title", e.target.value)}
                style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
              />
            </div>

            {/* Course Headings */}
            <div>
              <label htmlFor="headings">Course Headings</label>
              <input
                type="text"
                id="headings"
                value={courseData.headings}
                onChange={e => handleInputChange("headings", e.target.value)}
                style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
              />
            </div>

            {/* Course Description */}
            <div>
              <label htmlFor="description">Course Description</label>
              <textarea
                id="description"
                value={courseData.description}
                onChange={e => handleInputChange("description", e.target.value)}
                style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem", minHeight: "100px" }}
              ></textarea>
            </div>

            {/* Course Price */}
            <div>
              <label htmlFor="price">Course Price</label>
              <input
                type="number"
                id="price"
                value={courseData.price}
                onChange={e => handleInputChange("price", e.target.value)}
                style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
              />
            </div>

            <button type="submit" style={{ padding: "0.75rem", backgroundColor: "#000", color: "#fff", border: "none", borderRadius: "4px" }}>
              Add Course
            </button>
          </form>
        </section>
      </main>

      {/* Students Enrolled Sidebar */}
      <aside style={{ width: "20rem", padding: "2rem", backgroundColor: "#fff", borderLeft: "1px solid #e5e7eb" }}>
        <h2>Students Enrolled</h2>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
          {studentsEnrolled.map((student, index) => (
            <li key={student.id} style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <span>{index + 1}.</span>
              <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", backgroundColor: "#d1d5db", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {student.name[0]}
              </div>
              <span>{student.name}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

export default AddCourse
