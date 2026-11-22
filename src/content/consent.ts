import type { Locale } from '../config/routes';

/** Cookie banner and preferences dialog. Written per market (see docs/LOCALIZATION.md). */
export interface ConsentCopy {
  banner: {
    title: string;
    body: string;
    policy: string;
    accept: string;
    reject: string;
    customize: string;
  };
  dialog: {
    title: string;
    body: string;
    necessary: { name: string; desc: string; always: string };
    analytics: { name: string; desc: string };
    save: string;
    acceptAll: string;
    close: string;
  };
  saved: string;
  footerLink: string;
}

export const consentCopy: Record<Locale, ConsentCopy> = {
  en: {
    banner: {
      title: 'Cookies on RushClippy',
      body: 'We use essential cookies to make the site work. With your OK we also use analytics cookies (Google Analytics) to learn which pages help and where visitors come from. You can change this anytime.',
      policy: 'Cookie policy',
      accept: 'Accept all',
      reject: 'Essential only',
      customize: 'Customize',
    },
    dialog: {
      title: 'Cookie preferences',
      body: 'Pick what we can use. Essential cookies stay on because the site needs them.',
      necessary: {
        name: 'Essential',
        desc: 'Remember your cookie choice and protect the signup form from bots.',
        always: 'Always on',
      },
      analytics: {
        name: 'Analytics and origin',
        desc: 'Google Analytics and a RushClippy cookie that records where your visit came from (search, social or campaign link). Nothing is used for ads.',
      },
      save: 'Save choices',
      acceptAll: 'Accept all',
      close: 'Close',
    },
    saved: 'Cookie preferences saved.',
    footerLink: 'Cookie preferences',
  },
  'pt-br': {
    banner: {
      title: 'Cookies no RushClippy',
      body: 'Usamos cookies essenciais pro site funcionar. Com o teu ok, também usamos cookies de análise (Google Analytics) pra entender quais páginas ajudam e de onde vêm os visitantes. Dá pra mudar quando quiser.',
      policy: 'Política de cookies',
      accept: 'Aceitar todos',
      reject: 'Só os essenciais',
      customize: 'Personalizar',
    },
    dialog: {
      title: 'Preferências de cookies',
      body: 'Escolhe o que a gente pode usar. Os essenciais ficam sempre ligados porque o site precisa deles.',
      necessary: {
        name: 'Essenciais',
        desc: 'Lembram a tua escolha de cookies e protegem o formulário de cadastro contra robôs.',
        always: 'Sempre ligados',
      },
      analytics: {
        name: 'Análise e origem',
        desc: 'Google Analytics e um cookie do RushClippy que guarda de onde veio a tua visita (busca, rede social ou link de campanha). Nada é usado pra anúncio.',
      },
      save: 'Salvar escolhas',
      acceptAll: 'Aceitar todos',
      close: 'Fechar',
    },
    saved: 'Preferências de cookies salvas.',
    footerLink: 'Preferências de cookies',
  },
  es: {
    banner: {
      title: 'Cookies en RushClippy',
      body: 'Usamos cookies esenciales para que el sitio funcione. Con tu permiso, también usamos cookies de análisis (Google Analytics) para saber qué páginas ayudan y de dónde vienen los visitantes. Puedes cambiarlo cuando quieras.',
      policy: 'Política de cookies',
      accept: 'Aceptar todas',
      reject: 'Solo las esenciales',
      customize: 'Personalizar',
    },
    dialog: {
      title: 'Preferencias de cookies',
      body: 'Elige qué podemos usar. Las esenciales siempre están activas porque el sitio las necesita.',
      necessary: {
        name: 'Esenciales',
        desc: 'Recuerdan tu elección de cookies y protegen el formulario de registro contra bots.',
        always: 'Siempre activas',
      },
      analytics: {
        name: 'Análisis y origen',
        desc: 'Google Analytics y una cookie de RushClippy que registra de dónde vino tu visita (búsqueda, red social o enlace de campaña). Nada se usa para anuncios.',
      },
      save: 'Guardar elección',
      acceptAll: 'Aceptar todas',
      close: 'Cerrar',
    },
    saved: 'Preferencias de cookies guardadas.',
    footerLink: 'Preferencias de cookies',
  },
};
