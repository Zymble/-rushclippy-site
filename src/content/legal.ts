import type { Locale } from '../config/routes';

/**
 * Legal pages. Base text written from what the site and apps actually do (see the PR that added it).
 * Status: base text pending legal review. Placeholders: {controller}, {email}.
 * When a fact changes (new processor, new cookie, video upload, payments), update every locale and
 * bump site.legalUpdated.
 */
export type LegalId = 'legal/privacy' | 'legal/cookies' | 'legal/terms' | 'legal/acceptable-use';
export type Block = string | { list: string[] } | { table: { head: string[]; rows: string[][] } };
export interface LegalDoc {
  title: string;
  description: string;
  intro: string;
  sections: { h: string; blocks: Block[] }[];
}

export const legalUi: Record<
  Locale,
  { updated: string; review: string; contents: string; contact: string; noEmail: string }
> = {
  en: {
    updated: 'Last updated',
    review: 'This text is in legal review and may be adjusted. Material changes will be announced.',
    contents: 'On this page',
    contact: 'Questions or requests',
    noEmail: 'the contact channel listed on this site',
  },
  'pt-br': {
    updated: 'Atualizado em',
    review:
      'Este texto está em revisão jurídica e pode ser ajustado. Mudanças importantes serão avisadas.',
    contents: 'Nesta página',
    contact: 'Dúvidas ou pedidos',
    noEmail: 'o canal de contato indicado neste site',
  },
  es: {
    updated: 'Actualizado el',
    review:
      'Este texto está en revisión legal y puede ajustarse. Avisaremos de los cambios importantes.',
    contents: 'En esta página',
    contact: 'Dudas o solicitudes',
    noEmail: 'el canal de contacto indicado en este sitio',
  },
};

export const legalDocs: Record<LegalId, Record<Locale, LegalDoc>> = {
  // ------------------------------------------------------------------ privacy
  'legal/privacy': {
    'pt-br': {
      title: 'Política de privacidade',
      description:
        'Quais dados o RushClippy coleta no site, na conta e nos apps para Windows, para que usa, com quem compartilha e como exercer seus direitos (LGPD e GDPR).',
      intro:
        'Esta política explica como o RushClippy trata dados pessoais no site, na conta RushClippy (painel na web) e nos apps para Windows (RushClippy Studio e RushClippy Clipper). Escrevemos do jeito mais direto possível.',
      sections: [
        {
          h: 'Quem é o responsável',
          blocks: [
            '{controller} é o controlador dos dados pessoais descritos aqui. Para qualquer assunto de privacidade, inclusive pedidos de titular, fale com a gente em {email}.',
          ],
        },
        {
          h: 'Que dados coletamos',
          blocks: [
            'Lista de acesso antecipado:',
            {
              list: [
                'e-mail;',
                'perfil (streamer ou clipador), plataforma e link do canal, quando você informa;',
                'idioma da página;',
                'origem da visita (etiquetas de campanha UTM e, se você aceitar cookies de análise, o cookie de origem descrito na Política de cookies);',
                'registro do seu consentimento e da confirmação por e-mail.',
              ],
            },
            'Conta RushClippy (painel e apps):',
            {
              list: [
                'e-mail, nome de usuário (@) e nome de exibição;',
                'senha: guardamos só uma versão criptografada (hash), nunca a senha em si;',
                'equipes, convites e papéis (dono, administrador, criador, clipador);',
                'dados que você envia para a sua equipe: títulos de projetos e cortes, trechos de transcrição dos momentos e comentários de revisão;',
                'computadores conectados: nome do aparelho e um código de acesso guardado criptografado.',
              ],
            },
            'Apps para Windows (Studio e Clipper):',
            {
              list: [
                'vídeos, gravações e cortes ficam no seu computador. Os apps não enviam seus vídeos para os nossos servidores;',
                'para você entrar, o app confirma a sua conta na nossa nuvem; e, para se atualizar, consulta o nosso site e baixa as atualizações do GitHub;',
                'se você conectar uma conta do TikTok, a autorização fica guardada no seu computador, e um vídeo só é enviado ao TikTok quando você manda publicar.',
              ],
            },
            'Navegação no site:',
            {
              list: [
                'dados técnicos que todo servidor recebe (endereço IP, navegador, página acessada, data e hora), nos registros da hospedagem;',
                'se você aceitar cookies de análise: Google Analytics (páginas vistas, país e cidade aproximados, tipo de aparelho e de onde veio a visita).',
              ],
            },
          ],
        },
        {
          h: 'Para que usamos e com qual base legal',
          blocks: [
            {
              table: {
                head: ['Uso', 'Base legal (LGPD, art. 7º)'],
                rows: [
                  ['Enviar a confirmação da lista e avisar quando o acesso abrir', 'Consentimento'],
                  ['Criar e manter a sua conta, login, equipes e convites', 'Execução de contrato'],
                  ['Bloquear robôs, abusos e excesso de tentativas', 'Legítimo interesse'],
                  [
                    'Entender o uso do site e de onde vêm os visitantes',
                    'Consentimento (cookies de análise)',
                  ],
                  ['Cumprir obrigações legais e responder a autoridades', 'Obrigação legal'],
                ],
              },
            },
            'Não vendemos dados pessoais e não usamos seus dados para publicidade personalizada.',
          ],
        },
        {
          h: 'Com quem compartilhamos',
          blocks: [
            'Usamos fornecedores que tratam dados em nosso nome, só para o que está descrito aqui:',
            {
              list: [
                'Vercel: hospedagem do site, do painel e da nuvem da conta;',
                'Supabase: banco de dados da conta, com servidores em São Paulo (Brasil);',
                'Resend: envio dos e-mails da lista de acesso antecipado;',
                'Cloudflare (Turnstile): verificação anti-robô no formulário;',
                'Google (Analytics): estatísticas do site, só com o seu consentimento;',
                'GitHub: hospeda os instaladores e as atualizações dos apps (ao baixar, o GitHub recebe o seu IP).',
              ],
            },
            'Plataformas que você conecta por conta própria (TikTok, YouTube, Twitch, Kick) tratam os dados conforme as políticas delas. Também podemos compartilhar dados quando a lei exigir.',
          ],
        },
        {
          h: 'Transferência internacional',
          blocks: [
            'Alguns fornecedores ficam fora do Brasil, principalmente nos Estados Unidos. Escolhemos fornecedores que adotam cláusulas contratuais e medidas de segurança compatíveis com a LGPD (art. 33) e com o GDPR.',
          ],
        },
        {
          h: 'Por quanto tempo guardamos',
          blocks: [
            {
              list: [
                'lista de acesso antecipado: até você sair dela (link em todo e-mail) ou até 12 meses depois do lançamento;',
                'conta: enquanto ela estiver ativa. Depois de um pedido de exclusão, apagamos em até 30 dias, salvo o que a lei obrigar a guardar;',
                'registros técnicos da hospedagem: pelo prazo do fornecedor;',
                'Google Analytics: no máximo 14 meses.',
              ],
            },
          ],
        },
        {
          h: 'Seus direitos',
          blocks: [
            'Pela LGPD (art. 18) e, para quem está na União Europeia, pelo GDPR, você pode pedir:',
            {
              list: [
                'confirmação de que tratamos seus dados e acesso a eles;',
                'correção de dados incompletos ou errados;',
                'anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desacordo com a lei;',
                'portabilidade;',
                'eliminação dos dados tratados com base no consentimento, e informação sobre com quem compartilhamos;',
                'revogação do consentimento a qualquer momento (para cookies, use "Preferências de cookies" no rodapé);',
                'oposição a um tratamento.',
              ],
            },
            'Para pedir, escreva para {email}. Respondemos em até 15 dias. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD), em gov.br/anpd, ou à autoridade do seu país.',
          ],
        },
        {
          h: 'Segurança',
          blocks: [
            {
              list: [
                'todas as páginas usam conexão criptografada (HTTPS);',
                'senhas e códigos de acesso são guardados só em forma criptografada (hash);',
                'as atualizações dos apps são assinadas digitalmente e o app recusa qualquer arquivo que não tenha a nossa assinatura;',
                'o acesso aos dados é restrito a quem precisa dele para operar o serviço.',
              ],
            },
            'Nenhum sistema é totalmente imune a falhas. Se acontecer um incidente que traga risco a você, avisaremos você e a ANPD conforme a lei.',
          ],
        },
        {
          h: 'Menores de idade',
          blocks: [
            'O RushClippy é destinado a maiores de 18 anos. Não coletamos de propósito dados de menores; se isso acontecer, apagamos assim que soubermos.',
          ],
        },
        {
          h: 'Mudanças nesta política',
          blocks: [
            'A data da última atualização fica no topo da página. Mudanças importantes serão avisadas por e-mail ou com destaque no site antes de valerem.',
          ],
        },
      ],
    },
    en: {
      title: 'Privacy policy',
      description:
        'What data RushClippy collects on the site, in your account and in the Windows apps, why, who we share it with and how to exercise your rights (GDPR, CCPA, LGPD).',
      intro:
        'This policy explains how RushClippy handles personal data on the website, in your RushClippy account (web panel) and in the Windows apps (RushClippy Studio and RushClippy Clipper). We kept it as plain as we could.',
      sections: [
        {
          h: 'Who is responsible',
          blocks: [
            '{controller} is the controller of the personal data described here. For any privacy matter, including data subject requests, contact us at {email}.',
          ],
        },
        {
          h: 'What we collect',
          blocks: [
            'Early access list:',
            {
              list: [
                'email address;',
                'profile (streamer or clipper), platform and channel link, when you provide them;',
                'page language;',
                'where the visit came from (UTM campaign tags and, if you accept analytics cookies, the origin cookie described in the Cookie policy);',
                'a record of your consent and of the email confirmation.',
              ],
            },
            'RushClippy account (panel and apps):',
            {
              list: [
                'email address, username (@) and display name;',
                'password: we only store a hashed version, never the password itself;',
                'teams, invites and roles (owner, admin, creator, clipper);',
                'data you send to your team: project and clip titles, transcript excerpts of the moments and review comments;',
                'connected computers: device name and an access code stored hashed.',
              ],
            },
            'Windows apps (Studio and Clipper):',
            {
              list: [
                'videos, recordings and clips stay on your computer. The apps do not upload your videos to our servers;',
                'to sign you in, the app checks your account with our cloud; to update itself, it checks our website and downloads updates from GitHub;',
                'if you connect a TikTok account, the authorization stays on your computer, and a video is only sent to TikTok when you choose to post it.',
              ],
            },
            'Browsing the site:',
            {
              list: [
                'technical data every server receives (IP address, browser, requested page, date and time), in the hosting logs;',
                'if you accept analytics cookies: Google Analytics (pages viewed, approximate country and city, device type and where the visit came from).',
              ],
            },
          ],
        },
        {
          h: 'Why we use it and on what legal basis',
          blocks: [
            {
              table: {
                head: ['Purpose', 'Legal basis'],
                rows: [
                  ['Send the waitlist confirmation and tell you when access opens', 'Consent'],
                  ['Create and run your account, sign-in, teams and invites', 'Contract'],
                  ['Block bots, abuse and excessive attempts', 'Legitimate interest'],
                  [
                    'Understand how the site is used and where visitors come from',
                    'Consent (analytics cookies)',
                  ],
                  ['Comply with the law and answer authorities', 'Legal obligation'],
                ],
              },
            },
            'We do not sell personal data, and we do not use it for personalized advertising. We do not "sell" or "share" personal information as those terms are defined in the California Consumer Privacy Act.',
          ],
        },
        {
          h: 'Who we share it with',
          blocks: [
            'We use providers that process data on our behalf, only for what is described here:',
            {
              list: [
                'Vercel: hosting of the website, the panel and the account cloud;',
                'Supabase: account database, with servers in São Paulo (Brazil);',
                'Resend: sending the early access emails;',
                'Cloudflare (Turnstile): bot check on the signup form;',
                'Google (Analytics): site statistics, only with your consent;',
                'GitHub: hosts the app installers and updates (when you download, GitHub receives your IP address).',
              ],
            },
            'Platforms you connect yourself (TikTok, YouTube, Twitch, Kick) handle data under their own policies. We may also share data when the law requires it.',
          ],
        },
        {
          h: 'International transfers',
          blocks: [
            'Some providers are located outside your country, mainly in the United States and Brazil. We choose providers that use contractual clauses and security measures recognized by the GDPR and the LGPD.',
          ],
        },
        {
          h: 'How long we keep it',
          blocks: [
            {
              list: [
                'early access list: until you leave it (link in every email) or up to 12 months after launch;',
                'account: while it is active. After a deletion request we delete it within 30 days, except what the law requires us to keep;',
                'hosting technical logs: for the provider’s retention period;',
                'Google Analytics: at most 14 months.',
              ],
            },
          ],
        },
        {
          h: 'Your rights',
          blocks: [
            'Depending on where you live (GDPR, UK GDPR, California and other US state laws, LGPD), you can ask to:',
            {
              list: [
                'know whether we process your data and get a copy;',
                'correct incomplete or wrong data;',
                'delete your data;',
                'receive your data in a portable format;',
                'withdraw consent at any time (for cookies, use "Cookie preferences" in the footer);',
                'object to or restrict a processing activity.',
              ],
            },
            'To make a request, email {email}. We reply within 15 days and will not treat you differently for using your rights. You can also complain to your local data protection authority.',
          ],
        },
        {
          h: 'Security',
          blocks: [
            {
              list: [
                'every page uses an encrypted connection (HTTPS);',
                'passwords and access codes are only stored hashed;',
                'app updates are digitally signed, and the apps refuse any file without our signature;',
                'access to data is limited to the people who need it to run the service.',
              ],
            },
            'No system is immune to failures. If an incident puts you at risk, we will notify you and the authorities as the law requires.',
          ],
        },
        {
          h: 'Children',
          blocks: [
            'RushClippy is meant for people 18 and older. We do not knowingly collect data from minors; if that happens, we delete it as soon as we find out.',
          ],
        },
        {
          h: 'Changes to this policy',
          blocks: [
            'The last update date is at the top of the page. Material changes will be announced by email or prominently on the site before they take effect.',
          ],
        },
      ],
    },
    es: {
      title: 'Política de privacidad',
      description:
        'Qué datos recoge RushClippy en el sitio, en la cuenta y en las apps para Windows, para qué, con quién los comparte y cómo ejercer tus derechos (RGPD y LGPD).',
      intro:
        'Esta política explica cómo RushClippy trata datos personales en el sitio web, en la cuenta RushClippy (panel web) y en las apps para Windows (RushClippy Studio y RushClippy Clipper). La escribimos de la forma más directa posible.',
      sections: [
        {
          h: 'Quién es el responsable',
          blocks: [
            '{controller} es el responsable de los datos personales descritos aquí. Para cualquier tema de privacidad, incluidas las solicitudes de los titulares, escríbenos a {email}.',
          ],
        },
        {
          h: 'Qué datos recogemos',
          blocks: [
            'Lista de acceso anticipado:',
            {
              list: [
                'correo electrónico;',
                'perfil (streamer o clipper), plataforma y enlace del canal, cuando los indicas;',
                'idioma de la página;',
                'origen de la visita (etiquetas de campaña UTM y, si aceptas cookies de análisis, la cookie de origen descrita en la Política de cookies);',
                'registro de tu consentimiento y de la confirmación por correo.',
              ],
            },
            'Cuenta RushClippy (panel y apps):',
            {
              list: [
                'correo, nombre de usuario (@) y nombre visible;',
                'contraseña: solo guardamos una versión cifrada (hash), nunca la contraseña;',
                'equipos, invitaciones y roles (dueño, administrador, creador, clipper);',
                'datos que envías a tu equipo: títulos de proyectos y cortes, fragmentos de transcripción de los momentos y comentarios de revisión;',
                'computadoras conectadas: nombre del equipo y un código de acceso guardado cifrado.',
              ],
            },
            'Apps para Windows (Studio y Clipper):',
            {
              list: [
                'los videos, grabaciones y cortes se quedan en tu computadora. Las apps no suben tus videos a nuestros servidores;',
                'para iniciar sesión, la app confirma tu cuenta en nuestra nube; para actualizarse, consulta nuestro sitio y descarga las actualizaciones desde GitHub;',
                'si conectas una cuenta de TikTok, la autorización se guarda en tu computadora, y un video solo se envía a TikTok cuando decides publicarlo.',
              ],
            },
            'Navegación en el sitio:',
            {
              list: [
                'datos técnicos que todo servidor recibe (dirección IP, navegador, página visitada, fecha y hora), en los registros del alojamiento;',
                'si aceptas cookies de análisis: Google Analytics (páginas vistas, país y ciudad aproximados, tipo de dispositivo y de dónde vino la visita).',
              ],
            },
          ],
        },
        {
          h: 'Para qué los usamos y con qué base legal',
          blocks: [
            {
              table: {
                head: ['Uso', 'Base legal'],
                rows: [
                  [
                    'Enviar la confirmación de la lista y avisarte cuando abra el acceso',
                    'Consentimiento',
                  ],
                  [
                    'Crear y mantener tu cuenta, inicio de sesión, equipos e invitaciones',
                    'Ejecución de contrato',
                  ],
                  ['Bloquear bots, abusos y exceso de intentos', 'Interés legítimo'],
                  [
                    'Entender el uso del sitio y de dónde vienen los visitantes',
                    'Consentimiento (cookies de análisis)',
                  ],
                  ['Cumplir obligaciones legales y responder a autoridades', 'Obligación legal'],
                ],
              },
            },
            'No vendemos datos personales ni los usamos para publicidad personalizada.',
          ],
        },
        {
          h: 'Con quién los compartimos',
          blocks: [
            'Usamos proveedores que tratan datos en nuestro nombre, solo para lo descrito aquí:',
            {
              list: [
                'Vercel: alojamiento del sitio, del panel y de la nube de la cuenta;',
                'Supabase: base de datos de la cuenta, con servidores en São Paulo (Brasil);',
                'Resend: envío de los correos de la lista de acceso anticipado;',
                'Cloudflare (Turnstile): verificación anti-bots en el formulario;',
                'Google (Analytics): estadísticas del sitio, solo con tu consentimiento;',
                'GitHub: aloja los instaladores y las actualizaciones de las apps (al descargar, GitHub recibe tu IP).',
              ],
            },
            'Las plataformas que conectas por tu cuenta (TikTok, YouTube, Twitch, Kick) tratan los datos según sus propias políticas. También podemos compartir datos cuando la ley lo exija.',
          ],
        },
        {
          h: 'Transferencias internacionales',
          blocks: [
            'Algunos proveedores están fuera de tu país, principalmente en Estados Unidos y Brasil. Elegimos proveedores que aplican cláusulas contractuales y medidas de seguridad reconocidas por el RGPD y la LGPD.',
          ],
        },
        {
          h: 'Cuánto tiempo los guardamos',
          blocks: [
            {
              list: [
                'lista de acceso anticipado: hasta que salgas de ella (enlace en cada correo) o hasta 12 meses después del lanzamiento;',
                'cuenta: mientras esté activa. Tras una solicitud de eliminación, la borramos en un máximo de 30 días, salvo lo que la ley obligue a conservar;',
                'registros técnicos del alojamiento: durante el plazo del proveedor;',
                'Google Analytics: como máximo 14 meses.',
              ],
            },
          ],
        },
        {
          h: 'Tus derechos',
          blocks: [
            'Según dónde vivas (RGPD, LGPD u otras leyes locales), puedes pedir:',
            {
              list: [
                'saber si tratamos tus datos y obtener una copia;',
                'corregir datos incompletos o incorrectos;',
                'eliminar tus datos;',
                'recibir tus datos en un formato portable;',
                'retirar tu consentimiento en cualquier momento (para cookies, usa "Preferencias de cookies" en el pie de página);',
                'oponerte a un tratamiento o pedir que se limite.',
              ],
            },
            'Para solicitarlo, escribe a {email}. Respondemos en un máximo de 15 días. También puedes reclamar ante la autoridad de protección de datos de tu país.',
          ],
        },
        {
          h: 'Seguridad',
          blocks: [
            {
              list: [
                'todas las páginas usan conexión cifrada (HTTPS);',
                'las contraseñas y los códigos de acceso solo se guardan cifrados (hash);',
                'las actualizaciones de las apps están firmadas digitalmente y las apps rechazan cualquier archivo sin nuestra firma;',
                'el acceso a los datos se limita a quienes lo necesitan para operar el servicio.',
              ],
            },
            'Ningún sistema es inmune a fallos. Si un incidente te pone en riesgo, te avisaremos a ti y a las autoridades según la ley.',
          ],
        },
        {
          h: 'Menores de edad',
          blocks: [
            'RushClippy está pensado para mayores de 18 años. No recogemos a propósito datos de menores; si ocurre, los borramos en cuanto lo sepamos.',
          ],
        },
        {
          h: 'Cambios en esta política',
          blocks: [
            'La fecha de la última actualización aparece arriba. Avisaremos de los cambios importantes por correo o de forma destacada en el sitio antes de que entren en vigor.',
          ],
        },
      ],
    },
  },

  // ------------------------------------------------------------------ cookies
  'legal/cookies': {
    'pt-br': {
      title: 'Política de cookies',
      description:
        'Quais cookies o site do RushClippy usa, para que servem, quanto tempo duram e como mudar a sua escolha.',
      intro:
        'Cookies são pequenos arquivos que o site guarda no seu navegador. Usamos só o necessário pro site funcionar e, se você aceitar, cookies de análise. Nada é usado pra anúncio.',
      sections: [
        {
          h: 'Cookies que usamos',
          blocks: [
            {
              table: {
                head: ['Nome', 'Para que serve', 'Tipo', 'Duração'],
                rows: [
                  ['cr_consent', 'Guarda a sua escolha de cookies', 'Essencial', '12 meses'],
                  [
                    'cr-theme (armazenamento local)',
                    'Lembra se você escolheu o tema claro ou escuro',
                    'Essencial (preferência)',
                    'Até você limpar o navegador',
                  ],
                  [
                    'Cloudflare Turnstile',
                    'Verifica que quem preenche o formulário não é um robô',
                    'Essencial',
                    'Sessão',
                  ],
                  [
                    'cr_src',
                    'Origem da visita: etiqueta de campanha (UTM), site que indicou e página de entrada. Vai junto se você entrar na lista',
                    'Análise (só com consentimento)',
                    '90 dias',
                  ],
                  [
                    '_ga, _ga_<ID>',
                    'Google Analytics: separa uma visita da outra para contar páginas vistas, país aproximado e origem',
                    'Análise (só com consentimento)',
                    'Até 2 anos',
                  ],
                ],
              },
            },
          ],
        },
        {
          h: 'Como funciona o consentimento',
          blocks: [
            'Na primeira visita, os cookies de análise ficam desligados. O Google Analytics só é carregado depois que você clica em "Aceitar todos" ou liga "Análise e origem" em "Personalizar". Usamos o modo de consentimento do Google: enquanto você não aceita, ele fica bloqueado.',
          ],
        },
        {
          h: 'Como mudar a sua escolha',
          blocks: [
            'A qualquer momento, clique em "Preferências de cookies" no rodapé de qualquer página. Se você desligar a análise, apagamos o cookie de origem e os cookies do Google Analytics. Você também pode apagar cookies nas configurações do seu navegador.',
          ],
        },
        {
          h: 'Mais informações',
          blocks: [
            'Como tratamos os dados coletados por esses cookies está na Política de privacidade. Dúvidas: {email}.',
          ],
        },
      ],
    },
    en: {
      title: 'Cookie policy',
      description:
        'Which cookies the RushClippy website uses, what they do, how long they last and how to change your choice.',
      intro:
        'Cookies are small files a website stores in your browser. We only use what the site needs to work and, if you accept, analytics cookies. Nothing is used for ads.',
      sections: [
        {
          h: 'Cookies we use',
          blocks: [
            {
              table: {
                head: ['Name', 'What it does', 'Type', 'Duration'],
                rows: [
                  ['cr_consent', 'Remembers your cookie choice', 'Essential', '12 months'],
                  [
                    'cr-theme (local storage)',
                    'Remembers whether you picked the light or dark theme',
                    'Essential (preference)',
                    'Until you clear your browser',
                  ],
                  [
                    'Cloudflare Turnstile',
                    'Checks that whoever fills in the form is not a bot',
                    'Essential',
                    'Session',
                  ],
                  [
                    'cr_src',
                    'Where the visit came from: campaign tag (UTM), referring site and landing page. Sent along if you join the list',
                    'Analytics (consent only)',
                    '90 days',
                  ],
                  [
                    '_ga, _ga_<ID>',
                    'Google Analytics: tells visits apart to count page views, approximate country and source',
                    'Analytics (consent only)',
                    'Up to 2 years',
                  ],
                ],
              },
            },
          ],
        },
        {
          h: 'How consent works',
          blocks: [
            'On your first visit, analytics cookies are off. Google Analytics only loads after you click "Accept all" or turn on "Analytics and origin" under "Customize". We use Google Consent Mode: until you accept, it stays blocked.',
          ],
        },
        {
          h: 'How to change your choice',
          blocks: [
            'Anytime, click "Cookie preferences" in the footer of any page. If you turn analytics off, we delete the origin cookie and the Google Analytics cookies. You can also delete cookies in your browser settings.',
          ],
        },
        {
          h: 'More information',
          blocks: [
            'How we handle the data these cookies collect is in the Privacy policy. Questions: {email}.',
          ],
        },
      ],
    },
    es: {
      title: 'Política de cookies',
      description:
        'Qué cookies usa el sitio de RushClippy, para qué sirven, cuánto duran y cómo cambiar tu elección.',
      intro:
        'Las cookies son pequeños archivos que el sitio guarda en tu navegador. Solo usamos lo necesario para que el sitio funcione y, si aceptas, cookies de análisis. Nada se usa para anuncios.',
      sections: [
        {
          h: 'Cookies que usamos',
          blocks: [
            {
              table: {
                head: ['Nombre', 'Para qué sirve', 'Tipo', 'Duración'],
                rows: [
                  ['cr_consent', 'Guarda tu elección de cookies', 'Esencial', '12 meses'],
                  [
                    'cr-theme (almacenamiento local)',
                    'Recuerda si elegiste el tema claro u oscuro',
                    'Esencial (preferencia)',
                    'Hasta que borres el navegador',
                  ],
                  [
                    'Cloudflare Turnstile',
                    'Comprueba que quien llena el formulario no es un bot',
                    'Esencial',
                    'Sesión',
                  ],
                  [
                    'cr_src',
                    'Origen de la visita: etiqueta de campaña (UTM), sitio que te envió y página de entrada. Se envía si te unes a la lista',
                    'Análisis (solo con consentimiento)',
                    '90 días',
                  ],
                  [
                    '_ga, _ga_<ID>',
                    'Google Analytics: distingue visitas para contar páginas vistas, país aproximado y origen',
                    'Análisis (solo con consentimiento)',
                    'Hasta 2 años',
                  ],
                ],
              },
            },
          ],
        },
        {
          h: 'Cómo funciona el consentimiento',
          blocks: [
            'En tu primera visita, las cookies de análisis están desactivadas. Google Analytics solo se carga después de que haces clic en "Aceptar todas" o activas "Análisis y origen" en "Personalizar". Usamos el modo de consentimiento de Google: mientras no aceptes, queda bloqueado.',
          ],
        },
        {
          h: 'Cómo cambiar tu elección',
          blocks: [
            'En cualquier momento, haz clic en "Preferencias de cookies" en el pie de cualquier página. Si desactivas el análisis, borramos la cookie de origen y las cookies de Google Analytics. También puedes borrar cookies en la configuración de tu navegador.',
          ],
        },
        {
          h: 'Más información',
          blocks: [
            'Cómo tratamos los datos que recogen estas cookies está en la Política de privacidad. Dudas: {email}.',
          ],
        },
      ],
    },
  },

  // ------------------------------------------------------------------ terms
  'legal/terms': {
    'pt-br': {
      title: 'Termos de uso',
      description:
        'As regras para usar o site, a conta RushClippy e os apps RushClippy Studio e RushClippy Clipper durante o beta.',
      intro:
        'Estes termos valem para o site, a conta RushClippy (painel na web) e os apps para Windows (RushClippy Studio e RushClippy Clipper). Ao criar uma conta ou usar os apps, você concorda com eles e com a Política de privacidade.',
      sections: [
        {
          h: 'O serviço está em beta',
          blocks: [
            'O RushClippy está em acesso antecipado. Recursos podem mudar, ficar instáveis ou sair do ar enquanto melhoramos o produto. O beta é gratuito. Se no futuro houver planos pagos, eles serão anunciados com antecedência e nada será cobrado sem você contratar.',
          ],
        },
        {
          h: 'Quem pode usar',
          blocks: [
            'Você precisa ter 18 anos ou mais e capacidade para aceitar estes termos. Se usar em nome de uma empresa ou equipe, você declara que tem autorização para isso.',
          ],
        },
        {
          h: 'Sua conta',
          blocks: [
            'Mantenha seus dados de acesso em segredo e as informações da conta corretas. Você é responsável pelo que acontece na sua conta. Se perceber acesso indevido, troque a senha e avise a gente em {email}.',
          ],
        },
        {
          h: 'Os apps para Windows',
          blocks: [
            'Concedemos a você uma licença pessoal, não exclusiva e revogável para instalar e usar os apps. Os apps se atualizam sozinhos; manter a versão atual faz parte do uso. O RushClippy Studio inclui componentes de código aberto, como o motor do OBS, que seguem as licenças deles (por exemplo, GPL-2.0); nada nestes termos limita os direitos que essas licenças dão a você.',
          ],
        },
        {
          h: 'Seu conteúdo',
          blocks: [
            'Os vídeos, cortes e textos continuam sendo seus. Você nos dá apenas a permissão necessária para operar o serviço: processar no seu computador e guardar na nuvem os dados descritos na Política de privacidade, como títulos e comentários que você envia para a sua equipe.',
            'Você garante que tem os direitos ou a autorização do dono para cada conteúdo que usa no RushClippy, incluindo lives e vídeos de terceiros.',
          ],
        },
        {
          h: 'Plataformas de terceiros',
          blocks: [
            'Quando você conecta ou publica no TikTok, YouTube, Twitch, Kick ou outras plataformas, também precisa seguir as regras delas. Não controlamos essas plataformas nem respondemos pelas decisões delas, como remoção de conteúdo ou suspensão de contas.',
          ],
        },
        {
          h: 'Sem promessa de resultado',
          blocks: [
            'O RushClippy sugere momentos e cortes; quem decide o que publicar é você. Não garantimos visualizações, seguidores, ganhos ou viralização.',
          ],
        },
        {
          h: 'Uso permitido',
          blocks: [
            'O uso do RushClippy precisa seguir a Política de uso aceitável. Podemos suspender ou encerrar contas que a violem, que coloquem outras pessoas em risco ou que sejam usadas para fraude.',
          ],
        },
        {
          h: 'Responsabilidade',
          blocks: [
            'Fornecemos o serviço do jeito que ele está durante o beta, com esforço razoável para que funcione bem e com segurança. Na medida permitida pela lei, não respondemos por perdas indiretas, como lucros cessantes ou perda de oportunidade. Nada nestes termos afasta direitos que o Código de Defesa do Consumidor garante a você.',
          ],
        },
        {
          h: 'Encerramento',
          blocks: [
            'Você pode parar de usar e pedir a exclusão da conta a qualquer momento, pelo e-mail {email}. Se encerrarmos o serviço, avisaremos com antecedência razoável.',
          ],
        },
        {
          h: 'Mudanças e lei aplicável',
          blocks: [
            'Podemos atualizar estes termos; a data fica no topo e mudanças importantes serão avisadas antes de valerem. Estes termos seguem a lei brasileira. Para consumidores, vale o foro do seu domicílio.',
          ],
        },
      ],
    },
    en: {
      title: 'Terms of service',
      description:
        'The rules for using the website, your RushClippy account and the RushClippy Studio and RushClippy Clipper apps during the beta.',
      intro:
        'These terms cover the website, your RushClippy account (web panel) and the Windows apps (RushClippy Studio and RushClippy Clipper). By creating an account or using the apps, you agree to them and to the Privacy policy.',
      sections: [
        {
          h: 'The service is in beta',
          blocks: [
            'RushClippy is in early access. Features may change, be unstable or go offline while we improve the product. The beta is free. If paid plans come later, they will be announced in advance and nothing will be charged unless you sign up for it.',
          ],
        },
        {
          h: 'Who can use it',
          blocks: [
            'You must be 18 or older and able to accept these terms. If you use RushClippy on behalf of a company or team, you confirm you are authorized to do so.',
          ],
        },
        {
          h: 'Your account',
          blocks: [
            'Keep your sign-in details secret and your account information accurate. You are responsible for what happens in your account. If you notice unauthorized access, change your password and tell us at {email}.',
          ],
        },
        {
          h: 'The Windows apps',
          blocks: [
            'We grant you a personal, non-exclusive, revocable license to install and use the apps. The apps update themselves; staying on the current version is part of using them. RushClippy Studio includes open-source components, such as the OBS engine, under their own licenses (for example GPL-2.0); nothing in these terms limits the rights those licenses give you.',
          ],
        },
        {
          h: 'Your content',
          blocks: [
            'Your videos, clips and text remain yours. You only give us the permission needed to run the service: processing on your computer and storing in the cloud the data described in the Privacy policy, such as titles and comments you send to your team.',
            'You confirm that you own, or have the owner’s permission for, every piece of content you use with RushClippy, including other people’s streams and videos.',
          ],
        },
        {
          h: 'Third-party platforms',
          blocks: [
            'When you connect to or post on TikTok, YouTube, Twitch, Kick or other platforms, you must also follow their rules. We do not control those platforms and are not responsible for their decisions, such as removing content or suspending accounts.',
          ],
        },
        {
          h: 'No guaranteed results',
          blocks: [
            'RushClippy suggests moments and clips; you decide what gets posted. We do not guarantee views, followers, earnings or virality.',
          ],
        },
        {
          h: 'Acceptable use',
          blocks: [
            'Use of RushClippy must follow the Acceptable use policy. We may suspend or close accounts that break it, put other people at risk or are used for fraud.',
          ],
        },
        {
          h: 'Liability',
          blocks: [
            'During the beta we provide the service as it is, with reasonable effort to keep it working well and safely. To the extent the law allows, we are not liable for indirect losses, such as lost profits or opportunities. Nothing in these terms removes rights you have under consumer protection laws.',
          ],
        },
        {
          h: 'Ending',
          blocks: [
            'You can stop using RushClippy and ask us to delete your account at any time by emailing {email}. If we shut the service down, we will give reasonable notice.',
          ],
        },
        {
          h: 'Changes and governing law',
          blocks: [
            'We may update these terms; the date is at the top and material changes will be announced before they take effect. These terms are governed by the laws of Brazil, without prejudice to mandatory consumer protection rules of the country where you live.',
          ],
        },
      ],
    },
    es: {
      title: 'Términos de uso',
      description:
        'Las reglas para usar el sitio, la cuenta RushClippy y las apps RushClippy Studio y RushClippy Clipper durante la beta.',
      intro:
        'Estos términos se aplican al sitio, a la cuenta RushClippy (panel web) y a las apps para Windows (RushClippy Studio y RushClippy Clipper). Al crear una cuenta o usar las apps, aceptas estos términos y la Política de privacidad.',
      sections: [
        {
          h: 'El servicio está en beta',
          blocks: [
            'RushClippy está en acceso anticipado. Las funciones pueden cambiar, ser inestables o dejar de funcionar mientras mejoramos el producto. La beta es gratuita. Si más adelante hay planes de pago, se anunciarán con antelación y no se cobrará nada sin que lo contrates.',
          ],
        },
        {
          h: 'Quién puede usarlo',
          blocks: [
            'Debes tener 18 años o más y capacidad para aceptar estos términos. Si usas RushClippy en nombre de una empresa o equipo, declaras que tienes autorización para hacerlo.',
          ],
        },
        {
          h: 'Tu cuenta',
          blocks: [
            'Mantén en secreto tus datos de acceso y correcta la información de tu cuenta. Eres responsable de lo que pase en tu cuenta. Si notas un acceso indebido, cambia la contraseña y avísanos en {email}.',
          ],
        },
        {
          h: 'Las apps para Windows',
          blocks: [
            'Te damos una licencia personal, no exclusiva y revocable para instalar y usar las apps. Las apps se actualizan solas; usar la versión actual forma parte del uso. RushClippy Studio incluye componentes de código abierto, como el motor de OBS, bajo sus propias licencias (por ejemplo, GPL-2.0); nada en estos términos limita los derechos que esas licencias te dan.',
          ],
        },
        {
          h: 'Tu contenido',
          blocks: [
            'Tus videos, cortes y textos siguen siendo tuyos. Solo nos das el permiso necesario para operar el servicio: procesar en tu computadora y guardar en la nube los datos descritos en la Política de privacidad, como títulos y comentarios que envías a tu equipo.',
            'Garantizas que tienes los derechos, o el permiso del dueño, de cada contenido que usas en RushClippy, incluidos streams y videos de otras personas.',
          ],
        },
        {
          h: 'Plataformas de terceros',
          blocks: [
            'Cuando conectas o publicas en TikTok, YouTube, Twitch, Kick u otras plataformas, también debes seguir sus reglas. No controlamos esas plataformas ni respondemos por sus decisiones, como retirar contenido o suspender cuentas.',
          ],
        },
        {
          h: 'Sin resultados garantizados',
          blocks: [
            'RushClippy sugiere momentos y cortes; tú decides qué se publica. No garantizamos visualizaciones, seguidores, ganancias ni viralidad.',
          ],
        },
        {
          h: 'Uso permitido',
          blocks: [
            'El uso de RushClippy debe seguir la Política de uso aceptable. Podemos suspender o cerrar cuentas que la incumplan, pongan en riesgo a otras personas o se usen para fraude.',
          ],
        },
        {
          h: 'Responsabilidad',
          blocks: [
            'Durante la beta ofrecemos el servicio tal como está, con un esfuerzo razonable para que funcione bien y de forma segura. En la medida que la ley lo permita, no respondemos por pérdidas indirectas, como lucro cesante o pérdida de oportunidades. Nada en estos términos elimina los derechos que te dan las leyes de protección al consumidor.',
          ],
        },
        {
          h: 'Finalización',
          blocks: [
            'Puedes dejar de usar RushClippy y pedir que borremos tu cuenta en cualquier momento escribiendo a {email}. Si cerramos el servicio, avisaremos con una antelación razonable.',
          ],
        },
        {
          h: 'Cambios y ley aplicable',
          blocks: [
            'Podemos actualizar estos términos; la fecha aparece arriba y avisaremos de los cambios importantes antes de que entren en vigor. Estos términos se rigen por las leyes de Brasil, sin perjuicio de las normas de protección al consumidor obligatorias de tu país.',
          ],
        },
      ],
    },
  },

  // ------------------------------------------------------------------ acceptable use
  'legal/acceptable-use': {
    'pt-br': {
      title: 'Política de uso aceitável',
      description: 'O que não é permitido fazer com o RushClippy e o que acontece se alguém fizer.',
      intro:
        'O RushClippy existe para ajudar criadores e clipadores a trabalhar com conteúdo que podem usar. Esta política vale para o site, a conta e os apps.',
      sections: [
        {
          h: 'Não é permitido',
          blocks: [
            {
              list: [
                'cortar, publicar ou distribuir conteúdo sem ter os direitos ou a autorização do dono;',
                'conteúdo ilegal, incluindo qualquer conteúdo sexual envolvendo menores, apologia a crimes ou violência real;',
                'discurso de ódio, assédio, ameaças ou exposição de dados pessoais de outras pessoas;',
                'spam, contas falsas, compra de engajamento ou automação que viole as regras das plataformas;',
                'tentar burlar a segurança, acessar contas ou dados de outras pessoas, sobrecarregar ou atacar o serviço;',
                'descompilar, modificar ou redistribuir os apps fora do que as licenças de código aberto permitem;',
                'usar o RushClippy para fraude ou para enganar pessoas, marcas ou equipes.',
              ],
            },
          ],
        },
        {
          h: 'O que acontece se houver violação',
          blocks: [
            'Dependendo da gravidade, podemos remover dados da nuvem, limitar recursos, suspender ou encerrar a conta, e avisar as autoridades quando a lei exigir.',
          ],
        },
        {
          h: 'Como denunciar',
          blocks: [
            'Viu algo que viola esta política, inclusive uso indevido de um conteúdo seu? Escreva para {email} com o máximo de detalhes que puder.',
          ],
        },
      ],
    },
    en: {
      title: 'Acceptable use policy',
      description: 'What is not allowed on RushClippy and what happens if someone does it.',
      intro:
        'RushClippy exists to help creators and clippers work with content they are allowed to use. This policy covers the website, the account and the apps.',
      sections: [
        {
          h: 'Not allowed',
          blocks: [
            {
              list: [
                'clipping, posting or distributing content without the owner’s rights or permission;',
                'illegal content, including any sexual content involving minors, promotion of crime or real violence;',
                'hate speech, harassment, threats or exposing other people’s personal data;',
                'spam, fake accounts, bought engagement or automation that breaks platform rules;',
                'trying to bypass security, access other people’s accounts or data, overload or attack the service;',
                'decompiling, modifying or redistributing the apps beyond what the open-source licenses allow;',
                'using RushClippy for fraud or to deceive people, brands or teams.',
              ],
            },
          ],
        },
        {
          h: 'What happens if it is broken',
          blocks: [
            'Depending on how serious it is, we may remove data from the cloud, limit features, suspend or close the account, and notify authorities when the law requires it.',
          ],
        },
        {
          h: 'How to report',
          blocks: [
            'Seen something that breaks this policy, including misuse of your own content? Email {email} with as much detail as you can.',
          ],
        },
      ],
    },
    es: {
      title: 'Política de uso aceptable',
      description: 'Qué no está permitido en RushClippy y qué pasa si alguien lo hace.',
      intro:
        'RushClippy existe para ayudar a creadores y clippers a trabajar con contenido que pueden usar. Esta política se aplica al sitio, a la cuenta y a las apps.',
      sections: [
        {
          h: 'No está permitido',
          blocks: [
            {
              list: [
                'cortar, publicar o distribuir contenido sin los derechos o el permiso de su dueño;',
                'contenido ilegal, incluido cualquier contenido sexual que involucre a menores, apología del delito o violencia real;',
                'discurso de odio, acoso, amenazas o exponer datos personales de otras personas;',
                'spam, cuentas falsas, compra de interacciones o automatización que incumpla las reglas de las plataformas;',
                'intentar saltarse la seguridad, acceder a cuentas o datos de otras personas, sobrecargar o atacar el servicio;',
                'descompilar, modificar o redistribuir las apps más allá de lo que permiten las licencias de código abierto;',
                'usar RushClippy para fraude o para engañar a personas, marcas o equipos.',
              ],
            },
          ],
        },
        {
          h: 'Qué pasa si se incumple',
          blocks: [
            'Según la gravedad, podemos eliminar datos de la nube, limitar funciones, suspender o cerrar la cuenta y avisar a las autoridades cuando la ley lo exija.',
          ],
        },
        {
          h: 'Cómo denunciar',
          blocks: [
            '¿Viste algo que incumple esta política, incluido el uso indebido de tu propio contenido? Escribe a {email} con todo el detalle que puedas.',
          ],
        },
      ],
    },
  },
};
