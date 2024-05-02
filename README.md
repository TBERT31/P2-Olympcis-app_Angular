[![forthebadge](https://forthebadge.com/images/badges/cc-0.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)

# Olympic App

Summary of the Olympic Games and country data formatting.

## Technologies
- TypeScript
- SCSS
- Angular

## Contribute to the project

Olympic App is an open-source project. Feel free to fork the source code and contribute with your own features.

# OlympicGamesStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

Do not forget to install your node_modules before starting (`npm install`).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Application Functional Description

### Header

You can navigate using the navigation bar.

Two pages are available in this application.

### Dashboard Page
The first "dashboard" page displays the number of medals per country for the various Olympic Games listed. 
The first block below the title "Medals per country" shows the number of Olympic Games listed. 
The second block below the title "Medals per country" displays the number of countries participating in these Games.

There is a pie chart showing the distribution of medals by country, with a legend indicating the color representing each country.

You can navigate to the detail page of a specific country by clicking on the country in the pie chart or in the legend.

Below, there is a table listing the id and name of the concerned country, and the number of medals it has won. You can click on a country's row to go to the relevant detail page.

### Detail Page

The detail page is headed by the name of the concerned country. 
The first block shows the number of years the country has participated, and the second block shows the number of medals it has won. 
Finally, the third block displays the number of athletes from the concerned country who participated in the Olympic Games.

Below this, there is a line chart showing the number of medals won by the country according to the year of participation.

Below, a table details for each year of participation the number of medals won and the number of athletes who competed for the selected country. 

You can go back to dashboard page by clicking on the table lines. 

## Authors

Main developer: Thomas Berteau
