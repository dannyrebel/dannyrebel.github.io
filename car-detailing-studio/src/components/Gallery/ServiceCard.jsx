export default function ServiceCard({ service, isOpen, toggleService }) {
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
        <div className="absolute inset-0 bg-linear-to-t from-accent-950/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
          <p className="text-neutral-200 text-sm">{service.description}</p>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="text-primary-400 font-semibold text-base lg:text-md">
            Цени от {service.price}
          </div>
          <button
            onClick={() => toggleService(service.id)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-primary-500 text-accent-950 hover:bg-primary-400 transition-colors duration-200 shadow-md"
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
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <div className="mt-2 rounded-xl bg-accent-950/70 backdrop-blur border border-white/10 p-4 animate-revealCard">
            <p className="text-neutral-100/90 text-sm mb-3">
              {service.details}
            </p>
            <ul className="text-neutral-100/90 text-sm space-y-1 list-disc pl-5 marker:text-primary-400">
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
        </div>
      </div>
    </div>
  );
}
