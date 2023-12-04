# Google Clone with ReactJs

This is a Google search clone created using React.js, Tailwind CSS, Vite, and the Google Search API. It provides features like debounced search,autocomplete suggestions, and displays search results along with images, pagination and multilingual support using Google Translate. The Context API is used for state management for searching images.


## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)


## Demo

You can access the live demo of the Google Clone here: [Demo Link](https://google-clone-frontend.netlify.app)

## Features

- **Google Search Integration:** Perform a Google search with the provided search query.
- **Voice Recognition:** Use your microphone to perform a voice search.
- **Autocomplete Suggestions:** Display search suggestions as you type.
- **Search Results:** Show search results including web pages and images.
- **Multilingual Support:** Explore content in multple langugages using Google Translate
- **Pagination:** Easily Navigate through search results with pagination.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/Google-Clone.git
   ```

2. Change the working directory:

   ```bash
   cd Google-Clone
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Configuration

To use the Google Search API and Speech Recognition features, you need to configure the necessary API keys and credentials. Create a `.env.local` file in the project root and add the following variables:

```dotenv
VITE_GOOGLE_SEARCH_API_KEY=YOUR_GOOGLE_API_KEY
VITE_GOOGLE_CX_KEY=YOUR_GOOGLE_CX
```


## Usage

To start the development server, run:

```bash
npm run dev
```

This will start the development server at `http://localhost:3000`.

## Technologies Used

- React.js
- Tailwind CSS
- Vite
- Google Search API
- Context API


## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.

