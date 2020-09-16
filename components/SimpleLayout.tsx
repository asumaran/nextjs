import styled from "styled-components";
import Nav from "./Nav";

const Styles = styled.div`
  border: solid 2px #555;
`;

const MinimalLayout: React.FC = ({ children }) => {
  return (
    <Styles>
      <Nav />
      {children}
    </Styles>
  );
};

export default MinimalLayout;

export const getLayout = (page: React.ReactElement) => (
  <MinimalLayout>{page}</MinimalLayout>
);
