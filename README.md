# Map Coordinate Saver

This is a small web application developed using .NET, ASP.NET Core Web API, and Angular CLI. The application allows users to save map coordinates to a database.
![image](https://github.com/oozguroo/MapApp/assets/24260940/38e2487d-464e-4899-839d-6adaf3c9d855)

## Technologies Used

- .NET
- ASP.NET Core Web API
- Angular CLI

## Prerequisites

- .NET SDK Version: 7.0.402
- Angular CLI: 16.1.8
- Node: 18.10.0
- Package Manager: npm 8.19.2
- OS: win32 x64

 ## Backend Technologies

This project uses the following packages for the backend:

- Microsoft.AspNetCore.OpenApi Version 7.0.12: This package is used to generate the OpenAPI documentation for the API.
- Microsoft.EntityFrameworkCore.Design Version 7.0.13: This package provides design-time services for Entity Framework Core. It's typically used to create database contexts and perform migrations.
- Microsoft.EntityFrameworkCore.SqlServer Version 7.0.13: This package is the SQL Server database provider for Entity Framework Core.
- Microsoft.EntityFrameworkCore.Tools Version 7.0.13: This package provides additional design-time tools for Entity Framework Core, such as the ability to create migrations scripts.

Please ensure that you have these packages installed before you try to run the project.


## Angular Libraries Used

- animations, common, compiler, compiler-cli, core, forms
- platform-browser, platform-browser-dynamic, router

## Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate into the project directory: `cd <project-name>`
3. Install the required npm packages: `npm install`
4. Install Leaflet library: `npm install leaflet@1.7.1 --legacy-peer-deps`
5. Install ngx-leaflet library: `npm install @asymmetrik/ngx-leaflet --legacy-peer-deps`
6. Install Leaflet types: `npm install --save-dev @types/leaflet --legacy-peer-deps`
7. Start the application: `ng serve`

## Usage

After starting the application, you can navigate to `https://localhost:4200/points` in your web browser to use the application.
The application interacts with the API endpoint at `https://localhost:5001/api/points` to perform operations on the points data.
This API endpoint is responsible for handling requests related to points data, such as retrieving, creating, downloading , and deleting points.
