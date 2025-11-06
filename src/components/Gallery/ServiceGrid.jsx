import ServiceCard from "./ServiceCard";

export default function ServiceGrid({
  services,
  activeServiceId,
  toggleService,
}) {
  return (
    <div id="services" className="px-4">
      <h2 className="text-5xl md:text-6xl font-bold text-yellow-500 mb-6 mt-5 text-center">
        Услуги & Цени
      </h2>
      <div className="mt-15 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {services.map((service) => (
          <div key={service.id} className="w-full">
            <ServiceCard
              service={service}
              isOpen={activeServiceId === service.id}
              toggleService={toggleService}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
