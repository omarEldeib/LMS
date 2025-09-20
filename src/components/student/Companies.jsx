import microsoft from "../../assets/microsoft_logo.svg"
import walmart from "../../assets/walmart_logo.svg"
import paypal from "../../assets/paypal_logo.svg"
import adobe from "../../assets/adobe_logo.svg"
import accenture from "../../assets/accenture_logo.svg"

const Companies = () => {
  return (
    <div className="pt-16 sm:pt-24 lg:pt-32 flex flex-col justify-center items-center gap-6 sm:gap-8 px-4">
      <h2 className="text-gray-500 font-medium text-sm sm:text-base">Trusted by learners from</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12 items-center justify-items-center w-full max-w-4xl">
        <img
          src={microsoft || "/placeholder.svg"}
          alt="Microsoft"
          className="h-6 sm:h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
        />
        <img
          src={walmart || "/placeholder.svg"}
          alt="Walmart"
          className="h-6 sm:h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
        />
        <img
          src={paypal || "/placeholder.svg"}
          alt="PayPal"
          className="h-6 sm:h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
        />
        <img
          src={adobe || "/placeholder.svg"}
          alt="Adobe"
          className="h-6 sm:h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
        />
        <img
          src={accenture || "/placeholder.svg"}
          alt="Accenture"
          className="h-6 sm:h-8 w-auto opacity-60 hover:opacity-100 transition-opacity col-span-2 sm:col-span-1"
        />
      </div>
    </div>
  )
}

export default Companies
