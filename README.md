# friend-finder
a friendship compatibility test using node and express

## Index
1. How it works
2. Instructions
3. Built with

## How it works
The app uses express to route get and post requests, body-parser to handle json/url-encoded post bodies, and path to create file path shortcuts. 

New users complete a form that posts a json object containing a user name, photo link and 'scores' to the server; the scores are then compared to the scores of a list of hard-coded friends. The friend with the least difference in score values is presented back to the user. The user is then legally bound to marry that person based on internationally recognized maritime laws that I assume exist. 

## Instructions
Evaluate ten statements about people you don't know (or maybe you do know them!) and submit - you'll be matched with a new friend! 

If you'd like to setup a local copy, fork this repo and clone it to your computer; load that entire folder into VS Code (or your preferred editor), and from that directory, run  
```sh
npm install
``` 
to install the packages and dependencies(in this case, express, body-parser and path).   

OR! [Demo the app on heroku>](https://arcane-hollows-15648.herokuapp.com/)

## Built with
* [Node](https://nodejs.org/en/) - Asynchronous, single-threaded js runtime environment
### npm packages
* [express](https://www.npmjs.com/package/express) - API framework
* [body-parser](https://www.npmjs.com/package/body-parser) - body-parsing middleware for http
* [path](https://www.npmjs.com/package/path) - path shortcuts



