import nextConnect from "next-connect";
import notes from "../../../src/data/data";

const notesHandler = nextConnect()
//to create a notes
.post((req,res)=>{
    const note = {
        ...req.body,
        id: Date.now()
    }
    notes.push(note)
    res.json({
        message:'data store successfully',
        data:note,

    })

})
// to get all the notes
.get((req,res)=>{
    res.json({
        message:'all data is sent',
        data:notes
    })
})
//delete all notes
.delete((req,res)=>{
    const tempArr = notes.concat()
    const body = req.body
   if ( body.all === 'YES' ) {

       notes.splice(0,notes.length)
       res.json({
           status:'Success',
           message:'All notes have been deleted',
           deletedNotes:tempArr
       })
   }
   res.json({
       status:'Failed',
       message:'please provide the key to delete all notes'
   })
})




export default notesHandler