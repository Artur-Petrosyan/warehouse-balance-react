# Warehouse Balance

The "Warehouse Balance" project is a web application for inventory management of goods in a warehouse. It provides a user-friendly interface for loading XML data, displaying information, and navigating through pages. The application is hosted at [նեթ.հայ](https://նեթ.հայ).

## Usage

1. **Data Loading:**
    - Download the XML file.
    - Click "Choose File" and select the downloaded XML.

2. **Data Display:**
    - Click "Open File" to load data.
    - View information about goods.
## Demo

![ezgif.com-gif-maker.gif](src%2Fassets%2Fgif%2Fezgif.com-gif-maker.gif)

3. **Navigation:**
    - Use pagination to navigate.

4. **Customization:**
    - Customize styles in styles.css.
## Installation and Run

1. Install dependencies:


bash
npm install


2. **Start the project:**


```bash
npm run dev
```
```bash
npm run prod
```
```bash
npm start
```

## Project Structure

The project is organized into the following structure:

- `src/`: Source files of the project
    - `core/`: Core logic of the application
    - `lib/`: Libraries and utilities
    - `ui/`: User interface components
- `styles.css`: Style file
- `index.js`: Entry point for JavaScript
- `index.html`: HTML template
- `dist/`: Folder with the compiled project after running `npm run prod`

## Used Technologies

- **Webpack:** Build and dependency management.
- **HTMLWebpackPlugin:** Generation of HTML files based on a template.
- **MiniCssExtractPlugin:** Extraction of CSS into a separate file.
- **CleanWebpackPlugin:** Cleaning the build folder before a new build.
- **CopyWebpackPlugin:** Copying files to the build folder.
- **CSS Loader:** Loading CSS files.
- **File Loader and URL Loader:** File (image) handling during build.

## Scripts

- `npm run dev`: Start the project in development mode.
- `npm run prod`: Build the project for production.
- `npm start`: Start the project in production mode with a local server.

## Domain

This project is hosted at [նեթ.հայ](https://նեթ.հայ) and is accessible for use.

## Author

**Artur Petrosyan**

## License

This project is licensed under the ISC license. See the LICENSE file for details.