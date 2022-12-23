# planetapi_nextjs

## Launch NextJS API
* Run `npm install` in de rootdirectory van deze repo.  
* Run `npm run dev` in de rootdirectory van deze repo.  
* De default homepagina is op: [http://localhost:3000](http://localhost:3000)  

## Routes
### Planets
* [/api/planet](http://localhost:3000/api/planet): alle planeten
* [/api/planet/id/{id}](http://localhost:3000/api/planet/id/6): Zoek op id  
* [/api/planet/name/{name}](http://localhost:3000/api/planet/name/Saturn): Zoek op naam  
* [/api/planet/diameter/{diameter}](http://localhost:3000/api/planet/diameter/6779): Zoek op diameter  
* [/api/planet/distancetosun/{distance}](http://localhost:3000/api/planet/distancetosun/4495000000): Zoek op afstand tot de zon  (km)  

### Stars  
* [/api/star](http://localhost:3000/api/star): alle sterren
* [/api/star/id/{id}](http://localhost:3000/api/star/id/2): Zoek op id  
* [/api/star/name/{name}](http://localhost:3000/api/star/name/Sun): Zoek op naam  
* [/api/star/distancetoearth/{distance}](http://localhost:3000/api/star/distancetoearth/4367): Zoek op afstand tot de Aarde (lichtjaar)  


## Reden voor keuze NextJS
NextJS is persoonlijk mijn favoriet JavaScript-framework. Vooral het dynamisch renderen van componenten en zelfs volledige paginas zijn heel leuke features. Het dynamisch implementeren van een API gebeurt door de filenaam als [...slug].js of [...param].js. De mappenstructuur van de api/ directory is bijgevolg ook de structuur van de api. Bv. mappenstructuur: `/api/planet/[...slug].js` heeft alle mogelijke parameters van een planeet.  
  
Mijn portfolio website ([simonwilmots.com](https://simonwilmots.com)) is gemaakt met NextJS.

## Technologies
* NextJS
* Dynamische API routes ([...slug] filenaam)
