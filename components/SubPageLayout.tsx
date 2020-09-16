import { getLayout as getDefaultLayout } from "./DefaultLayout";

const SubPageLayout: React.FC = ({ children }) => {
  return (
    <div>
      <ul>
        <li>One</li>
        <li>Two</li>
      </ul>
      {children}
    </div>
  );
};

export const getPageLayout = (page: React.ReactElement) =>
  getDefaultLayout(<SubPageLayout>{page}</SubPageLayout>);

export default SubPageLayout;
