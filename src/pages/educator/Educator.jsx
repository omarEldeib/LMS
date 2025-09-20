// DashboardContent.jsx
import React, { useState } from "react";
import { Users, BookOpen, DollarSign } from "lucide-react";
import Sidebar from "../../components/educator/Sidebar";

const DashboardContent = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats = [
    { title: "Total Enrollments", value: "14", icon: Users },
    { title: "Total Courses", value: "8", icon: BookOpen },
    { title: "Total Earnings", value: "$245", icon: DollarSign },
  ];

  const latestEnrollments = [
    { id: 1, name: "Richard Sanford", course: "Build Text to Image SaaS App in React JS", date: "22 Aug, 2024", avatar: "/richard.jpg" },
    { id: 2, name: "Enrique Murphy", course: "Build AI BG Removal SaaS App in React JS", date: "22 Aug, 2024", avatar: "/enrique.jpg" },
    { id: 3, name: "Alison Powell", course: "React Router Complete Course in One Video", date: "25 Sep, 2024", avatar: "/alison.jpg" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 p-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your courses.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
            );
          })}
        </section>

        <section className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-6 pb-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Latest Enrollments</h2>
          </div>
          <table className="w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">#</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Student name</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Course Title</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {latestEnrollments.map((enrollment, index) => (
                <tr key={enrollment.id} className=" hover:bg-gray-100">
                  <td className="py-4 px-6 text-sm text-gray-600">{index + 1}</td>
                  <td className="py-4 px-6 text-sm text-gray-900">{enrollment.name}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{enrollment.course}</td>
                  <td className="py-4 px-6 text-sm text-gray-600">{enrollment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default DashboardContent;
