import { SOCIAL_ICONS } from "./socialIcons";

const SocialIcon = ({ iconName }) => (
  <svg
    className="w-6 h-6 text-accent-950"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d={SOCIAL_ICONS[iconName]} />
  </svg>
);

export default function ContactSocials() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl">
      <h3 className="text-3xl font-bold text-accent-950 mb-8">Последвай ни</h3>
      <div className="flex space-x-4">
        <a
          href="#"
          className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center hover:bg-primary-400 transition-all duration-300 transform hover:scale-110"
        >
          <SocialIcon iconName="twitter" />
        </a>
        <a
          href="#"
          className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center hover:bg-primary-400 transition-all duration-300 transform hover:scale-110"
        >
          <SocialIcon iconName="facebook" />
        </a>
        <a
          href="#"
          className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center hover:bg-primary-400 transition-all duration-300 transform hover:scale-110"
        >
          <SocialIcon iconName="instagram" />
        </a>
      </div>
    </div>
  );
}
