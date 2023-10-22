# Rest country Project

This web application project is designed to meet the following requirements:

1. API Consumption: Data is fetched from a public API. For this project, we have chosen the [REST Countries API](https://restcountries.com/), which provides various sample endpoints for testing.

2. Display Data: The retrieved data is presented in a visually appealing and organized manner on the web application. We have focused on creating a clean and user-friendly design.

3. Navigation: The application implements navigation with at least two different views or pages. Svelte Kit's routing capabilities are utilized for this purpose.

4. State Management: State management is achieved through the use of Svelte's reactive features. Svelte stores is employed to manage application-wide state, ensuring data consistency. For instance, the dark mode switch button.

5. User Interaction: The application offers an interactive feature where users can search and filter data. A user input field is also provided for added interactivity.

6. Responsive Design: The web application is designed to be responsive and work seamlessly on both desktop and mobile devices, ensuring a consistent user experience.

7. Error Handling: Proper error handling is implemented to address situations where the API request fails or returns unexpected data. User-friendly error messages are displayed for clarity. We used svelte query to catch every error messages during mutation and query processes.

8. Code Quality: The code is well-structured and adheres to Svelte's component-based architecture and best practices, ensuring maintainability and readability.

9. Documentation: A comprehensive README.md file is provided with clear instructions on how to run the application locally. It explains design decisions, dependencies, and additional information to facilitate understanding and evaluation of the project.


## How to Run the Application Locally
To run this application on your local machine, follow these steps:


```bash
# Clone this repository to your local system:
git clone https://github.com/samuelige/rest-countries-sveltekit.git

# Navigate to the project directory:
cd rest-countries-sveltekit

# Install the project dependencies:
npm install

# Start the development server:
npm run dev
```

## Design Decisions

1. Homepage:

Feature: See all countries from the API on the homepage.
Design Decision: The homepage should provide a visually appealing, clean, and organized layout that showcases a list of countries. The list should include the country name and its flag, possibly arranged in a grid or list view. To enhance user experience, load the data asynchronously to ensure a smooth and responsive interface.

2. Search: 

Feature: Search for a country using an input field.
Design Decision: Implement a prominent search bar at the top of the homepage. Users can type in the name of a country, and the results should dynamically update as they type. This feature should provide instant feedback and allow users to quickly find the information they are looking for.

3. Filter:

Feature: Filter countries by region.
Design Decision: Offer a filter or dropdown menu near the search bar, enabling users to filter countries by region. A well-organized list of regions (e.g., Africa, Europe, Asia) should be easily accessible for users to refine their search.

4. Detail Page:

Feature: Click on a country to see more detailed information on a separate page.
Design Decision: Each country in the list should be clickable. Clicking on a country will take the user to a dedicated detail page. This page should display comprehensive information about the selected country, including details like population, currency, languages, and more. Use clear typography and visual hierarchy for improved readability.

5. Color Scheme: (Optional)

Feature: Toggle the color scheme between light and dark mode.
Design Decision: Offer a toggle switch or button in a prominent position to allow users to switch between light and dark modes. Dark mode can reduce eye strain and save energy, enhancing user comfort. Ensure that both color schemes are aesthetically pleasing and maintain readability.