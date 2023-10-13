// components/DocumentList.tsx
import { Flex, Grid, Image } from '@chakra-ui/react';
import Tile from './Tile';
import React, { useState } from 'react';
import NewDocButton from './NewDocButton';

interface DocumentListProps {
  documents: string[];
}

const DocumentList: React.FC<DocumentListProps> = ({ documents }) => {
  const [allDocs, setAllDocs] = useState<string[]>([]);

  const addDoc = (newDoc: string) => {
    setAllDocs((prevDocs) => [...prevDocs, newDoc]);
  };

  const deletetile = (docIndex: number) => {
    setAllDocs((prevDocs) => prevDocs.filter((_, index) => index !== docIndex));
  };
  return (
    <Grid
      mt="50px"
      width="95%"
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      gap={6}
    >
      <NewDocButton addDoc={addDoc} />
      {allDocs.map((doc, index) => (
        <Tile
          text={doc}
          key={index}
          deleteTile={() => {
            deletetile(index);
          }}
        />
      ))}
    </Grid>
  );
};

export default DocumentList;
