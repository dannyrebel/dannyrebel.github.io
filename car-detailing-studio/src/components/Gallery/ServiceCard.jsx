import { useState } from "react";

export default function ServiceCard({ service, isOpen, toggleService }) {
  const [activeSubService, setActiveSubService] = useState(null);

  return (
    <div
      className={`group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "ring-2 ring-primary-500/60"
          : "hover:bg-white/20 hover:scale-105"
      }`}
    >
      <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
        <img
          src={service.src}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-amber-700/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
          <p className="text-neutral-200 text-sm">{service.description}</p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="text-yellow-400 font-semibold text-base lg:text-md">
            Цени от {service.price}
          </div>
          <button
            onClick={() => toggleService(service.id)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-yellow-500 text-purple-950 hover:bg-yellow-400 transition-colors duration-200 shadow-md"
          >
            <span className="font-semibold text-sm">
              {isOpen ? "Скрий детайли" : "Повече детайли"}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-out ${
            isOpen
              ? "max-h-[2000px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <div className="mt-2 space-y-4">
            {service.subServices && service.subServices.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {service.subServices.map((subService) => (
                  <div
                    key={subService.id}
                    className="rounded-xl backdrop-blur border border-white/10 overflow-hidden hover:border-yellow-500/30 transition-all duration-300"
                  >
                    <div
                      onClick={() =>
                        setActiveSubService(
                          activeSubService === subService.id
                            ? null
                            : subService.id
                        )
                      }
                      className="p-4 cursor-pointer hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="text-white font-semibold text-base mb-1">
                            {subService.name}
                          </h5>
                          <p className="text-neutral-300 text-sm mb-2">
                            {subService.description}
                          </p>
                          <div className="text-yellow-400 font-semibold text-sm">
                            {subService.price}
                          </div>
                        </div>
                        <svg
                          className={`w-5 h-5 text-yellow-400 transition-transform duration-300 flex-shrink-0 ml-2 ${
                            activeSubService === subService.id
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeSubService === subService.id
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-4 pb-4 pt-2 border-t border-white/10">
                        {subService.details && (
                          <p className="text-neutral-100/90 text-sm mb-3">
                            {subService.details}
                          </p>
                        )}
                        {subService.includes &&
                          subService.includes.length > 0 && (
                            <ul className="text-neutral-100/90 text-sm space-y-1 list-disc pl-5 marker:text-yellow-400">
                              {subService.includes.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl  backdrop-blur border border-white/10 p-4">
                <p className="text-neutral-100/90 text-sm mb-3">
                  {service.details}
                </p>
                <ul className="text-neutral-100/90 text-sm space-y-1 list-disc pl-5 marker:text-yellow-400">
                  {service.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="mt-3">
                  <span className="text-neutral-300 text-xs">
                    *Цените могат да варират
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
