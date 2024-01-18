import { Button } from '@chakra-ui/react'

export const ComponentButtonPrimary = ({ textToDisplay, onClickFunction }: { textToDisplay: string, onClickFunction: () => void }) => {
    return (
        <Button bgColor="teal.300" color="white" _hover={{ opacity: 0.5 }} onClick={onClickFunction} >{textToDisplay}</Button>

    )
}