export const services = [
  {
    id: 1,
    title: "Екстериорен Детайлинг",
    description: "Професионална грижа за външността на вашия автомобил",
    src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=600&fit=crop",
    // price: "200 лв",
    subServices: [
      {
        id: "ext-1",
        name: "По-добър блясък + защита",
        description:
          "Детайлно измиване, премахване на налепи по екстериора и корекция във всички нужни стъпки",
        details: "Състои се от:",
        pricing: [
          {
            type: "Nanolex Spray Wax",
            price: "400 лв",
          },
        ],
      },
      {
        id: "ext-2",
        name: "Корекция на лак + керамика",
        description: "Детайлно измиване и поставяне на керамично покритие",
        pricing: [
          { type: "Nanolex Si3D + Si3D Spray", price: "800 лв" },
          { type: "Nanolex Si3D MAX + Si3D Spray", price: "1100 лв" },
          { type: "Nanolex Si3D BC*", price: "1300 лв" },
        ],
        notes: [
          "*Nanolex Si3D BC - Много твърдо покритие, което се полага под основното и увеличава неговите свойства и живот. Не може да се апликира самостоятелно.",
          " **В цената е включено детайлно измиване, премахване на налепи и полиране в нужните стъпки",
        ],
      },
      {
        id: "ext-3",
        name: "Поддръжка на керамично покритие",
        description:
          "Детайлно и деликатно външно измиване, инспекция на състоянието на керамичното покритие и подхранване със сийлънт на Nanolex",
        pricing: [
          { type: "На всеки 6 месеца", price: "800 лв" },
          { type: "На всеки 12 месеца", price: "1100 лв" },
          { type: "На всеки 18 месеца", price: "1300 лв" },
          { type: "Възстановяване на керамика", price: "1500 лв" },
        ],
        notes: [],
      },
      {
        id: "ext-4",
        name: "Корекция на фарове + защита",
        description: "Шлайфане в нужните стъпки, пастиране и полиране",
        pricing: [
          { type: "Nanolex Headlight Coat", price: "200 лв" },
          { type: "PPF (фолио висок клас)", price: "350 лв" },
        ],
        notes: [],
      },
      {
        id: "ext-5",
        name: "Полиране на стъкла + керамика (Nanolex Ultra Glass)",
        description:
          "Почистване на стъклата, премахване на налепи, полиране и защита",
        pricing: [
          { type: "Челно стъкло", price: "200 лв" },
          { type: "Всички стъкла", price: "350 лв" },
        ],
        notes: [],
      },
      {
        id: "ext-6",
        name: "Почистване на джанти + керамика",
        description:
          "Почистване на външната и вътрешната част на джантата, премахване на налепи (феродо, асфалт, ръжда) и полагане на керамика",
        pricing: [{ type: "Nanolex Si3D RIM", price: "200 лв" }],
        notes: [],
      },
    ],
  },
  {
    id: 2,
    title: "Интериорен Детайлинг",
    description: "Дълбоко почистване и обновяване на интериора",
    src: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&h=600&fit=crop",
    // price: "600 лв",
    subServices: [
      {
        id: "int-1",
        name: "Почистване и импрегниране на салон",
        description: "",
        pricing: [
          { type: "Пълен интериорен детайлинг", price: "600 лв" },
          {
            type: "Импрегниране на текстилен автосалон с Nanolex Textile and Leather",
            price: "780 лв",
          },
          {
            type: "Защита на кожен автосалон с Nanolex Si3D Leather",
            price: "980 лв",
          },
        ],
        notes: [],
      },
    ],
  },
];

export default services;
