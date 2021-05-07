const site = `https://${process.env.VERCEL_URL}`;
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
      },
    ],
  },
};
