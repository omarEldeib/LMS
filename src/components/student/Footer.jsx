import logo from "../../assets/logo_dark.svg"

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 pt-12 sm:pt-16 w-full text-gray-500 bg-gray-900 text-gray-400 mt-16 sm:mt-20">
      <div className="flex flex-col lg:flex-row justify-between w-full gap-8 lg:gap-10 border-b border-gray-500/30 pb-8">
        <div className="lg:max-w-96">
          <img src={logo || "/placeholder.svg"} alt="Logo" className="h-8 sm:h-10 w-auto" />
          <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="flex-1 flex flex-col sm:flex-row items-start gap-8 sm:gap-12 lg:justify-end lg:gap-20">
          <div>
            <h2 className="font-semibold mb-4 sm:mb-5 text-white">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-auto">
            <h2 className="font-semibold mb-4 sm:mb-5 text-white">Subscribe to our newsletter</h2>
            <div className="text-sm space-y-3 sm:space-y-4">
              <p className="leading-relaxed">The latest news, articles, and resources, sent to your inbox weekly.</p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2">
                <input
                  className="border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full sm:max-w-64 h-10 rounded px-3 bg-gray-800 text-white"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="bg-blue-600 hover:bg-blue-700 transition-colors w-full sm:w-24 h-10 text-white rounded font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-6 pb-6 text-center text-xs sm:text-sm">
        Copyright 2025 © . All Right Reserved || Developed By Omar Eldeib
      </p>
    </footer>
  )
}
