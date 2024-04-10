import app from "./api/app.js";

// Use port 9002

const port = 9002;

app.listen(port, () => {
    console.log(`Server running at ${port}.`);
})