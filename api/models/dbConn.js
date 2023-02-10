const mongoose = require("mongoose");

let mongoURI = "mongodb://bonbon-db/bonbon";
mongoose.connect(mongoURI);

mongoose.connection.on("connected", () => {
    console.log("[Mongoose] Connected to " + dbURI);
});

mongoose.connection.on("error", (err) => {
    console.log("[Mongoose] Connection error: " + err);
});

mongoose.connection.on("disconnected", () => {
    console.log("[Mongoose] Disconnected");
});

const shutdownMongoose = (msg, cb) => {
    mongoose.connection.close(() => {
        console.log("[Mongoose] Disconnected: " + msg);
        cb();
    });
}

process.on("SIGINT", () => {
    shutdownMongoose("SIGINT signal received", () => {
        process.exit(0);
    });
})

process.on("SIGTERM", () => {
    shutdownMongoose("SIGTERM signal received", () => {
        process.exit(0);
    });
})

