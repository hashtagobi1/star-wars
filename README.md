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


## Missing Functionality

I understand the design isn't the prettiest but my mock design I provided within the email should give you a better understanding of what I was aiming for.

For the individual character pages, I was hoping to pass the ID of the character into a GQL query in order to retrieve the necessary film details then render them accordingly. Was hoping to use more styled components to get a nice responsive layout.

Pagination + Sorting + Filtering was next on my agenda but due to the boundaries of time I decided to forego this feature. React Table has a nice library that would have been a clean way to simply implement these features.

`Thanks, Obi`
