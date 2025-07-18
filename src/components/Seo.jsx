import { Helmet } from 'react-helmet';

const Seo = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    {keywords && <meta name="keywords" content={keywords} />}
  </Helmet>
);

export default Seo;
