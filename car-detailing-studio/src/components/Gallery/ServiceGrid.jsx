import ServiceCard from "./ServiceCard";

export default function ServiceGrid({
  services,
  activeServiceId,
  toggleService,
}) {
  return (
    <div id="services">
      <h2 className="text-5xl md:text-6xl font-bold text-primary-500 mb-6 mt-5 text-center">
        Услуги
      </h2>
      <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service) => (
          <div key={service.id} className="max-w-3xl w-full mx-auto">
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
