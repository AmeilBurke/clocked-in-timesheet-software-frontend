import { VStack, Link as ChakraLink } from "@chakra-ui/react"
import { Account, Establishment, Jobs, Timesheet, Trade } from "../../types/typeIndex"
import { useEffect, useState } from "react"
import GetAllTimesheetsForSingleAccount from "../../api calls/GET/GetAllTimesheetsForSingleAccount";
import ComponentHeading1 from "../../components/ComponentHeading1";
import { Link as ReactRouterLink } from "react-router-dom";
// import ComponentModalTimesheetView from "../../components/ComponentModalTimesheetView";
// import getEstablishmentNameFromId from "../../utils/getEstablishmentNameFromId";

const PageWorkerDashboard = ({ fullUserInfo, allTrades, allEstablishments }: { fullUserInfo: Account, allTrades: Trade[], allEstablishments: Establishment[] }) => {
  const [pastTimesheets, setPastTimesheets] = useState<Timesheet[] | undefined>();

  const timesheetHandler = async () => {
    const apiResponse = await GetAllTimesheetsForSingleAccount(fullUserInfo.account_id);

    if (typeof apiResponse !== 'number' && typeof apiResponse !== undefined) {
      setPastTimesheets(apiResponse);
      // console.log(pastTimesheets);
    }
  }

  useEffect(() => {
    if (typeof pastTimesheets === undefined) {
    }
    timesheetHandler();

  }, [])

  // console.log(pastTimesheets)
  return (
    <VStack w="full" textTransform="capitalize" align="start" >
      <ComponentHeading1 heading="Dashboard" />
      <ChakraLink as={ReactRouterLink} w="full" mb="4" to="/all-jobs">Start Job</ChakraLink>

      {/* <Heading as={"h1"} size={"lg"} mb="4" fontWeight="400">Past Timesheets</Heading> */}

      {/* {
        pastTimesheets === undefined ? null : pastTimesheets.map((element: Timesheet) => {
          // console.log(element);
          // return <ComponentModalTimesheetView key={element.timesheet_id} timesheetInformation={element} />
          return <Accordion w="full" key={element.timesheet_id} >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    {element.timesheet_name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              {
                element.timesheetJob.map((job: Jobs) => {
                  return <AccordionPanel key={job.job_id} pb={4} bg="gray.100" >
                    <VStack spacing="4" align="flex-start" >
                      <HStack w="full" justify="space-between" >
                        <Text>Job Location:</Text>
                        <Text>{getEstablishmentNameFromId(allEstablishments, job.job_location)}</Text>
                      </HStack>
                      <HStack>
                        <Text>Job Start Time:</Text>
                        <Text>{job.job_start_time}</Text>
                      </HStack>
                    </VStack>
                  </AccordionPanel>
                })
              }
            </AccordionItem>
          </Accordion>
        })
      } */}
    </VStack>
  )
}

export default PageWorkerDashboard