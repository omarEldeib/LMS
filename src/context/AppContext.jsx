import { createContext, useContext, useEffect, useState } from "react";
import { dummyCourses } from '../assets/assets';
import  humanizeDuration  from 'humanize-duration';



export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const [enrolledCourses , setEnrolledCourses] = useState([])

  const fetchCourses = async () => {
    // In real app: fetch from API
    setAllCourses(dummyCourses);
  };

  const calcChapterTime = (chapter) => {
    let time = 0;
    if (Array.isArray(chapter.chapterContent)) {
      chapter.chapterContent.forEach((lecture) => {
        time += lecture.lectureDuration;
      });
    }
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  const calcCourseTime = (course) => {
    let time = 0;
    if (Array.isArray(course.courseContent)) {
      course.courseContent.forEach((chapter) => {
        if (Array.isArray(chapter.chapterContent)) {
          chapter.chapterContent.forEach((lecture) => {
            time += lecture.lectureDuration;
          });
        }
      });
    }
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  const calcNoLectures = (course) => {
    let totalLectures = 0;
    if (Array.isArray(course.courseContent)) {
      course.courseContent.forEach((chapter) => {
        if (Array.isArray(chapter.chapterContent)) {
          totalLectures += chapter.chapterContent.length;
        }
      });
    }
    return totalLectures;
  };

  const getEnrolledCourses = () => {
    setEnrolledCourses(dummyCourses)
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  const value = {
    allCourses,
    isEducator,
    setIsEducator,
    calcChapterTime,
    calcCourseTime,
    calcNoLectures,
    humanizeDuration,
    getEnrolledCourses,
    enrolledCourses,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export function useCourses() {
  return useContext(AppContext);
}