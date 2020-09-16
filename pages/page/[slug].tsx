import { useRouter } from "next/router";
import { getLayout } from "../../components/DefaultLayout";

export default function PageSlug() {
  const router = useRouter();

  return <h1>Page Slug {router.query.slug}</h1>;
}

PageSlug.getLayout = getLayout;
