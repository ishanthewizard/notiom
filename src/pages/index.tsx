import DocumentList from "@/components/DocumentList"
import MainTitle from "@/components/MainTitle"
import Navbar from "@/components/Navbar"
import { VStack } from "@chakra-ui/react"
export default function Page() {
 const documents = ['Document 1', 'Document 2', 'Document 3', "bfdafasfdasfasfsa", "fafdasfdasfasfasfsaas", "fdafasfasfsafsavcxads", "fdasfasfasfdasf"];
  return (
<VStack m="10px" width="100%">
    <Navbar/>
    <MainTitle />
    <DocumentList documents={documents}/>
</VStack>
  
  )
}