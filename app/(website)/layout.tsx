import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";

async function sharedMetaData(params) {
  const settings = await getSettings();

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default: settings?.title || "RA Studios",
      template: "%s | Stablo",
    },
    description:
      settings?.description ||
      "Your solution to harnessing the power of AI using Cloud computing",
    keywords: ["AI", "ML", "Cloud"],
    authors: [{ name: "Sambhav Aggarwal" }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src || "/img/opengraph.jpg",
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      title: settings?.title || "Stablo Template",
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      <Navbar {...settings} />

      <div>{children}</div>

      <Footer {...settings} />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
