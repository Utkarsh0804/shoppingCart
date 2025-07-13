# React Shopping Cart

This is a simple shopping cart application built with React and Tailwind CSS.

## Setup Instructions

To run this application, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd react-shopping-cart
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm start
    ```

## Approach Explanation

### Component Structure

The application is divided into the following components:

-   **`App.js`**: The main component that holds the application state and logic.
-   **`ProductList.js`**: Displays a list of available products.
-   **`ProductItem.js`**: Displays the details of a single product.
-   **`Cart.js`**: Displays the items in the shopping cart.
-   **`CartItem.js`**: Displays the details of a single item in the cart.
-   **`SuccessModal.js`**: Displays a modal for successful checkout after successfully submitted the form. 

### State Management

The application state is managed using the `useState` hook in the `App.js` component. The `cartItems` state is an array of objects, where each object represents a product in the cart.

The following functions are used to manage the cart state:

-   **`addToCart(product)`**: Adds a product to the cart or increments its quantity if it already exists.
-   **`updateQuantity(productId, newQuantity)`**: Updates the quantity of a product in the cart.
-   **`removeFromCart(productId)`**: Removes a product from the cart.

The state and the functions to manipulate it are passed down to the child components as props.

## I've also added few additional functionalities

-   **`removeOffer(productId)`**: Removes the applied offers.
-   **`setShowSuccessModal`**: Will show a modal after successfully submitted the form

# Deployed on vercel
## Please click on the below URL to visit the app
### url : - shopping-cart-8dso2lnh2-utkarsh-sahus-projects-62eef018.vercel.app
