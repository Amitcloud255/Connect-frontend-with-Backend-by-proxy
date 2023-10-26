import express from 'express';

const app = express();

//app.get('/', (req, res) => {
   // res.send('Server is ready');
// });

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is 1 joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is 2 joke'
        },
        {
            id: 3,
            title: 'Thrid joke',
            content: 'This is 3 joke'
        },
        {
            id: 4,
            title: 'Fourth joke',
            content: 'This is 4 joke'
        },
        {
            id: 5,
            title: 'Fifth joke',
            content: 'This is 5 joke'
        }
    ];
    res.send(jokes);
});    

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
    }
);    