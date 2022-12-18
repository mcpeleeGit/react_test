import Layout from "../../components/layout";
import {useRef} from "react";

export default function Write() {
    const idRef = useRef(undefined)
    const titleRef = useRef(undefined)
    const contentRef = useRef(undefined)
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log('handleSubmit')
        const id = idRef.current.value
        const title = titleRef.current.value
        const content = contentRef.current.value

        if(id && title && content){
            console.log('valid form')
            fetch('/api/write',{
                method:'POST',
                headers: {'Content-Type':'application/json'},
                body:JSON.stringify({
                    id,title,content
                })
            })
                .then((response) => {
                    if(response.ok){
                        return response.json()
                    }
                    throw new Error('Fetch Error')
                })
                .then((data) => alert(data.message))
                .catch((error) => alert(`request error: ${error}`))

        }

    }
    return (
        <Layout>
            <h1>Write a Post</h1>
            <form method="post" onSubmit={handleSubmit}>
                <input type="text" name="id" placeholder="id" ref={idRef}/>
                <br/>
                <input type="text" name="title" placeholder="title" ref={titleRef}/>
                <br/>
                <textarea type="text" name="content" placeholder="content" ref={contentRef}/>
                <br/>
                <input type="submit"/>
            </form>
        </Layout>
    );
}
