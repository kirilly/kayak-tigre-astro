export const languages = {
  en: 'English',
  es: 'Español',
  ru: 'Русский',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Tours',
    'nav.blog': 'Blog',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    // Hero
    'hero.cta': 'Explore Tours',
    'hero.secondary': 'Learn More',

    // Services
    'services.title': 'Our Tours',
    'services.duration': 'Duration',
    'services.price': 'Price',
    'services.minAge': 'Min. Age',
    'services.groupSize': 'Group Size',
    'services.included': "What's Included",
    'services.book': 'Book Now',
    'services.from': 'From',
    'services.person': 'per person',
    'services.hours': 'hours',
    'services.fullDay': 'Full day',

    // Blog
    'blog.title': 'Blog',
    'blog.readMore': 'Read More',
    'blog.publishedOn': 'Published on',

    // About
    'about.title': 'About Us',

    // Contact
    'contact.title': 'Contact Us',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',

    // Footer
    'footer.rights': 'All rights reserved',
    'footer.followUs': 'Follow Us',

    // Common
    'common.loading': 'Loading...',
    'common.adults': 'Adults',
    'common.children': 'Children',
    'common.years': 'years',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Tours',
    'nav.blog': 'Blog',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',

    // Hero
    'hero.cta': 'Ver tours',
    'hero.secondary': 'Conocé más',

    // Services
    'services.title': 'Nuestros Tours',
    'services.duration': 'Duración',
    'services.price': 'Precio',
    'services.minAge': 'Edad Mín.',
    'services.groupSize': 'Tamaño del Grupo',
    'services.included': 'Incluye',
    'services.book': 'Reservá',
    'services.from': 'Desde',
    'services.person': 'por persona',
    'services.hours': 'horas',
    'services.fullDay': 'Día completo',

    // Blog
    'blog.title': 'Blog',
    'blog.readMore': 'Leer más',
    'blog.publishedOn': 'Publicado el',

    // About
    'about.title': 'Sobre Nosotros',

    // Contact
    'contact.title': 'Contactanos',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Correo',

    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.followUs': 'Seguinos',

    // Common
    'common.loading': 'Cargando...',
    'common.adults': 'Adultos',
    'common.children': 'Niños',
    'common.years': 'años',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.services': 'Туры',
    'nav.blog': 'Блог',
    'nav.about': 'О нас',
    'nav.contact': 'Контакты',

    // Hero
    'hero.cta': 'Смотреть туры',
    'hero.secondary': 'Подробнее',

    // Services
    'services.title': 'Наши туры',
    'services.duration': 'Длительность',
    'services.price': 'Цена',
    'services.minAge': 'Мин. возраст',
    'services.groupSize': 'Размер группы',
    'services.included': 'Включено',
    'services.book': 'Забронировать',
    'services.from': 'От',
    'services.person': 'за человека',
    'services.hours': 'часов',
    'services.fullDay': 'Весь день',

    // Blog
    'blog.title': 'Блог',
    'blog.readMore': 'Читать далее',
    'blog.publishedOn': 'Опубликовано',

    // About
    'about.title': 'О нас',

    // Contact
    'contact.title': 'Свяжитесь с нами',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',

    // Footer
    'footer.rights': 'Все права защищены',
    'footer.followUs': 'Мы в соцсетях',

    // Common
    'common.loading': 'Загрузка...',
    'common.adults': 'Взрослые',
    'common.children': 'Дети',
    'common.years': 'лет',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui.en): string {
    return ui[lang][key] || ui.en[key] || key;
  };
}

const BASE_URL = import.meta.env.BASE_URL || '/';

export function getLocalizedPath(path: string, lang: Lang): string {
  const base = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;
  return `${base}/${lang}${path.startsWith('/') ? path : '/' + path}`;
}
