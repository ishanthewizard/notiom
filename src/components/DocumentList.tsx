// components/DocumentList.tsx
import { Flex, Grid, Image } from '@chakra-ui/react';
import Tile from './Tile';
import React from 'react';
import NewDocButton from './NewDocButton';

interface DocumentListProps {
  documents: string[];
}

const DocumentList: React.FC<DocumentListProps> = ({ documents }) => {
  return (
    <Grid
      mt="50px"
      width="95%"
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      gap={6}
    >
      <NewDocButton />
      {documents.map((doc, index) => (
        <Tile text={doc} key={index} />
      ))}
    </Grid>
  );
};

export default DocumentList;
