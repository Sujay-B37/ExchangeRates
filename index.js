import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
let err = "$$";
let par;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

app.get("/",async (req,res) => {
    let vals = [];
    let response = await axios.get("https://api.frankfurter.dev/v2/rates?base=EUR");
    let result = response.data;
    for(let i = 0;i<result.length;i++)  vals.push(result[i].quote);
    res.render("index.ejs",{curr: vals, error1: err, params: par});
});

app.post("/go", async(req,res) => {
    let str = req.body['base-quote'];
    let val = str.split("-");
    if(val[0] === "$$" || val[1] === "$$"){
        err = "Please select both base and the quote.";
        res.redirect("/");
    }
    else
    {
        err = "$$";
        let url = `https://api.frankfurter.dev/v2/rates?base=${val[0]}&quotes=${val[1]}`;
        let response = await axios.get(url);
        let result = response.data;
        par = result[0];
        res.redirect("/");
    }
    
});

app.listen(port,(error) => {
    if(error)   throw error;
    console.log(`App started on port ${port}`);
});