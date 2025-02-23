import { metadata } from '@/app/layout';
import CustomHead from '@/app/components/Head';

export default function Home() {

  metadata.title = "Titulo da Home page";
  metadata.description = "Metadatadresciption da Home Page";

  return (
    <>
      <CustomHead />
      <h1>Pagina Home</h1>
    </>
  );
}
