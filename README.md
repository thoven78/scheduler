#About this project

Built with yeoman and bootstrap

##Dependencies

*You need to have node installed
*Grunt CLI (sudo npm install -g grunt-cli)
*if you don't have either or them install. Just browse the dist directory and open the index.html with a web browser.

##To start the app

*cd scheduler
*grunt serve
*and withing a couple minutes the app should start and open a web browser.
*incase a new web braswer window was not open visit http://127.0.0.1:9000

if you're having trouble please get intouch with me.

I chose angular because it's the coolest MV* Javascript framework out there.

I created two controllers
*One that's responsible for the main view I.E creating editing and displaying users
*The other is responsible displaying a list of users and simple calendar

Then I created a model that's responsible to query and save an array of objects in the localStorage engine.
so I would have one simple API to access the users that are currently saved in the localStorage engine.

I try to stay DRY and make the code easy to read and follow.

the hireachy of the application is as follow

app/
  scripts/
    app.js responsible for bootstrapping and this is where the routes are defined
    controllers/
      main.js this is the first controller that is responsible to the first page 
      calendar.js this is the second controller that is responsible for the calendar page
    services/
      user.js this is the user model that saves and query items in localStorage
    styles/
      main.scss app styles live here
    views/
      main.html main view i.e when you visit http://127.0.0.1:9000
      calendar.html the calendar view
      
#Notes
  
To edit a user simply click on one then the form will be populated.

To toggle availability, a user must be selected from the list to see a row highlighted.

If one of the input boxes is not valid. It'll have a red border.

#Limitation

You can only select one row at a time to toggle availability.