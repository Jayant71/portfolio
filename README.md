

# Personal Portfolio Website - Jayant Patel


This is my personal portfolio website, designed to showcase my skills, experience, education, projects, and publications in the field of Research & Development Engineering, with a specialization in Machine Learning, Computer Vision, and Artificial Intelligence.


## Features

*   **Dynamic Content:**  All portfolio content (about me, education, experience, projects, skills, certifications, contact) is dynamically loaded from a configuration file (`js/config.js`), making it easy to update and maintain.
*   **Interactive Particle Background:**  Engaging and visually appealing particle background animation created with Three.js.
*   **Responsive Design:**  Fully responsive layout that adapts to different screen sizes (desktops, tablets, and mobile devices) for optimal viewing experience.
*   **Smooth Navigation:** Smooth scrolling and navigation with active link highlighting.
*   **Clean and Modern Design:**  Utilizes a modern, clean, and professional design aesthetic with a dark theme.
*   **Showcase Sections:** Dedicated sections to highlight:
    *   About Me
    *   Education
    *   Experience
    *   Projects
    *   Publications
    *   Skills
    *   Certifications
    *   Contact Information

## Technologies Used

*   **HTML:**  For structuring the website content.
*   **CSS:** For styling and layout, including custom styles and a CSS reset for consistency.
*   **JavaScript:** For website functionality, dynamic content loading, background animation, and navigation handling.
*   **Three.js:**  JavaScript 3D library for creating the particle background.
*   **GSAP (GreenSock Animation Platform):** JavaScript library for smooth scrolling and animations.
*   **Font Awesome:** Icon library for visual enhancements.

## Setup and Installation

This is a static website, meaning it doesn't require a backend server. To run it locally:

1.  **Clone the repository** (replace with your actual repo URL):
    ```bash
    git clone https://github.com/Jayant71/portfolio.git
    cd portfolio
    ```
2.  **Open `index.html` in your web browser.**

To deploy the website, you can use static site hosting platforms like:

*   **GitHub Pages:** Host directly from your GitHub repository.
*   **Netlify:**  Easy deployment with continuous integration.
*   **Vercel:**  Another popular platform for static site hosting.

## Usage

*   **Customizing Content:** To modify the portfolio content (your name, about me text, education, experience, projects, etc.), edit the `js/config.js` file.  The `CONFIG` object within this file holds all the data for the website.
*   **Navigation:** Use the navigation menu at the top to jump to different sections of the portfolio.
*   **Responsiveness:**  Resize your browser window to see how the website adapts to different screen sizes.

## Customization

*   **Personal Information:** Update your details in the `CONFIG.about` section of `js/config.js`.
*   **Education, Experience, Projects, Publications, Certifications:** Modify the respective arrays in `js/config.js` to reflect your own information.
*   **Skills:**  Update the `CONFIG.skills` object in `js/config.js` to list your skills and technologies. You can also change the icons (using Font Awesome classes).
*   **Background:** Customize the particle background by modifying the `CONFIG.background` settings in `js/config.js`.
*   **Styling:**  Further customize the website's appearance by editing the CSS in `css/style.css`.

## Author

**Jayant Patel** - [github.com/Jayant71](https://github.com/Jayant71) - [linkedin.com/in/jayantpatel71](https://linkedin.com/in/jayantpatel71)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. (You may need to create a LICENSE file if you choose to use the MIT license).
