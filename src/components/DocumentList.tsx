// components/DocumentList.tsx
import { Flex, Grid, Image } from '@chakra-ui/react';
import Tile from './Tile';
import React, { useState } from 'react';
import NewDocButton from './NewDocButton';
import { NotiomDoc } from '@/types';
import { create } from 'domain';

interface DocumentListProps {
  documents: NotiomDoc[];
}

const DocumentList: React.FC<DocumentListProps> = ({ documents }) => {
  const [allDocs, setAllDocs] = useState<NotiomDoc[]>(documents);

  const addDoc = async (newDoc: { title: string; body: string }) => {
    try {
      // Construct the new document object
      const docToCreate = {
        user: process.env.NEXT_PUBLIC_USER_NAME, // Make sure this env var is set in your .env.local file
        title: newDoc.title,
        body: newDoc.body,
      };

      // Make the POST request to your API endpoint
      const response = await fetch('/api/createDoc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(docToCreate),
      });

      let createdDoc = await response.json();
      console.log(createdDoc);
      // Update state with the new document returned from the API call
      setAllDocs((prevDocs) => [...prevDocs, createdDoc]);
    } catch (error) {
      // Handle the error state appropriately
      console.error('Failed to create the document:', error);
    }
  };

  const deletetile = async (docId: string) => {
    console.log('HEREEEE!!!');
    console.log(docId);
    try {
      // Make the DELETE request to your API endpoint
      const response = await fetch(`/api/deleteDoc?docId=${docId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('DELETED WORK');
        console.log(docId);
        // Update state to remove the document from the list
        const newDocs = allDocs.filter((doc) => doc._id.toString() !== docId);
        console.log(newDocs);
        setAllDocs(newDocs);
      } else {
        // Handle any errors if the API request was not successful
        console.error('Failed to delete the document');
      }
    } catch (error) {
      // Handle the error state appropriately
      console.error('There was an error deleting the document:', error);
    }
  };

  return (
    <Grid
      mt="50px"
      width="95%"
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      gap={6}
    >
      <NewDocButton addDoc={addDoc} />
      {allDocs.map((doc, _) => {
        console.log(doc);
        return (
          <Tile
            doc={doc}
            key={doc._id.toString()}
            deleteTile={() => {
              deletetile(doc._id.toString());
            }}
          />
        );
      })}
    </Grid>
  );
};

export default DocumentList;
