import { Grid } from "@mantine/core";
import Temp from "./Card";
import contents from "../../objects";
import { Content } from "../../objects";

function ContentItem({content} : {content : Content}){
    return (
        <Grid.Col style={{maxWidth: 600}} sm={12} xs={6} >
            <Temp
            content = {content}
            />
        </Grid.Col>
    );
}

function Page(){
    return (
        <div className="App">
            <Grid justify="space-around">
                {/* <Grid.Col style={{maxWidth: 600}} sm={12} xs={6} >
                    <Temp/>
                </Grid.Col>
                <Grid.Col style={{maxWidth: 600}} sm={12} xs={6}>
                    <Temp/>
                </Grid.Col>
                <Grid.Col style={{maxWidth: 600}} sm={12} xs={6}>
                    <Temp/>
                </Grid.Col>
                <Grid.Col style={{maxWidth: 600}} sm={12} xs={6}>
                    <Temp/>
                </Grid.Col> */}
                {contents.map((content) => (
                    <ContentItem key={content.title} content={content} />
                ))}
    </Grid>
        </div>
    )
}
export default Page;