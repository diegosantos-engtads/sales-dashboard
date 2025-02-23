// app/about/page.tsx
import { metadata } from '@/app/layout';
import CustomHead from '@/app/components/Head';
import './index.scss'

export default function Home() {
  metadata.title = "Home";
  metadata.description = "Home";

  return (
    <>
      <CustomHead />
      <header>
         <h2>dasdasdsad</h2>
      </header>
    </>
  );
}
