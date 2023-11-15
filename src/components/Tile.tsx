// components/Tile.js
import { NotiomDoc } from '@/types';
import {
  Box,
  Modal,
  Text,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Textarea,
  Input,
} from '@chakra-ui/react';
import { useState } from 'react';

interface TileProps {
  doc: NotiomDoc;
  deleteTile: () => void;
}

const Tile: React.FC<TileProps> = ({ doc, deleteTile }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState(doc.title);
  const [titleDraft, setTitleDraft] = useState(doc.title);
  const [content, setContent] = useState(doc.body);
  return (
    <>
      <button onClick={onOpen}>
        <Box
          width="200px"
          height="200px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderWidth="2px"
          borderColor="#A3A3A3"
          backgroundColor="#F8F8F8"
          borderRadius="lg"
          overflow="auto"
          textAlign="center"
          padding="0px"
          _hover={{
            transform: 'scale(1.05)', // Adjust this value for the desired zoom level
          }}
          transition="transform 0.2s" // Adjust this value for the desired zoom speed
        >
          <Text fontSize="30px" textStyle="body">
            {title ? title : 'UNTITLED'}
          </Text>
        </Box>
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Input
              value={titleDraft}
              onChange={(e) => setTitleDraft(e.target.value)}
            />
          </ModalHeader>
          <ModalCloseButton
            onClick={() => {
              setTitleDraft(title);
            }}
          />
          <ModalBody>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setTitle(titleDraft);
                onClose();
              }}
            >
              Save
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setTitleDraft(title);
                deleteTile();
                onClose();
              }}
            >
              Discard Doc
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Tile;
