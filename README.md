# Next Tech Adventurers project

A basic folder structure and set of starter files for the Code First Girls project

## Getting started

All these steps happen in terminal

1. Clone the repo

```
git clone git@github.com:jackarmley/codefirstgirls.git
```

2. Go into the repo folder

```
cd [wherever you put it]/codefirstgirls
```

3. Run npm install to install all the node modules you'll need to run the project

```
npm install
```

4. Compile all the css, js, html and icons; Start the server; Watch for changes to css, js and html

```
gulp
```

5. Visit the site in your favorite browser

```
http://localhost:2017
```
## The folder structure

```
- gulpfile.js // Small JS file that runs tasks we need for the project eg: combining css
- package.json // A list of all the packages we need to run tasks via gulpfile.js
- dist/ // Where all the src files are combined to. DON'T EDIT THIS!
- src/
 - css/ // Put css for the project here
 - html/ // Put html for the project here
 - images // Put images for the project here
 - js // Put js for the project here
- index.html // The index page you see when you visit localhost.2017. DON'T EDIT THIS! It is compiled from src/html/
- icons.json // List of the icons available for the project that is compiled to dist/icons
```

## URLS
- Access the site [localhost:2017](http://localhost:2017)
- Preview icons [localhost:2017/dist/icons/sprite.html](http://localhost:2017/static/icons/sprite.html)

## Resources

- Easily get color themes using [color.adobe.com](https://color.adobe.com/Tropical-Vacation-2013-color-theme-2218684/?showPublished=true)
- Pick a font with [Google fonts](https://fonts.google.com)
- Look up CSS, Javascript and HTML with [MDN](https://developer.mozilla.org/en-US/)
