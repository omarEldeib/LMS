import sktech from "../../assets/sktech.svg"
import SearchBar from "./SearchBar"

const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-b from-cyan-100/70 to-white">
      <div className="flex justify-center items-center flex-col min-h-[500px] lg:min-h-[600px] text-center w-full max-w-6xl mx-auto gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-black relative text-balance leading-tight max-w-4xl">
          Empower your future with the courses designed to <span className="text-blue-600">fit your choice.</span>
          <img
            src={sktech || "/placeholder.svg"}
            className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-8 right-0 w-6 sm:w-8 lg:w-auto"
            alt=""
          />
        </h1>
        <p className="text-gray-600 font-medium text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed px-4">
          We bring together world-class instructors, interactive content, and a supportive community to help you achieve
          your personal and professional goals.
        </p>
        <div className="w-full max-w-3xl px-4">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Hero
