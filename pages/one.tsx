import { getPageLayout } from "../components/SubPageLayout";

function One() {
  return <div>This is Page One</div>;
}

One.getLayout = getPageLayout;

export default One;
