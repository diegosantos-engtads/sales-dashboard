// app/about/page.tsx
import { metadata } from '@/app/layout';  // Usando o metadata global
import CustomHead from '@/app/components/Head';

export default function About() {
  metadata.title = "Titulo de Sobre Nós";
  metadata.description = "Metadatadresciption da sobre nós";

  return (
    <>
      <CustomHead />
      <h1>Sobre Nós</h1>
    </>
  );
}
