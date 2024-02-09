import { VStack, Heading, Text, Divider } from '@chakra-ui/react'

const ComponentHeading1 = ({heading, subText} : {heading: string, subText?: string}) => {
    return (
        <VStack w="full" pt={4} alignItems="flex-start">
            <Heading as={"h1"} mb={2} color="gray.700" >{heading}</Heading>
            {
                subText
                    ? <Text mb={4} color="gray.500" >{subText}</Text>
                    : null
            }
            <Divider mb={4} />
        </VStack>
    )
}

export default ComponentHeading1