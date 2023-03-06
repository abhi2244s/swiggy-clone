import { useState } from "react"

const Section = ({title,description,show,setShow})=>{
    return(
        <>
        <div className="border border-black mt-5">
        <h1 className="text-3xl font-bold p-2 m-2">{title}</h1>
        {
            show ?<button onClick={()=>setShow()}className ="p-2 m-2" >Hide</button>
            :<button onClick={()=>setShow()} className ="p-2 m-2">Show</button>
        }
        {
            show && <p className="p-2 m-2">{description}</p>
        }
        </div>
        </>
    )
}

const Instamart =()=>{
    const[visibleSection,setVisibleSection] = useState("")
    return(
        <>
       <Section title = {"About Instamart"}
       description = {"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. "}
       show = {visibleSection==="about"}
       setShow = {()=>setVisibleSection("about")}/>
        <Section title = {"Team"}
       description = {"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. "}
       show = {visibleSection==="team"}
       setShow = {()=>setVisibleSection("team")}
       />
        <Section title = {"Carrer"}
       description = {"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. "}
       show = {visibleSection==="carrer"}
       setShow = {()=>setVisibleSection("carrer")}/>
        </>
    )
}
export default Instamart