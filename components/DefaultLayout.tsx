import styled from "styled-components";
import Nav from "./Nav";

const Styles = styled.div`
  border: solid 2px red;
`;

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Styles>
      <Nav />
      {children}
    </Styles>
  );
};

export default DefaultLayout;

export const getLayout = (page: React.ReactElement) => (
  <DefaultLayout>{page}</DefaultLayout>
);
