# E-Commerce_Bank_End

## Description

E-commerce is a large part our global industry and understanding the basics build of it is necessary for many that work with it. Thus, this is an application that builds out the back end for an e-commerce site with the use of Express.js API to use Sequelize to interact with a MySQL database.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Criteria Provided by Client 

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```
## Installation 
All that is required is to have the following in your terminal: 
- npm install 
- npm run seed
- npm start
- use insomnia as your portal to view all the possible routes 

## Navigation and Demo 
As soon as you finsih the install, you will then be given a link to the port. Use this port link to place it in your insomnia application and view data desired. 

To see how it is done, please view the following video/gif of how to use this application since it is not in the browser but rather a local file. 

- Install
![How the app works in terminal.](Assets/installations.gif) 

- Categories 
![In Insomnia Core, demoing the “GET”, "POST", "PUT"and "DELETE" for Categories.](./Assets/categories.gif)

- Products 
![In Insomnia Core, demoing the “GET”, "POST", "PUT"and "DELETE" for Products.](./Assets/products.gif)

- Tags
![In Insomnia Core, demoing the “GET”, "POST", "PUT"and "DELETE" for Tags.](./Assets/tags.gif)

## Resources 
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Links 
- Video link: https://drive.google.com/drive/folders/1XneCQbCBXIm55b-obVze1InC-2-lkB53?usp=sharing
- GitHub repositor: https://github.com/ed2022/E-Commerce_Bank_End.git