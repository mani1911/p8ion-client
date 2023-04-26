import {Text} from '@mantine/core'
function Drug({data} : {data : string}){
    return (
        <Text size='sm'>
            {data}
        </Text>
    )
}

export default Drug;