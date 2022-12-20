import {createPost} from "../../lib/posts";
import {format} from 'date-fns'

export default async function handler(req, res) {
    const {id, title, content} = req.body
    console.log('write api handler')
    console.log(`id:${id}`)
    try {
        await createPost({
            id,
            title,
            date: format(new Date(), 'yyyy-MM-dd'),
            content
        })
        res.status(200).json({message: 'create success'})
    } catch (e) {
        res.status(500).json({message: `create failed ${e}`})
    }

}
