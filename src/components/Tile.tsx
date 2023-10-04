// components/Tile.js
import { Box, Image, Text } from '@chakra-ui/react';

interface TileProps {
  text: string;
  isSVG: boolean;
}


const Tile: React.FC<TileProps> = ({ text, isSVG }) => {
  return (
    <Box
      width="200px"
      height="200px"
      borderWidth={isSVG? 0: "2px"}
      borderColor="#A3A3A3"
      backgroundColor="#F8F8F8"
      borderRadius="lg"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"

    >
      {isSVG ? (
        <Image height="200px" width="200px" src="/create-doc.svg" alt="SVG Tile" />
      ) : (
        <Text fontSize="xl">{text}</Text>
      )}
    </Box>
  );
};

export default Tile;
