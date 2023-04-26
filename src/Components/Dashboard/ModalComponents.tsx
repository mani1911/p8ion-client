import { Input, Text, Image, Group, Button } from '@mantine/core';
import { SiGoogletranslate } from 'react-icons/si';
import Speech from './speech';
import { Content } from './types';
import axios from 'axios';
import { useState } from 'react';

const projectId = "p8ion-383718";
const apiKey = "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCtGndRGDWpcn0z\nR00+AxDoJuT8PmbescdXOKBQ5muWJK5Gyyfa8CU9YzAE3i94+XkWrL21lBZhOn5u\nzTtRAtL0ak+Iyv3lWZWvvIr/weD4dy176LSR2B8raTAB8cwTFssq9NOvSkKVND/Y\nu5f/kF6hael4NPZW2SpSjIVVF1V00rDkWhnJa/0iIiMRxpXYp+w+VDHttFH2Ilfl\nvYftpCsV+Fl6lpwbUYjJfq8ytboHbcBnLFJQ9r2yOdFYSxOxLxAZVXi+kdh92WAz\nqg32wbDIx8V6vH+/LAzS0nt/waaQ4IZmIv1bHTLNcJ1QzExySKT8rdb74/A0UUoK\nq6j8uyxxAgMBAAECggEAC6KMxImhCbulSK4RNgrUtxXuLDoxheRjJqyqseVa8+OR\nRzbefevIRQEGuD0K6dGy3uBLfAnxGyXoW6A1zXMoJL+EiwhB2omT8xT0Ls6kRW8V\nQo/Ymzjwl2Vhka/j7KCKlV+RXuXZ5dd2NyYcyFO22Jia1baRnDLKknPZfmesGcb3\nBc0dRHmVa+Y0BC91BewBttPUJKXh1Zjjif7swk6/D7C8/eXTHztzblTYxitDQ8TU\nwU8ZB81qLApdOFurHXaWna7jy+PpV6hdyK4jeFpX7xfVHVwsOX6cWlJcPNbfxzrM\nSITIMduYRDw2At++Fnuclr9qPBT5wucqRmjkV/tkhQKBgQDxhWx2wOYK3P70c0rA\nX7Rm/+MIQM96vob3fZLOk/5egRcyGvO5R4fwz9Kz44c+LBCXjZIneWcVptZwKq4c\nTBiYpnPayx/NR/IJU2KYhw3elbmTP6o16vtJOVOGwzbBhkJA9IL/dUWlKku2UoQM\nUUiVzk5Lm0qTXLr4rgyFX/h0+wKBgQC3ewxgSDoNnVIlAeRuHt68dqqkGPzfYjjN\n51r5cDmur0aVlQ4qp7PR3wnkAQOC1DXI5IlaJ3HJUYC2gh62H4pYSG1qakBIfVhK\nb8WAzGhtoj6YNnatsOx8pOc9xsOyLyO7v8lx6vfqoeVeEUzm6HiWVmouPzp3/UAf\nLKqaLQTwgwKBgAxKVN2qLUqqOlMoNsqZVC3VobD+01AUt/uKKVlX0J7whMSo+HQa\nPsGzYa6DypMQXPvJWYGmvOcuKUVl9pw8BxhliAm/QmwI2Dk/RAos/Tixd9MVb0z1\nGzp7r1NxRa0NbvutNalYR2YDQ/0QL+YMkNwGtpdEXMQo+N7ExKBY5OTXAoGAWWX+\n9bq7bn7E03tEjdNEu5cmNaZnL4BwJQMg9ICV2mNUhPWHXYkwuIVwEEPeLhSv0B5q\nPh8R9gFcMZDc3egoRDOl/D+g6rEIH9yt4r+18hUnYorG8IJP97txYExEdcE6K/Sa\ndoMCILSZSWgsjCWg+79HJRlxp50hbQ8aYNyml3kCgYBQkmVMMzr0FMiTjeoIvk3q\n0gpM7LGpBulFUMnUkRbu9RTMSmUrCMtUs/DX65560tHD6RMlxHJcDKNKEqPaPGqP\nOk7CzhOukeTA2pvaX/obKK95WGvXQcbD+9uK0nogt1PRq7VeJpt6rObrqza8aSqk\n8iJStSq2An5Z8/1VH/MF5w==\n";
const baseUrl = 'https://translation.googleapis.com/language/translate/v2';

const translateText = async (text: string, targetLang: string): Promise<string> => {
	const response = await axios.post(
	  `${baseUrl}/`,
	  {
		q: text,
		target: targetLang,
		format: 'text'
	  },
	  {
		params: {
		  key: apiKey
		}
	  }
	);
	const translation = response.data.data.translations[0].translatedText;
	return translation;
};

function ModalComponents({ content }: { content: Content }) {
	const [to,setTo]=useState('en')
  	const [from,setFrom]=useState('en')


    const [text, setText] = useState(content.Content);
  	const [translatedText, setTranslatedText] = useState(content.Content);

  
    const handleTranslate = () => {
      	console.log("hiiiii")
      	translateText(text, to).then((translation) => {
        setTranslatedText(translation)
      	console.log(translation);
	});
  }
	return (
		<>
			<Group position="center" align="auto">
				<Image
					src={`data:image/jpeg;base64,${content.ImageBase64}`}
					height={350}
					width={300}
					radius="md"
				/>
			</Group>
			<Group position="center">
				<Button
					variant="light"
					color="blue"
					mt="sm"
					radius="md"
					size="sm"
					mb="sm"
					compact={true}
				>
					Translate<SiGoogletranslate></SiGoogletranslate>
				</Button>
				<Input component="select" size="sm">
					<option value="1" onClick={()=>{setTo('en');handleTranslate()}}>English</option>
					<option value="2" onClick={()=>{setTo('ta');handleTranslate()}}>Tamil</option>
					<option value="2" onClick={()=>{setTo('hi');handleTranslate()}}>Hindi</option>
					<option value="2" onClick={()=>{setTo('fr');handleTranslate()}}>French</option>
				</Input>
			</Group>
			<Group position="center">
				<Speech content={content} />
			</Group>

			<Text size="sm">{content.Content}</Text>
		</>
	);
}
export default ModalComponents;
