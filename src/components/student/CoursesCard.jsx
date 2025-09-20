"use client"
import { BsStarFill, BsStarHalf } from "react-icons/bs"
import { dummyEducatorData } from "../../assets/assets"

const CoursesCard = ({ course, onClick }) => {
  const ratings = course?.courseRatings ?? []
  const avgRating = ratings.length > 0 ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length : 0

  const fullStars = Math.floor(avgRating)
  const hasHalfStar = avgRating % 1 !== 0
  const { name } = dummyEducatorData

  return (
    <div
      className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
      onClick={onClick}
    >
      <img src={course.courseThumbnail} alt={course.courseTitle} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h1 className="text-md font-extrabold">{course.courseTitle}</h1>
        <h3 className="text-sm text-gray-500">{name ?? "Unknown Educator"}</h3>

        <div className="flex items-center gap-2 mt-2">
          <p className="text-sm text-gray-600">{avgRating > 0 ? avgRating.toFixed(1) : "No ratings yet"}</p>
          <div className="flex text-yellow-400">
            {[...Array(fullStars)].map((_, i) => (
              <BsStarFill key={i} />
            ))}
            {hasHalfStar && <BsStarHalf />}
          </div>
        </div>

        <h1 className="text-xl font-bold mt-3">${course.coursePrice}</h1>
      </div>
    </div>
  )
}

export default CoursesCard
