import Header from "../components/Header";
import Hero from "../components/Hero";
import Sectors from "../components/Sectors";
import Services from "../components/Services";
import Differentials from "../components/Differentials";
import Process from "../components/Process";
import Quality from "../components/Quality";
import Portfolio from "../components/Portfolio";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import { Helmet } from "@dr.pogodin/react-helmet";

export default function Home() {
  const title = "Bras-Mol | Montagem de Subconjuntos Metálicos e Plásticos";
  const description = "Montagem terceirizada de subconjuntos metálicos e plásticos, molas e estampados, com controle de qualidade, rastreabilidade e processos padronizados.";
  const url = "https://montagem.brasmol.com.br/";
  const ogImage = "https://montagem.brasmol.com.br/og-image.jpg";

  const organizationLdJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bras-Mol Molas e Estampados LTDA",
    "url": url,
    "logo": "https://montagem.brasmol.com.br/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Itaquaquecetuba",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "telephone": "+55 11 4648-2611",
    "email": "vendas@brasmol.com.br"
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        <script type="application/ld+json">
          {JSON.stringify(organizationLdJson)}
        </script>
      </Helmet>

      <Header />
      <Hero />
      <Services />
      <Sectors />
      <Differentials />
      <Process />
      <Quality />
      <Portfolio />
      <ContactCTA />
      <Footer />
    </>
  );
}
