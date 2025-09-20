import { ArrowBigRight } from "lucide-react"


const CallToAction = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 pt-16 sm:pt-20 px-4 text-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-2xl leading-tight">
        Learn anything, anytime, anywhere
      </h1>
      <p className="text-gray-500 text-sm sm:text-base font-medium max-w-2xl leading-relaxed">
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
        commodo do ea.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
        <button className="text-white bg-blue-700 hover:bg-blue-800 transition-colors rounded-md px-6 py-3 text-sm sm:text-base font-medium">
          Get Started
        </button>
        <button className="flex gap-2 items-center font-bold text-sm sm:text-base hover:text-blue-600 transition-colors">
          Learn More
          <ArrowBigRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default CallToAction
