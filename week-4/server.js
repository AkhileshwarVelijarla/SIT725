const mongoose = require('mongoose');
var express = require("express")
var app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb+srv://akhileshvelijarla:Bruce%402803@cluster.l4zmfn2.mongodb.net/new', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    description: String,
});
const Project = mongoose.model('SIT725', ProjectSchema);

const sampleProjects = [
    {
        title: "Antoine dupont",
        image: "images/ant.jpg",
        description: "Antoine Dupont is a French professional rugby union player"
    },
    {
        title: "Dan Carter",
        image: "images/dan.jpeg",
        description: "Daniel William Carter ONZM is a New Zealand retired rugby union player."
    },
    {
        title: "Eben Etzebeth",
        image: "images/eben.jpeg",
        description: "Eben Etzebeth is a South African professional rugby union player who currently plays for the Sharks in the United Rugby Championship"
    }
];

Project.insertMany(sampleProjects)
    .then(() => console.log("Project saved!"))
    .catch((err) => console.error(err));
    
app.get('/api/4.2', async (req,res) => {
    const projects = await Project.find({});
    res.json({statusCode: 200, data: projects, message:"Success"})
})

var port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("Server is  listening to: "+port)
})