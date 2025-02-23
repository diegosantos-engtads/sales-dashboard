import Head from 'next/head';
import { metadata } from '../layout';

const CustomHead: React.FC = () => {

  const title = metadata.title;
  const description = metadata.description;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default CustomHead;
