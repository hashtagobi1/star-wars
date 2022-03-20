## Set Up Server first!


Clone into this git repo -> https://github.com/graphql/swapi-graphql

cd into the folder and run npm i then `npm run start` to start up the server.

It will tell you `Listening at 'http://localhost:NUMBER'` copy the *http://localhost:NUMBER* (we will need this to point our Apollo Client to the correct server.


## Set up client!

Clone into this Project w/ `git clone https://github.com/hashtagobi1/star-wars.git`

`cd` into the project and run a `yarn install` 


Within the folder `graphql/client.ts` , change the `uri` to *http://localhost:NUMBER* 

run `yarn dev` to boot up the dev server.

You can now click on the `characters` page to receive the following information.
