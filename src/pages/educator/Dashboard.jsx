"use client"

import { useState } from "react"
import Sidebar from "../../components/educator/Sidebar"
import DashboardContent from "../../pages/educator/DashboardContent"
import AddCourse from "../../pages/educator/AddCourse"
import MyCourses from "../../pages/educator/MyCourses"
import StudentsEnrolled from "../../pages/educator/StudentsEnrolled"

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent />
      case "add-course":
        return <AddCourse />
      case "my-courses":
        return <MyCourses />
      case "students-enrolled":
        return <StudentsEnrolled />
      default:
        return <DashboardContent />
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1">{renderContent()}</main>
    </div>
  )
}