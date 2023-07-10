import SideMenu from "../../components/SideMenu";
import Subway from "../Subway";
import { Flex } from "@chakra-ui/react";

function Home() {
  return (
    <Flex>
      <SideMenu />
      <Subway />
    </Flex>
  );
}

export default Home;
