import { Button, Divider, Heading, Text, VStack } from "@chakra-ui/react"
import { Account, Trade } from "../../types/typeIndex"

const PageWorkerDashboard = ({ fullUserInfo, allTrades }: { fullUserInfo: Account, allTrades: Trade[] }) => {

  return (
    <VStack w="full" textTransform="capitalize" align="start" >
      <Heading as={"h1"} size={"sm"} fontWeight="400">Welcome</Heading>
      <Heading as={"h1"} size={"lg"} fontWeight="400" >{fullUserInfo.account_name}</Heading>
      {
        allTrades.map(element => {
          if (element.trade_id === fullUserInfo.account_trade_id) {
            return <Text key={element.trade_id} fontSize="md" color="gray"> {element.trade_name} </Text>
          } else {
            null
          }
        })
      }
      <Divider mb="4" />
      <Button w="full" >Start Job</Button>
    </VStack>
  )
}

export default PageWorkerDashboard