const tours = [
  {
    id: 1,
    title: "Морская прогулка",
    description: "Круиз по акватории Байкала на деревянной лодке. Увидите бухты, гроты и нетронутые берега.",
    duration: "4 часа",
    price: "2 500 ₽",
    image: "https://cdn.poehali.dev/projects/f7e13df0-e75f-4ae0-86c7-1af4e5378b05/files/588f851f-dfc4-4659-905f-2dfa3fbee7cd.jpg",
  },
  {
    id: 2,
    title: "Горный трекинг",
    description: "Пешеходный маршрут по хребтам над Байкалом. Панорамные виды на 180° с высоты птичьего полёта.",
    duration: "Целый день",
    price: "3 200 ₽",
    image: "https://cdn.poehali.dev/projects/f7e13df0-e75f-4ae0-86c7-1af4e5378b05/files/02a55972-2ac8-4df5-bb26-4c61177d2d1d.jpg",
  },
  {
    id: 3,
    title: "Рыбалка на Байкале",
    description: "Утренняя рыбалка с местным рыбаком. Омуль, хариус и сиг — фирменные байкальские виды.",
    duration: "5 часов",
    price: "1 800 ₽",
    image: "https://cdn.poehali.dev/projects/f7e13df0-e75f-4ae0-86c7-1af4e5378b05/files/f044c6f2-6c25-4b0d-a5a1-d26f2bd1cb29.jpg",
  },
];

export default function Tours() {
  return (
    <section id="tours" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Наши маршруты</p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-16 leading-tight">
          Выберите свой Байкал
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="flex flex-col group">
              <div className="overflow-hidden h-72 mb-6">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-neutral-900">{tour.title}</h3>
                  <span className="text-sm text-neutral-500 whitespace-nowrap ml-4">{tour.duration}</span>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-1">{tour.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-neutral-900">{tour.price}</span>
                  <button className="bg-black text-white px-5 py-2 text-sm uppercase tracking-wide border border-black transition-all duration-300 hover:bg-white hover:text-black">
                    Забронировать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
