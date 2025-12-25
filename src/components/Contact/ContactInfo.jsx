export default function ContactInfo() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl">
      <h3 className="text-3xl font-bold text-accent-950 mb-8">Контакти</h3>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center shrink-0">
            <svg
              className="w-6 h-6 text-accent-950"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-bold text-accent-950 mb-1">Телефон</h4>
            <p className="text-neutral-700">
              <a
                href="tel:+359885763636"
                className="hover:underline text-primary-600"
              >
                +359 88 576 3636
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center shrink-0">
            <svg
              className="w-6 h-6 text-accent-950"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-lg font-bold text-accent-950 mb-1">E-mail</h4>
            <p className="text-primary-600">
              <a href="mailto:t0sh1t0@gmail.com" className="hover:underline">
                t0sh1t0@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center shrink-0">
            <svg
              className="w-6 h-6 text-accent-950"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-accent-950 mb-1">Локация</h4>
            <p className="text-neutral-700">с. Катуница</p>
            <p className="text-neutral-700">ул. "Йордан Дойчев" №10</p>
            <a
              href="https://maps.app.goo.gl/ShoMdzPC73zS9usH9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-3 bg-primary-500 text-accent-950 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-400 transition-all duration-300 transform hover:scale-105"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Намери ни
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
