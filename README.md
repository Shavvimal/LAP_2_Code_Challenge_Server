# Welcome to the Anonymous blog site 

This site was a practice clone of [telegra.ph](https://telegra.ph/), using a postgres database to store posts. 

To run the repo code:
1. Fork and clone this repo
2. Open the client:
   - `cd LAP_2_Code_Challenge_Client`
   - `open index.html` / `python -m http.server` / `http-server`

3. Start a server and database combo 
    - `cd LAP_2_Code_Challenge_Server`
    - `docker-compose up`
    - to stop and keep data `docker-compose down`
    - to stop and remove all artifacts `docker-compose down --volumes --remove-orphans`
