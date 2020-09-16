import styled from "styled-components";
import { getLayout } from "../components/DefaultLayout";

const Title = styled.h1`
  color: #555;
  font-family: sans-serif;
`;

export default function Home() {
  return <Title>Home</Title>;
}

Home.getLayout = getLayout;
