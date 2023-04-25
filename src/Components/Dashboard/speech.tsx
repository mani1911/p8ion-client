import { Button } from "@mantine/core";
import {AiFillSound} from "react-icons/ai";
import { Content } from "./objects";
function Speech({content} : {content : Content}){
    const msg = new SpeechSynthesisUtterance()
  const speechHandler = (msg: SpeechSynthesisUtterance) => {
    
    var temp = "";
    for(var i=0; i<content.description.length;i++){
      temp = temp + content.description[i]
    }
    msg.text = temp;
    window.speechSynthesis.speak(msg)
  }
    return (
        <Button variant="light" color="blue"  mt="0" radius="md" size='sm' mb="sm" onClick={() => speechHandler(msg)} compact={true}>
        Speech<AiFillSound></AiFillSound>
        </Button>
    )
}
export default Speech;