import type { NextPage, GetStaticProps } from "next";
import { VStack } from "@/shared/ui";

export const getStaticProps: GetStaticProps<{}> = async () => {
  return { props: {} };
};

const Home: NextPage = () => {
  return (
    <VStack align="inherit">
     
    </VStack>
  );
};
export default Home;