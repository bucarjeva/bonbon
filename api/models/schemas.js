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
 *      description: The user's password
 *      example: passwd 
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
 *      $ref: '#/components/schemas/User'
 *     payee:
 *      type: array
 *      items:
 *       $ref: '#/components/schemas/User'
 *     amount:
 *      type: number
 *      description: A positive number, equal to doplacilo
 *     restaurant:
 *      $ref: '#/components/schemas/Restaurant'
 *    required:
 *     - _id
 *     - payer
 *     - payee
 *     - amount
 */

/**
 *  @openapi
 *  conponents:
 *    schemas:
 *      Restaurant:
 *       type: object
 *       description: A restaurant
 *       properties:
 *        name:
 *         type: string
 *         description: The name of the restaurant
 *        doplacilo:
 *         type: number 
 */