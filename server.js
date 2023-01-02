import app from "./app.js";
import connectDB from "./config/Database.js";
import defaultData from "./default.js";
import { v4 as uuid } from "uuid"


connectDB();
app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})

defaultData();


