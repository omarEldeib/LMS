"use client"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCourses } from "../../context/AppContext"
import { BsStarFill, BsStarHalf } from "react-icons/bs"
import { BiArrowToBottom } from "react-icons/bi"
import clock from "../../assets/time_left_clock_icon.svg"
import { RxResume } from "react-icons/rx"

const CourseDetails = () => {
  const { id } = useParams()
  const { allCourses, calcChapterTime, humanizeDuration } = useCourses()
  const [courseData, setCourseData] = useState(null)
  const [openChapters, setOpenChapters] = useState({})

  const ratings = courseData?.courseRatings ?? []
  const avgRating = ratings.length > 0 ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length : 0

  const fullStars = Math.floor(avgRating)
  const hasHalfStar = avgRating % 1 !== 0

  useEffect(() => {
    if (allCourses.length > 0) {
      const foundData = allCourses.find((course) => String(course._id) === String(id))
      setCourseData(foundData || null)
    }
  }, [allCourses, id])

  if (!courseData) {
    return <div className="text-center mt-10 text-lg">Course not found</div>
  }

  const toggleChapter = (index) => {
    setOpenChapters((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-cyan-100/70 to-white min-h-[200px] md:h-[280px]">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-[15rem] pt-4 md:pt-7 px-4 md:px-30">
            {/* Left Content */}
            <div className="flex flex-col justify-between items-start gap-4 md:gap-8 order-2 lg:order-1">
              <div className="flex flex-col justify-center items-start gap-3 md:gap-5">
                <h1 className="text-2xl md:text-3xl font-bold text-balance">{courseData.courseTitle}</h1>
                <p
                  className="text-left text-gray-500 text-sm md:text-md font-medium leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: courseData.courseDescription.slice(0, 200),
                  }}
                ></p>

                {/* Ratings */}
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-sm text-gray-600">{avgRating > 0 ? avgRating.toFixed(1) : "No ratings yet"}</p>
                  <div className="flex text-yellow-400">
                    {[...Array(fullStars)].map((_, i) => (
                      <BsStarFill key={i} />
                    ))}
                    {hasHalfStar && <BsStarHalf />}
                  </div>
                </div>

                <p className="text-gray-700 text-sm font-medium">
                  Course by <span className="text-blue-400 underline">Edemy</span>
                </p>

                {/* Course Structure */}
                <div className="pt-4 md:pt-6 w-full">
                  <h1 className="font-bold text-xl md:text-2xl mb-4">Course Structure</h1>

                  <div className="flex flex-col gap-4">
                    {courseData?.courseContent?.map((chapter, idx) => (
                      <div
                        key={idx}
                        onClick={() => toggleChapter(idx)}
                        className="pb-2 border border-gray-300 bg-white rounded"
                      >
                        {/* Chapter Header */}
                        <div
                          className={`flex items-center justify-between gap-2 md:gap-6 mb-2 py-2 px-2 ${
                            openChapters[idx] ? "border-b border-gray-300" : "border-none"
                          }`}
                        >
                          <div className="flex items-center gap-2 cursor-pointer flex-1 min-w-0">
                            <BiArrowToBottom
                              className={`text-blue-500 transition-transform duration-300 flex-shrink-0 ${
                                openChapters[idx] ? "rotate-180" : ""
                              }`}
                            />
                            <h3 className="font-semibold text-sm md:text-base truncate">{chapter.chapterTitle}</h3>
                          </div>
                          <p className="text-xs md:text-sm text-gray-600 flex-shrink-0">
                            {chapter.chapterContent.length} lectures - {calcChapterTime(chapter)}
                          </p>
                        </div>

                        {/* Lectures List */}
                        <ul
                          className={`ml-4 md:ml-6 text-gray-700 transition-all list-none duration-300 ease-in-out ${
                            openChapters[idx] ? "block" : "hidden"
                          }`}
                        >
                          {chapter.chapterContent?.map((lecture, lIdx) => (
                            <div key={lIdx} className="transition delay-150 duration-300 ease-in-out">
                              <li className="text-sm py-1">
                                <div className="flex justify-between items-center gap-2 pr-2">
                                  <div className="flex items-center gap-2 flex-1 min-w-0">
                                    <RxResume className="flex-shrink-0" />
                                    <span className="truncate">{lecture.lectureTitle}</span>
                                  </div>
                                  <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                                    {lecture.isPreviewFree && <p className="text-blue-500 text-xs">Preview</p>}
                                    <p className="text-xs">
                                      {humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ["h", "m"] })}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            </div>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Course Description */}
                    <div className="mb-10">
                      <h3 className="pt-5 text-xl md:text-2xl font-bold">Course Description</h3>
                      <p
                        className="text-gray-500 text-sm pt-2 text-left font-medium leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: courseData.courseDescription,
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 w-full lg:w-[400px] mx-auto lg:mx-0">
              <div className="border border-transparent shadow-lg rounded-md bg-white h-max">
                <img
                  src={courseData.courseThumbnail || "/placeholder.svg"}
                  alt=""
                  className="w-full object-cover h-48 md:h-[200px] rounded-t-md"
                />
                <div className="flex flex-col pt-5 px-4 md:px-5">
                  <div className="flex items-center gap-2">
                    <img src={clock || "/placeholder.svg"} alt="" className="w-4 h-4" />
                    <p className="text-red-600 text-sm">5 days left at this price!</p>
                  </div>
                  <div className="flex justify-left items-center gap-3 md:gap-5 pt-2 pb-4">
                    <h1 className="text-2xl md:text-3xl font-extrabold">
                      ${(courseData.coursePrice - courseData.coursePrice * (courseData.discount / 100)).toFixed(2)}
                    </h1>
                    <h3 className="text-gray-500 text-base md:text-lg font-bold line-through">
                      ${courseData.coursePrice}
                    </h3>
                    <p className="text-gray-500 font-medium text-sm md:text-lg">{courseData.discount}% off</p>
                  </div>
                  <button className="text-white bg-blue-600 rounded-md px-3 py-3 mb-3 font-medium">Enroll Now</button>
                  <div className="pb-4">
                    <h1 className="text-xl md:text-2xl font-bold mb-3">What's in the course?</h1>
                    <div className="">
                      <ul className="list-disc px-3 text-gray-600 space-y-1 text-sm">
                        <li>Lifetime access with free updates.</li>
                        <li>Step-by-step, hands-on project guidance.</li>
                        <li>Downloadable resources and source code.</li>
                        <li>Quizzes to test your knowledge.</li>
                        <li>Certificate of completion.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CourseDetails
