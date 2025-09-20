"use client"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCourses } from "../../context/AppContext"
import { BiArrowToBottom } from "react-icons/bi"
import { RxResume } from "react-icons/rx"
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"
import humanizeDuration from "humanize-duration"
import ReactPlayer from "react-player"

const Player = () => {
  const { enrolledCourses, getEnrolledCourses, calcChapterTime, submitCourseRating } = useCourses()
  const { courseId } = useParams()
  const [courseData, setCourseData] = useState(null)
  const [openChapters, setOpenChapters] = useState({})
  const [currentLectureUrl, setCurrentLectureUrl] = useState(null)
  const [currentThumbnail, setCurrentThumbnail] = useState(null)
  const [hoverRating, setHoverRating] = useState(0)
  const [userRating, setUserRating] = useState(0)

  useEffect(() => {
    getEnrolledCourses()
  }, [])

  useEffect(() => {
    if (enrolledCourses.length > 0) {
      const foundCourse = enrolledCourses.find((course) => String(course._id) === String(courseId))
      setCourseData(foundCourse)
      if (foundCourse) setCurrentThumbnail(foundCourse.courseThumbnail)
      if (foundCourse?.userRating) setUserRating(foundCourse.userRating)
    }
  }, [enrolledCourses, courseId])

  const toggleChapter = (index) => {
    setOpenChapters((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  const handleLectureClick = (lecture) => {
    setCurrentLectureUrl(lecture.lectureUrl)
    setCurrentThumbnail(lecture.thumbnail || courseData.courseThumbnail)
  }

  const handleStarClick = (rating) => {
    setUserRating(rating)
    if (submitCourseRating) submitCourseRating(courseId, rating)
  }

  const renderStars = () => {
    const stars = []
    const ratingToShow = hoverRating || userRating || courseData.rating || 0
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(ratingToShow)) {
        stars.push(
          <BsStarFill
            key={i}
            className="text-yellow-400 cursor-pointer"
            onMouseEnter={() => setHoverRating(i)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleStarClick(i)}
          />,
        )
      } else if (i - ratingToShow < 1) {
        stars.push(
          <BsStarHalf
            key={i}
            className="text-yellow-400 cursor-pointer"
            onMouseEnter={() => setHoverRating(i)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleStarClick(i)}
          />,
        )
      } else {
        stars.push(
          <BsStar
            key={i}
            className="text-yellow-400 cursor-pointer"
            onMouseEnter={() => setHoverRating(i)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => handleStarClick(i)}
          />,
        )
      }
    }
    return stars
  }

  if (!enrolledCourses.length) {
    return <div className="text-center mt-10 text-lg">Loading courses...</div>
  }

  if (!courseData) {
    return <div className="text-center mt-10 text-lg">Course not found</div>
  }

  return (
    <div className="min-h-screen pt-6 md:pt-15 px-4 md:px-16 bg-gray-50">
      <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] gap-6 lg:gap-15">
        {/* LEFT COLUMN */}
        <div className="flex flex-col order-2 lg:order-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-balance">{courseData.courseTitle}</h1>

          {/* Course Structure */}
          <div className="flex flex-col gap-4 mb-6">
            {courseData.courseContent.map((chapter, idx) => (
              <div key={idx} className="pb-2 border border-gray-300 bg-white rounded">
                <div
                  onClick={() => toggleChapter(idx)}
                  className={`flex items-center justify-between gap-2 md:gap-6 mb-2 py-2 px-3 cursor-pointer ${
                    openChapters[idx] ? "border-b border-gray-300" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <BiArrowToBottom
                      className={`text-blue-500 transition-transform duration-300 flex-shrink-0 ${
                        openChapters[idx] ? "rotate-180" : ""
                      }`}
                    />
                    <h3 className="font-semibold text-sm md:text-base truncate">{chapter.chapterTitle}</h3>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm flex-shrink-0">
                    {chapter.chapterContent.length} lectures • {calcChapterTime(chapter)}
                  </p>
                </div>

                <ul
                  className={`ml-4 md:ml-6 text-gray-700 transition-all list-none duration-300 ease-in-out ${
                    openChapters[idx] ? "block" : "hidden"
                  }`}
                >
                  {chapter.chapterContent.map((lecture, lIdx) => (
                    <li key={lIdx} className="py-2">
                      <div className="flex justify-between items-center gap-2 pr-2 md:pr-4">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <RxResume className="text-gray-500 flex-shrink-0" />
                          <button
                            onClick={() => handleLectureClick(lecture)}
                            className="hover:underline text-left text-sm md:text-base truncate"
                          >
                            {lecture.lectureTitle}
                          </button>
                        </div>
                        <p className="text-gray-500 text-xs md:text-sm flex-shrink-0">
                          {humanizeDuration(lecture.lectureDuration * 60 * 1000, {
                            units: ["h", "m"],
                          })}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Interactive Rating */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mt-4">
            <div className="flex items-center">{renderStars()}</div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">
                {userRating || courseData.rating ? (userRating || courseData.rating).toFixed(1) : "0.0"} / 5
              </span>
              <span className="text-gray-400">({courseData.totalRatings || 0} ratings)</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-start order-1 lg:order-2">
          {currentLectureUrl ? (
            <div className="w-full max-w-md lg:max-w-none">
              <ReactPlayer
                url={currentLectureUrl}
                controls
                width="100%"
                height="200px"
                className="md:!h-[300px]"
                light={currentThumbnail}
              />
            </div>
          ) : (
            <div className="w-full max-w-md lg:max-w-none">
              <img
                src={currentThumbnail || "/placeholder.svg"}
                alt={courseData.courseTitle}
                className="rounded-lg h-[200px] md:h-[300px] w-full object-cover shadow-md"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Player
