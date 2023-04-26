
interface Content {
    id : number;
    title : string;
    description : string[];
    image : string;
}

var contents: Content[] = [
    {id:1,title : 'Paracetamol',description:["Paracetamol is a widely prescribed medicine that helps to ease pain and bring down high body temperature (fever). In children, it treats conditions like headache, toothache, body ache, fever, and common cold.Paracetamol is a widely prescribed medicine that helps to ease pain and bring down high body temperature (fever). In children, it treats conditions like headache, toothache, body ache, fever, and common cold."] , image:"https://th.bing.com/th/id/OIP.ghgRDCmPwAOVJ0WPL0VxRgHaJA?pid=ImgDet&rs=1" },
    {id:2,title : 'jeeshnu',description:["Hello this is vendhan","Hello","Boys"] , image:"https://th.bing.com/th/id/OIP.ghgRDCmPwAOVJ0WPL0VxRgHaJA?pid=ImgDet&rs=1" },
    {id:3,title : 'name',description:["Hello this is manikandan","Jeeshnu","Aadhi","Vezha"] , image:"https://th.bing.com/th/id/OIP.ghgRDCmPwAOVJ0WPL0VxRgHaJA?pid=ImgDet&rs=1" }
]



export default contents;
export type {Content};