## ECDSA Node

This project is an example of using a client and server to facilitate transfers between different addresses. Since there is just a single server on the back-end handling transfers, this is clearly very centralized. We won't worry about distributed consensus for this project.

However, something that we would like to incoporate is Public Key Cryptography. By using Elliptic Curve Digital Signatures we can make it so the server only allows transfers that have been signed for by the person who owns the associated address.

### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `nodemon index` to start the server 

The application should connect to the default server port (3042) automatically! 

_Hint_ - Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.


## Public Private keys used.
Private Key : 654c4163d8226e958dfad640432891b1432b5a2452cf8108fe00519b283f0560
Public Key  : 03e78ac598e08f68a6302b66ca7518b4ef6e1cafbb767fc4a5971184cc694716f2
Address: 1f841c5ac715b50b88bbe80688e7af56d70e1cd4


Private Key : 6e8301d4c9f8fe5fe6edb723faba398a764f72994378f56c8360af9f3730937b
Public Key  : 03c32adb9d34421e9ddde59f637edd1a78df61c023515d89ffb2f0900e446c91eb
Address: 56c9903bf751969c2b91bec3cd3d6f4990596a2e


Private Key : 8fcaa62fa6db1dce6f5f54ae69da8fd2cc7e5c1063218efc077ee1e0d184ea76 
Public Key  : 03940db5f45daa51c1324355eb21fa2886931d45e98e9f61990d927bc80754ab82
Address: 9e3f1cf846999d77c7875d0098220c2e034cad4e