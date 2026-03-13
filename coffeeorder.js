const express = require("express");
const app = express();
app.use(express.json());




const orders = [
 {id:1, drink:"Latte", size:"Medium"},
 {id:2, drink:"Cappuccino", size:"Large"}
];

app.get ("/orders", (req,res)=>{
    res.json(orders);
});

app.get("/orders/:id",(req,res)=>{
    const id = Number(req.params.id);
    const order = orders.find(o => o.id === id);
    res.json(order);
});

app.post("/orders",(req,res)=>{
    const newOrder ={
        id : orders.length + 1,
        "drink": req.body.drink,
        "size": req.body.size
    };
    orders.push(newOrder);
    res.json(newOrder);
});

app.delete("/orders/:id",(req,res)=>{
    const id = Number(req.params.id);
    const index = orders.findIndex(o => o.id === id);
    if( index !== -1){
      const deletedOrder = orders.splice(index,1);
      res.status(200).json({messsage: "order not found"});
    }
})

app.listen(3000);