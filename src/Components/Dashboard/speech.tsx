import { Button } from "@mantine/core";
import {AiFillSound} from "react-icons/ai";
import { Content } from "../objects";
function Speech({content} : {content : Content}){
    const msg = new SpeechSynthesisUtterance()
  const speechHandler = (msg: SpeechSynthesisUtterance) => {
    // msg.text = content.description[0]
    // window.speechSynthesis.speak(msg)
    for(var i=0; i<content.description.length;i++){
      console.log(i)
      msg.text = content.description[i]
      window.speechSynthesis.speak(msg)
      
    }
  }
    return (
        <Button variant="light" color="blue"  mt="xl" radius="md" size='md' mb="xl" onClick={() => speechHandler(msg)}>
        Speech<AiFillSound></AiFillSound>
        </Button>
    )
}
export default Speech;