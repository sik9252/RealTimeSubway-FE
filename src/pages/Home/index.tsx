import SideMenu from "../../components/SideMenu";
import Subway from "../Subway";
import { Flex } from "@chakra-ui/react";

function Home() {
  return (
    <Flex p="10px">
      <SideMenu />
      <Subway />
    </Flex>
  );
}

export default Home;
