# CS465-fullstack
CS-465 Full Stack Development with Mean

# Architecture
For this particular project, I employed Express and Angular as my frontend architectures, utilizing HTML and JS. On the customer-facing side, I generated HTML documents with JavaScript to display my data, which was delivered by Express. Employing the MVC architecture, multiple pages were loaded one at a time as requested by the user. On the admin-facing side, I utilized Angular and designed multiple components. These components were preloaded, resulting in a seamless user experience for admins to navigate around. Instead of fetching and caching a new page, the code was already stored on the client-side, waiting to be invoked. Regarding the backend, I employed MongoDB, a NoSQL database that works exceptionally well with Node.JS.

# Functionality
In this project, I used a common data format, JSON, to store and display information. JSON is widely used for data transfer between servers and clients, as it presents data in a user-friendly object format. JavaScript, a popular programming language, was used to control the behavior of the web pages. The data was stored in MongoDB in BSON format, which is a binary representation of JSON. By converting the BSON format to JSON, the data could be used with TypeScript and Handlebars to seamlessly integrate the frontend and backend.

Handlebars was particularly useful in displaying data in a programmatic way, resulting in efficient code. Similarly, Angular's ngFor loop allowed me to easily display data with minimal code, making it a useful tool in my development process. Additionally, Angular's component-based architecture was efficient, enabling the reuse of the same component across multiple pages, resulting in cleaner code.

# Testing
To ensure secure transmission of data, we encrypted passwords and used hashes instead of transmitting raw passwords to and from the database. It's crucial to keep these hashes off of public platforms like GitHub. Creating database interfaces can help protect against attacks like SQL Injection. Additionally, we made sure to verify user or admin permissions before allowing them to perform certain actions via the API. This helped to enhance overall security and protect against potential vulnerabilities.

# Reflection
Entering into full stack development can be challenging due to the vast array of frameworks and stacks available. However, this course was beneficial because it required me to remain dedicated to a single stack throughout the entire project. This approach helped me gain a deeper understanding of Node.JS, MongoDB, Express, and how they seamlessly integrate to create a flexible development environment. Overall, the course enabled me to strengthen my skills and knowledge in these areas.
