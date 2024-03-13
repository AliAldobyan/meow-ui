
# Meow UI

## Description

Meow UI is a web application built using Next.js with TypeScript. It allows users to interact with The Cat API to retrieve cat breeds and perform actions such as liking, disliking, and favoriting cat images. Users can also access the Favorites page to view all the images they have favorited.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Deployment](#deployment)
- [License](#license)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/AliAldobyan/meow-ui
    ```

2. Create a `.env.local` file in the root directory of the project and add the following environment variables:

    ```plaintext
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
    CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
    NEXT_PUBLIC_API_KEY=YOUR_CAT_API_KEY
    ```

    
## Usage

1. Install the dependencies:

        ```bash
        npm install
        ```


2. Start the development server:

        ```bash
        npm run dev
        ```

3. Open your browser and navigate to `http://localhost:3000`.

## Technologies

The following technologies were used in this project:

- Next.js
- TypeScript
- Clerck (for authentication)


## Deployment

The project is deployed on Netlify. You can access the deployed app at [https://main--famous-cheesecake-6f0f21.netlify.app/](https://main--famous-cheesecake-6f0f21.netlify.app/).


## License

This project is licensed under the [MIT License](LICENSE).

