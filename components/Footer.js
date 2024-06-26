export default function Footer() {
  let date =  new Date().getFullYear();
  return (
    <footer className=" pb-4 text-white-200 bottom-0 w-screen" 
    style={{background:"#908f8f"}}
    >
      <div className="max-w-5xl xl:max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* <div className="flex flex-col-reverse justify-between pt-5 pb-2 lg:flex-row bg-top "> */}
          {/* <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Ad Choices
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Partners
              </a>
            </li>
          </ul> */}
          <ul className="pt-5 flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row justify-center items-center">
            <li
              className="text-sm  hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight font-body text-center w-screen"
              style={{ color: "white" }}
            >
              Copyright © {date} Intermont. All rights reserved
            </li>
          </ul>
        </div>
      {/* </div> */}
    </footer>
  );
}
