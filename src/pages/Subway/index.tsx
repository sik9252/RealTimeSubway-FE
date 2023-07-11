import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { SelectedLineContext } from "../../context/SelectedLineContext";

function Subway() {
  const selectedLine = useContext(SelectedLineContext);

  return (
    <Box w="85%" h="100vh">
      {selectedLine?.selectedLine}
    </Box>
  );
}

export default Subway;
