import { app, port } from "./app";


app.listen(port, () => {
    console.log("HTTP server running on port " + port)
});