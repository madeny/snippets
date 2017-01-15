To deploy Express App.

NODE_ENV=production


up vote
22
down vote
accepted
There is no standardized way, but you're on the right track. If your package.json is up to date and well kept, you can just copy/zip/clone your app directory to the production system, excluding the node_modules.

On your production system, run  npm install to install your dependencies, npm test if you have tests and finally NODE_ENV=production node server.js

Some recent slides I considered to be quite helpful that also include the topic of wrappers like forever, can be found here.
-------------------------------------
Testing Express app.
--------------------------------------

npm install --dev-save mocha chai supertest