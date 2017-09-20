![cf](https://i.imgur.com/7v5ASc8.png) Lab 07: Vanilla HTTP Server
======

## Read ME
* request-parser.js requires URL and querystring so it can parse and buffer the sting sent over; catching an error if there is on.
* server.js contains the HTML to input the cowsay text pictures and text.  It also houses http.createServer which allows the server to show.
* index.js starts the server on PORT 4000 as specified in the env file.  It is also the main page for "start" and "watch" in  package.json/scripts.
* On the address bar, you can write "http://localhost:4000/?text=hello!" to have the cow say hello!  If you would like something else, for instance a dragont to say hello, simply put "http://localhost:4000/?text=hello!&f=dragon" and you got it.

## Resources
* [Cowsay docs](https://github.com/piuccio/cowsay)


## TEST
Write a 200 and 400 test for you POST request to `/api/cowsay`

## Bonus
**1pts:** add the ability to change the cowfile on GET /api/cowsay, and POST /api/cowsay - **ex: dragon, sheep, etc**
