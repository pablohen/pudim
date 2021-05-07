const site = 'https://pudim.pablohen.vercel.app';
const siteName = 'Pudim';
const description = 'Uma homenagem a um dos sites mais antigos do Brasil';

export default {
  defaultTitle: siteName,
  titleTemplate: `%s | ${siteName}`,
  description,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    site_name: siteName,
    description,
    images: [
      {
        url: `${site}/pudim.jpg`,
        width: 640,
        height: 480,
        alt: 'Pudim',
      },
    ],
  },
};
