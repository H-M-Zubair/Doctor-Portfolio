import React from "react";

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300"
    >
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="mb-6 text-lg font-bold text-blue-900 dark:text-white">
              About
            </h2>
            <p className="text-sm">
              Dr. Kevin, a board-certified health specialist with 27 years of
              experience, is known for his reliable health solutions and
              currently works in the private healthcare sector.
            </p>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-bold text-blue-900 dark:text-white">
              Quick Links
            </h2>
            <ul className="text-sm">
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Services
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Patient Portal
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Appointments
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-bold text-blue-900 dark:text-white">
              Contact
            </h2>
            <ul className="text-sm">
              <li className="mb-4">
                <span>Email: </span>
                <a
                  href="mailto:doctor@example.com"
                  className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  doctor@example.com
                </a>
              </li>
              <li className="mb-4">
                <span>Phone: </span>
                <a
                  href="tel:+1234567890"
                  className="hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  (340) 725-9858
                </a>
              </li>
              <li className="mb-4">
                <span>Location: </span>
                <span>1234 Medical St., City, Country</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-lg font-bold text-blue-900 dark:text-white">
              Working Hours
            </h2>
            <ul className="text-sm">
              <li className="mb-4">
                <span>Tue: </span>
                <span>8:00 AM - 3:30 PM</span>
              </li>
              <li className="mb-4">
                <span>Wed: </span>
                <span>8:00 AM - 12:00 PM</span>
              </li>
              <li className="mb-4">
                <span>Thu: </span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            &copy; 2023 Dr. John Doe. All Rights Reserved.
          </span>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a
              href="https://www.facebook.com"
              className="text-gray-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.734 0-1.325.592-1.325 1.324v21.351c0 .731.591 1.325 1.325 1.325h11.491v-9.293h-3.13v-3.622h3.13v-2.668c0-3.1 1.893-4.787 4.656-4.787 1.324 0 2.463.099 2.796.143v3.243l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.305h3.587l-.467 3.622h-3.12v9.293h6.116c.732 0 1.325-.594 1.325-1.325v-21.351c0-.732-.593-1.324-1.325-1.324z" />
              </svg>
            </a>
            <a
              href="https://www.twitter.com"
              className="text-gray-500 hover:text-blue-300 dark:hover:text-blue-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.394-1.83.656-2.825.775 1.014-.608 1.794-1.573 2.163-2.723-.949.562-2.005.97-3.127 1.192-.896-.959-2.173-1.56-3.594-1.56-2.719 0-4.92 2.201-4.92 4.917 0 .39.045.765.128 1.124-4.09-.205-7.719-2.165-10.148-5.144-.422.725-.666 1.56-.666 2.452 0 1.69.861 3.179 2.169 4.055-.799-.026-1.554-.245-2.212-.614v.061c0 2.364 1.683 4.337 3.918 4.785-.409.111-.84.171-1.285.171-.314 0-.616-.031-.916-.086.617 1.926 2.407 3.324 4.523 3.365-1.664 1.306-3.757 2.083-6.037 2.083-.393 0-.779-.023-1.161-.068 2.148 1.376 4.698 2.179 7.437 2.179 8.928 0 13.823-7.397 13.823-13.822 0-.21-.004-.42-.014-.63.948-.687 1.77-1.547 2.422-2.526z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-gray-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.667 0h-15.333c-2.388 0-4.334 1.946-4.334 4.333v15.334c0 2.388 1.946 4.333 4.334 4.333h15.333c2.388 0 4.333-1.946 4.333-4.333v-15.334c0-2.388-1.946-4.333-4.333-4.333zm-10.526 20h-3.141v-9.667h3.141v9.667zm-1.57-11.084c-1.005 0-1.814-.809-1.814-1.814s.809-1.814 1.814-1.814 1.814.809 1.814 1.814-.809 1.814-1.814 1.814zm12.096 11.084h-3.141v-5.217c0-1.236-.445-2.08-1.565-2.08-.853 0-1.361.571-1.585 1.122-.082.2-.103.48-.103.761v5.414h-3.141s.042-8.792 0-9.667h3.141v1.371c.416-.646 1.161-1.562 2.828-1.562 2.064 0 3.617 1.348 3.617 4.244v5.615z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              className="text-gray-500 hover:text-pink-700 dark:hover:text-blue-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.975.24 2.412.404a4.92 4.92 0 0 1 1.73 1.124 4.925 4.925 0 0 1 1.124 1.73c.164.438.35 1.242.404 2.412.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.975-.404 2.412a4.92 4.92 0 0 1-1.124 1.73 4.92 4.92 0 0 1-1.73 1.124c-.438.164-1.242.35-2.412.404-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.975-.24-2.412-.404a4.92 4.92 0 0 1-1.73-1.124 4.92 4.92 0 0 1-1.124-1.73c-.164-.438-.35-1.242-.404-2.412-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.975.404-2.412a4.92 4.92 0 0 1 1.124-1.73 4.92 4.92 0 0 1 1.73-1.124c.438-.164 1.242-.35 2.412-.404 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.072-1.28.06-2.163.258-2.919.527a7.006 7.006 0 0 0-2.531 1.44 7.003 7.003 0 0 0-1.44 2.531c-.269.756-.468 1.639-.527 2.919-.06 1.28-.072 1.688-.072 4.947s.012 3.667.072 4.947c.06 1.28.258 2.163.527 2.919a7.003 7.003 0 0 0 1.44 2.531 7.006 7.006 0 0 0 2.531 1.44c.756.269 1.639.468 2.919.527 1.28.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.28-.06 2.163-.258 2.919-.527a7.006 7.006 0 0 0 2.531-1.44 7.003 7.003 0 0 0 1.44-2.531c.269-.756.468-1.639.527-2.919.06-1.28.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.06-1.28-.258-2.163-.527-2.919a7.003 7.003 0 0 0-1.44-2.531 7.006 7.006 0 0 0-2.531-1.44c-.756-.269-1.639-.468-2.919-.527-1.28-.06-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.484-11.097a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
