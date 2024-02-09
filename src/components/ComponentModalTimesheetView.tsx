import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from "@chakra-ui/react";
import { Timesheet } from "../types/typeIndex";
import ComponentModalJobView from "./ComponentModalJobView";

const ComponentModalTimesheetView = ({ timesheetInformation }: { timesheetInformation: Timesheet; }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const convertUtcToLocalTime = (timeToConvert: string) => {
        const utcTime = timeToConvert;
        const utcWithoutMilliseconds = utcTime.slice(0, -5) + "Z";
        const localDate = new Date(utcWithoutMilliseconds);
        const dateSplit = String(localDate).split(" ");

        return (`${dateSplit[0]} ${dateSplit[2]} ${dateSplit[1]} ${dateSplit[4]}`);
    };

    return (
        <>
            <Button w="full" onClick={onOpen}>
                {timesheetInformation.timesheet_name.split("-")[0]} -
                {timesheetInformation.timesheet_name.split("-")[2]}
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside" isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{timesheetInformation.timesheet_name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {
                            timesheetInformation.timesheetJob.map(job => {
                                return <ComponentModalJobView key={job.job_id} jobInformation={job} />
                            })
                        }
                    </ModalBody>
                    <ModalFooter>
                        <Button w="full" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ComponentModalTimesheetView;
