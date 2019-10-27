## API for game Tic Tac Toe

### Basic Features:
* Two users play a game of tick-tack-toe on the same computer
* No real-time functionality is required
* Single session
* All actions are reported to this API, which saves them
* Action log is displayed underneath the game area, read from this API
* The game resume if the browser is refreshed
* Front end part stored in [this](https://github.com/sabHIML/tic-tac-toe-react) Repository.  
 

### Technologies :
* Express JS
* Docker
* MongoDB

### Developed with :
* Node 12.1.0
* Yarn 1.17.0
* Docker 19.03.2

## Installation

1. Clone the repository.
2. Enter folder: `cd tic-tac-toe-api`
3. set DB in `src/config/config.js`
4. Install dependencies: yarn
5. Runs the app in the development mode: `yarn start`
6. API will available at [http://localhost:1111](http://localhost:1111) 


### Docker

The easiest way to get up and running is using Docker. Once the Docker CLI is installed from [https://www.docker.com/get-docker](https://www.docker.com/get-docker).

1. Clone and enter the root of the tic-tac-toe application
2. Run: `docker-compose up --build`
3. API will available at [http://localhost:1111](http://localhost:1111) 

#### Testing
After installation, run `yarn test` to run automated test cases.
