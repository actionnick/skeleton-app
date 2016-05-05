# Development

### Pre-reqs
The following must be installed on your computer in order to contribute. I recommend installing [brew](http://brew.sh/) (on OSX).
- nvm
  - `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash`
  - `nvm use`
- mongod
  - `brew install mongod`
- foreman
  - `gem install foreman -v 0.78.0`
- nodemon
  - `npm install -g nodemon`

If you want to debug...
- node-inspector
  - `npm install -g node-inspector`

### Setting up the app
- `npm install`

### Running the app
Run `foreman start -f Procfile.dev` from the root app directory. 

This runs all the processes you need for the app in the foreground, ctrl-c in this window will terminate all the app processes. 

### Debugging

After running foreman start you can visit [http://localhost:8080/?port=5858](http://localhost:8080/?port=5858). Breakpoints you set in the app will be hit here.
