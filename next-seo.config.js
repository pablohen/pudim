/* eslint-disable operator-linebreak */
const site = `https://${process.env.VERCEL_URL}`;
const siteName = 'Pudim';
const description =
  'Uma homenagem a um dos sites mais antigos do Brasil, com algumas das melhores práticas disponíveis no mercado';
const keywords =
  'pudim, receita, lisinho, sem furinhos, leite condensado, leite em pó, tempo de preparo, maizena, air fryer, panela de pressão, forma, diabéticos, milho, brasil, brazil';

export default {
  defaultTitle: siteName,
  titleTemplate: `%s | ${siteName}`,
  description,
  keywords,
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
