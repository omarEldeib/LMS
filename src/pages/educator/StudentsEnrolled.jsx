"use client"

import React from "react"

const StudentsEnrolled = () => {
  const enrolledStudents = [
    { id: 1, name: "Richard Sanford", course: "Build Text to Image SaaS App in React JS", date: "22 Aug, 2024" },
    { id: 2, name: "Enrique Murphy", course: "Build AI BG Removal SaaS App in React JS", date: "22 Aug, 2024" },
    { id: 3, name: "Alison Powell", course: "React Router Complete Course in One Video", date: "25 Sep, 2024" },
    { id: 4, name: "Richard Sanford", course: "Build Full Stack E-Commerce App in React JS", date: "15 Oct, 2024" },
    { id: 5, name: "Enrique Murphy", course: "Build AI BG Removal SaaS App in React JS", date: "22 Aug, 2024" },
    { id: 6, name: "Alison Powell", course: "React Router Complete Course in One Video", date: "25 Sep, 2024" },
    { id: 7, name: "Richard Sanford", course: "Build Full Stack E-Commerce App in React JS", date: "15 Oct, 2024" },
  ]

  return (
    <div style={{ padding: "2rem", minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      {/* Header */}
      <header style={{ marginBottom: "2rem" }}>
        <h1>Students Enrolled</h1>
        <p>View and manage all enrolled students across your courses</p>
      </header>

      {/* Students Table */}
      <section style={{ backgroundColor: "#fff", borderRadius: "8px", overflow: "hidden", marginBottom: "2rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#f3f4f6" }}>
            <tr>
              <th style={{ textAlign: "left", padding: "1rem" }}>#</th>
              <th style={{ textAlign: "left", padding: "1rem" }}>Student name</th>
              <th style={{ textAlign: "left", padding: "1rem" }}>Course Title</th>
              <th style={{ textAlign: "left", padding: "1rem" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map((student, index) => (
              <tr key={student.id} style={{ borderBottom: "1px solid #f3f4f6" }}>
                <td style={{ padding: "1rem" }}>{index + 1}</td>
                <td style={{ padding: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "2rem", height: "2rem", borderRadius: "50%", backgroundColor: "#d1d5db", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {student.name
                      .split(" ")
                      .map(n => n[0])
                      .join("")}
                  </div>
                  <span>{student.name}</span>
                </td>
                <td style={{ padding: "1rem", maxWidth: "20rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {student.course}
                </td>
                <td style={{ padding: "1rem" }}>{student.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Summary Stats */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
        <div style={{ backgroundColor: "#fff", padding: "1rem", textAlign: "center", borderRadius: "8px" }}>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.25rem" }}>7</p>
          <p>Total Students</p>
        </div>
        <div style={{ backgroundColor: "#fff", padding: "1rem", textAlign: "center", borderRadius: "8px" }}>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.25rem" }}>4</p>
          <p>Active Courses</p>
        </div>
        <div style={{ backgroundColor: "#fff", padding: "1rem", textAlign: "center", borderRadius: "8px" }}>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.25rem" }}>3</p>
          <p>New This Month</p>
        </div>
      </section>
    </div>
  )
}

export default StudentsEnrolled
