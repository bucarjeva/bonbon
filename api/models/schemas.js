const mongoose = require("mongoose");

/**
 * @openapi
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    description: A user
 *    properties:
 *     _id:
 *      type: string
 *      description: The user's unique identifier
 *      example: 5e9b9e9e0f5ae64994e2d804
 *     username:
 *      type: string
 *      description: The user's name
 *      example: John Doe
 *      writeOnly: true
 *     password:
 *      type: string
 *      description: The user's password hash
 *      example: 9d328aab7fdaf6d103260c91c4f128bf2e26cdf4653e24f5a4a360b6c34ae320 
 *     event_id:
 *      type: array
 *      description: User borrowed/lent money
 *    required:
 *     - _id
 *     - username
 *     - password
 *   Authentication:
 *    type: object
 *    description: Authentication token of the user
 *    properties:
 *     token:
 *      type: string     
 *      example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJpYXQiOjE1MT
 *    required:
 *     - token
 */
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    event_id: {
        type: [String]
    }
});

/**
 * @openapi
 * components:
 *  schemas:
 *   Event:
 *    type: object  
 *    description: An event of monetary transaction
 *    properties:
 *     _id:
 *      type: string
 *      description: The event's unique identifier
 *      example: 5e9b9e9e0f5ae64994e2d804
 *     date:
 *      type: string
 *      description: The date of the event
 *      format: date
 *      example: 2020-04-20
 *     payer:
 *      type: string
 *      description: ID of the payer
 *     payees:
 *      type: array
 *      items:
 *       type: string
 *       description: ID of the payee
 *     amount:
 *      type: number
 *      description: A positive number, equal to doplacilo
 *     restaurant:
 *      $ref: '#/components/schemas/Restaurant'
 *    required:
 *     - _id
 *     - payer
 *     - payees
 *     - amount
 */
const eventSchema = new mongoose.Schema({
    date: {
        type: Date,
    },
    payer: {
        type: String,
        required: [true, "Payer is required"]
    },
    payees: {
        type: [String],
        required: [true, "Payees are required"]
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"]
    },
});

/**
 *  @openapi
 *  components:
 *    schemas:
 *      Restaurant:
 *       type: object
 *       description: A restaurant
 *       properties:
 *        name:
 *         type: string
 *         description: The name of the restaurant
 *        example: "FRI menza"
 *       required:
 *        - name
 */
const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    }
});

mongoose.model("User", userSchema);
mongoose.model("Event", eventSchema);
mongoose.model("Restaurant", restaurantSchema);