import { metadata } from '@/app/layout';
import CustomHead from '@/app/components/Head';
import './index.scss'

export default function Home() {

  metadata.title = "Titulo da Home page";
  metadata.description = "Metadatadresciption da Home Page";

  return (
    <>
      <CustomHead />


      <section>
        <h1>textoddddddddddddddddd</h1>
      </section>
    </>
  );
}
