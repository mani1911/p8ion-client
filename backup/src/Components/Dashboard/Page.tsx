import { Grid,Text,Group } from "@mantine/core";
import Temp from "./Card";
import contents from "./objects";
import { Content } from "./objects";

function ContentItem({content} : {content : Content}){
    return (
        <Grid.Col style={{maxWidth: 250}} sm={12} xs={6} >
            <Temp
            content = {content}
            />
        </Grid.Col>
    );
}

function Page(){
    return (
        <div>
            <Group position="center">
                <Text>
                    Dashboard
                </Text>
                <Grid justify="space-around">
                    {contents.map((content) => (
                        <ContentItem key={content.title} content={content} />
                    ))}
                </Grid>
             </Group>
        </div>
    )
}
export default Page;