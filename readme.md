This is readme.md - mark down is like some html , where u can wirte ur raw text. like if u do ##___ it will make the text big. 
so first thing first while making any project make a readme.md

also this whole text will serve as a note on ~ How to create entire project yourself

## Todo app
Now in this we are making a Simple todo application 
it has the fllowing features -
-anyone can create a todo.
-anyone can see their existing todos.
-anyone can make a todo as done.

## Start
    -Backend -
   First things first we will create a readme.md and backend folder inside it we will have index.js, db.js, types.js, then we will completet the backend work.

   -frontend -
   then we will do npm create vite@latest in main directory (make sure u r not in backend directory) and then we will create the frontend and connct with our backend.

## Steps
    (1) Start with making a readme.md

    (2) make a backend folder and do { cd backend } - bcz we will be installing our node packages and
        express in that folder.

    (3) initialize a node project now ~ just do { npm init }
        //it will put a package.json file
        image.png

    (4) now we will do { npm install express } ` we will be using express in our project
        it will load all node modules and packages

    (5) Now we create a file named -  index.js in the backend folder
        and write //write bsic express boilerplate code.
                //with express,json() middleware

    (6) Now make a file inside backend ~ types.js in which there will zod inputs we will expect 
        from our end user. to initialize ~ { npm install zod }. make sure u r in backend directory

    (7) Now we will be making db.js, here we will be making our schemas for our project, 
        just do { npm install mongoose } in the terminal. make sure u r in backend directory
        make a project~cluster and copy the connection string and connect it with mongoDB app

    (8) Now we have make the db.js too and defined all the schemas, we will complete out index.js  
        work and boom-- backend complete

    (9) Now frontend work ~ come back in the main directory , and do { npm create vite@latest },
        and give the project name (frontend), now u have 3 folders -(backend , frontend, readme.md) in the main directory. 

   (10) Now in the frontend directory do - { npm install }, to install all the dependencies 
        like the react dependencies , react as a DOM dependecy in the frontend folder. 

   (11) 

