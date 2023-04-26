import { Button } from "@mantine/core";
import {AiFillSound} from "react-icons/ai";
import { Content } from "./objects";
function Speech({content} : {content : Content}){
    const msg = new SpeechSynthesisUtterance()
  const speechHandler = (msg: SpeechSynthesisUtterance) => {
    
    var temp = "";
    for(var i=0; i<content.description.length;i++){
      console.log(i)
      temp = temp + content.description[i]
    }
    msg.text = temp;
    window.speechSynthesis.speak(msg)
  }
    return (
        <Button variant="light" color="blue"  mt="xl" radius="md" size='md' mb="xl" onClick={() => speechHandler(msg)}>
        Speech<AiFillSound></AiFillSound>
        </Button>
    )
}
export default Speech;