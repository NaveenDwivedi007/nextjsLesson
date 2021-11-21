import nextConnect from "next-connect";
import notes from "../../../src/data/data";


const getNote = id => notes.find(n => n.id === parseInt(id))


const notesHandlerId = nextConnect()
//get a note base on ID
.get((req,res)=>{
    // req.query is to get id
    // we use router.query to get params on front end
    // in catch all it will be an array of params but command will be same
    const id = req.query.id
    const note = getNote(id)
    if (!note) {
        res.status(404)
        res.end()
    }
    res.json({
        data:note
    })
})

//update a notes base on ID
.patch((req,res)=>{
    const id = req.query.id
    const note = getNote(id)
    if (!note) {
        res.status(404)
        res.end()
        }
    const i = notes.findIndex(n => n.id === parseInt(req.query.id))
    const updated = {...note, ...req.body}
    notes[i] = updated
    res.json({data: updated})


})
// delete one notes based on Id
.delete((req,res)=>{
 const id = req.query.id
 const note = getNote(id)

    if (!note) {
      res.status(404)
      res.end()
      return
    }
    const i = notes.findIndex(n => n.id === parseInt(req.query.id))
    
    notes.splice(i, 1)

    res.json({data: req.query.id})


})



export default  notesHandlerId