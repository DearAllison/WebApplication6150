import app from "./api/app.js";

// Use port 9001

const port = 9001;

app.listen(port, () => {
    console.log(`Server running at ${port}.`);
})