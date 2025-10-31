export default function PricesTable({ services }) {
  if (!services || services.length === 0) return null;

  return (
    <section className="mt-16">
      <h3 className="text-4xl md:text-5xl font-bold text-primary-500 mb-8 text-center">
        Цени
      </h3>
      <div className="overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-white/5 text-neutral-200">
                <th className="text-left font-semibold px-6 py-4">Услуга</th>

                <th className="text-right font-semibold px-6 py-4">
                  Цена (от)
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((s) => (
                <tr
                  key={s.id}
                  className="border-t border-white/10 hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4 text-white font-medium">
                    {s.title}
                  </td>
                  <td className="px-6 py-4 text-right text-primary-400 font-semibold">
                    {s.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
