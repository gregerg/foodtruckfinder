# foodtruckfinder [![Build Status](https://travis-ci.org/gregerg/foodtruckfinder.svg)](https://travis-ci.org/gregerg/foodtruckfinder)
A service that tells the user what types of food trucks might be found near a specific latitude/longitude location on a map.

This solution is currently backend focused, but I will eventually come back and make a nicer front end, and integrate google maps.

## Architecture

This web application is a node backend with a basic angular front end. The code is deployed on heroku, with continuous integration/deployment via travis-ci. 

Currently the front end accesses the back end api by with a latitude/longitude near fifth and market, and searches within 250 meters of that location. The backend can accept any lat/long and any distance.

Also the api currently only accesses the sfgov endpoint for the food truck permits, but not the endpoint for their schedules. Eventually I will implement filtering based on current scheduled locations.

I plan to add a google maps interface in the future that allows a user to type in an address or click a location on the map. I may also add a redis cache so that the app is not hitting the sfgov api too frequently.

hosted project: https://grg-foodtruckfinder.herokuapp.com/

