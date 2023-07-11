import { useState, useContext } from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
import { lineList } from "../../lib/data/line.js";
import { SelectedLineContext } from "../../context/selectedLineContext.js";

function SideMenu() {
  const selectedLineContext = useContext(SelectedLineContext);

  const [line, setLine] = useState(lineList);

  const clickLine = (lineName: string) => {
    selectedLineContext?.selectLine(lineName);
  };

  return (
    <Box w="15%" h="100vh">
      {line.map((line) => (
        <Flex key={line.id} align={"center"} my="5px">
          <img src={line.icon} width="25" height="25" />
          <Button
            height="48px"
            width="100%"
            border="1px"
            colorScheme="gray"
            mx="5px"
            onClick={() => clickLine(line.name)}
          >
            {line.name}
          </Button>
        </Flex>
      ))}
    </Box>
  );
}

export default SideMenu;
