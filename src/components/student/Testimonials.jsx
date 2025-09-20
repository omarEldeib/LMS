import { dummyTestimonial } from "../../assets/assets"

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 md:gap-7 w-full max-w-6xl mx-auto px-4 md:px-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center">Testimonials</h1>
      <p className="text-gray-500 text-center font-medium text-sm md:text-base max-w-4xl">
        Hear from our learners as they share their journeys of transformation, success, and how our platform has made a
        difference in their lives.
      </p>

      <div className="flex flex-col md:flex-row gap-4 md:gap-10 w-full justify-center items-stretch">
        {dummyTestimonial.map((testi, id) => (
          <div
            key={id}
            className="border shadow-lg pb-5 border-gray-300 rounded-md flex flex-col justify-center items-center flex-1 max-w-sm mx-auto md:mx-0"
          >
            <div className="bg-gray-200 flex justify-between items-start w-full px-2 py-3">
              <img
                src={testi.image || "/placeholder.svg"}
                alt=""
                className="w-12 h-12 md:w-15 md:h-15 rounded-full object-cover"
              />
              <div className="flex-1 ml-3">
                <h1 className="font-bold text-lg md:text-xl">{testi.name}</h1>
                <p className="text-xs md:text-sm text-gray-600">{testi.role}</p>
              </div>
            </div>
            <div className="flex justify-center items-start pt-4 px-3 text-xs md:text-sm text-gray-500 leading-relaxed">
              {testi.feedback}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
