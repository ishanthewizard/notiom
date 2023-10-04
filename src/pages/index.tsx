import MainTitle from "@/components/MainTitle"
import Navbar from "@/components/Navbar"
import { VStack } from "@chakra-ui/react"
export default function Page() {
  return (
<VStack m="10px" width="100%">
    <Navbar/>
    <MainTitle />
</VStack>
  
  )
}