# install the graphql server:
	npm init -y
	npm i graphql-yoga@1.17.4 -- this is the main tool the users will see
	mkdir src
	touch src/index.js 
	touch .babelrc
	touch src/schema.graphql -- define the schema	
	npm i babel-cli babel-plugin-transform-object-rest-spread babel-preset-env
	npm install --save-dev nodemon
	mkdir src/resolvers
	touch src/resolvers/Query.js
	
Once all of these are installed, we can now configure the boilerplate project.
  
  ## configure the package.json script 
  This will use `nodemon` whenever javascript or graphql files change and to use babel for transpilation
  
  `"start": "nodemon src/index.js --ext js,graphql --exec babel-node"`
  
  ## configure .babelrc file
  ```json
  {
     "presets": [
       "env"
     ],
     "plugins": [
       "transform-object-rest-spread"
     ]
   }
 ```

# schema generators
https://github.com/NathanLapp/db-to-graphql

# configure the project for TypeScript
https://www.youtube.com/watch?v=Y3jUmj2ApLw

# resources
https://github.com/Urigo/graphql-modules
https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png
https://tomasalabes.me/blog/nodejs/graphql/2018/07/11/modularizing-graphql.html
https://github.com/apollographql/graphql-tools/blob/master/docs/source/resolvers.md
https://github.com/apollographql/apollo-server/issues/1664

