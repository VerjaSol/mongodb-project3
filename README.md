# mongodb-project3
Projekti 3

Projektissa käytän itse kehittämää pientä tietokantaa Countries.europe:
Country
capital
population

Käytetään seuraavat reitit (
app.get("/api/countries"
app.get("/api/name/:text"
app.get("/api/:id"
app.delete("/api/delete/:id"
app.post("/api/post"
app.put("/api/update/:text"


Vaikka omalla koneella ohjelma toimii sekä Postmanissa verbit menevät läpi, heroku ei toimi jostain syystä, en saanut korjattua
Se ilmoittaa:

2021-04-18T15:24:34.375045+00:00 app[web.1]: npm ERR! 
2021-04-18T15:24:34.375183+00:00 app[web.1]: npm ERR! Failed at the mongodb@1.0.0 start script.
2021-04-18T15:24:34.375307+00:00 app[web.1]: npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
2021-04-18T15:24:34.383717+00:00 app[web.1]: 
2021-04-18T15:24:34.383918+00:00 app[web.1]: npm ERR! A complete log of this run can be found in:
2021-04-18T15:24:34.384038+00:00 app[web.1]: npm ERR!     /app/.npm/_logs/2021-04-18T15_24_34_375Z-debug.log
2021-04-18T15:24:34.486415+00:00 heroku[web.1]: Process exited with status 1
2021-04-18T15:24:34.547965+00:00 heroku[web.1]: State changed from starting to crashed
2021-04-18T15:24:38.619172+00:00 heroku[router]: at=error code=H10 desc="App crashed" method=GET path="/" host=mongo2021.herokuapp.com request_id=e5718734-18f5-45b3-99ae-c5346e5d3022 fwd="88.115.166.105" dyno= connect= service= status=503 bytes= protocol=https
