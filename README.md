# Simple Public Chat
REST API simple public chat on node.js 

### Getting Set Up
1. `git clone https://github.com/AndrewRatnikov/SimplePublicChat.git`
2. `npm install`
3. `npm start`

Swagger documentation: http://localhost:3000/api-docs/ or in json format: http://localhost:3000/swagger.json

### API
1. get all posts: http://localhost:3000/posts

    Returned value:
    ```
    [
        {
            "username": "string",
            "text": "string"
         },
         { ... }
    ]
    ```

2. create new post: http://localhost:3000/addPost

    Parameters (add to body):
    ```
    {
        "username": "string",
        "text": "string"
     }
    ```

    Returned value:

    201: `{ "success": true, "post": /*just created post*/ }`

    405: `{ "error": [ "string", ... ] }`