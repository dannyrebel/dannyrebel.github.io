import cardImg from "./../assets/benzCard.jpg";
import certificateOne from "../assets/bg1.JPEG";
import certificateTwo from "../assets/certificate2.png";
import certificateThree from "../assets/bg2.JPEG";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-linear-to-br from-neutral-50 to-neutral-100"
    >
      <div className="font-main max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-accent-950 mb-6">
            За <span className="text-primary-500">нас</span>
          </h2>
          <p className="text-xl text-neutral-800 max-w-3xl mx-auto leading-relaxed">
            Добре дошли в{" "}
            <span className="text-primary-500">AutoAura Detailing Studio</span>{" "}
            – мястото, където автомобилът ви възвръща своята истинска
            <span className="text-primary-500"> аура</span>.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-neutral-700 leading-relaxed">
                С повече от 5 години опит в света на професионалния детайлинг,
                ние съчетаваме прецизност, знания и безкомпромисно качество.
                <br />
                <br />
                Преминахме редица обучения в GK Autodetailing Academy и
                продължаваме да надграждаме , за да гарантираме внимание към
                всеки детайл и безупречен резултат.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Работим единствено с качествени продукти като Nanolex Germany,
                което ни позволява да осигурим перфектна защита и огледален
                блясък. Всеки автомобил напуска студиото ни с аура на
                съвършенство — чист, защитен и готов да впечатлява.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={cardImg}
                alt="Professional car detailing"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-accent-950/20 to-transparent"></div>
            </div>
          </div>
        </div>
        <hr className="py-5" />
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={certificateOne} className="object-bottom" />
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={certificateTwo} className="object-contain" />
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={certificateThree} className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
