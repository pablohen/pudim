import { NextSeoProps } from 'next-seo';

const site = `https://${process.env.VERCEL_URL}`;
const siteName = 'Pudim';
const description =
  'Uma homenagem a um dos sites mais antigos do Brasil, com algumas das melhores práticas disponíveis no mercado.';

const nextSeo: NextSeoProps = {
  defaultTitle: `${siteName} | ${description}`,
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

export default nextSeo;
