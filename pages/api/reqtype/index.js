import nextConnect from "next-connect";

const Names = ['Naveen','Neha','Praveen']

const handler = nextConnect()
//req is what we get from front-end
// res is what we do or send to front end
.get((req,res)=>{
    res.json({name:'Naveen'})
})
.post((req,res)=>{
    res.json(req)
})
.put((req,res)=>{

})
// method can be async promise
.delete(async (res,rest)=>{

})
export default handler