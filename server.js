// Importing node modules
import express from 'express';
// Importing source files
const router = express.Router();
import bodyParser from 'body-parser';
// consts
const app = express();
const posts = [
    {
        title: 'Oakley, Fife',
        text: 'Oakley is a village in Fife, Scotland located at the mutual border of Carnock and Culross parishes, Fife, about 5 miles (8.0 km) W by N of Dunfermline on the A907.'
    },
    {
        title: 'Vinai',
        text: 'VINAI is an electronic music group formed in 2011 by Italian producers Alessandro Vinai and Andrea Vinai. As a duo, they produce electronic dance music.'
    },
    {
        title: 'Danny Groves',
        text: 'Daniel Charles "Danny" Groves (born 10 December 1990) is an English footballer currently playing for Spennymoor Town F.C.. He is a midfielder or right back.'
    },
    {
        title: 'Zoram Nationalist Party',
        text: 'Zoram Nationalist Party is recognized as the state political party in Mizoram, India.The party known as formerly Mizo National Front (Nationalist) . It is led by former MP Lalduhoma. MNF(N) was formed in 1997 through a split in the Mizo National Front.'
    }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
    res.send({message: 'Hello World!!'});
});

router.get('/posts', (req, res) => {
    res.send(posts);
});

app.use('/', router);

// arrow functions
const server = app.listen(3000, () => {
    // destructuring
    const {address, port} = server.address();

// string interpolation:
    console.log(`Example app listening at http://${address}:${port}`);
});

