# React Adventure 🥽

This project is all about using ReactJS to build a front-end application. To demonstrate diffrent concepts of React, a food ordering app is built.

The application is built from scratch (not using *create-react-app* or *vite*). It uses *Parcel* as a bundler, *React Router* for client side routing, *Tailwind* to style the app, *React Context* and *Redux* to manage the states and *Jest* to test the app.

The application uses third-party APIs and shows list of restaurants with their ratings. The restaurants can be searched and filtered. Click on a restaurant brings the menu on the screen with items and their prices in different categories. The items can be added to the cart. The cart can be displayed and can be emptied by a click of the button. The app has *Grocery*, *About*, *Contact* pages with almost static content. The app also has custom *Error page* and *Shimmer UI*.

Following are the major packages in the application.

- React and React-DOM (to build the reactive front-end app)
- Parcel (bundler for the app)
  - Babel (transpiler)
  - BrowsersList (to support specific browsers)
- React Router (to support client-side routing)
- Tailwind CSS (to style the app)
- Redux Toolkit (to manage states of the app)
- Jest (to test the app)
- JSDOM (to emulate web browser)


**The app demonstrates following concepts**

- JSX
- Class components
- Function components
- React component life cycle
- Class components vs Function components
- Component composition
- State and Props
- CDN
- API calls
- Side effects
- Pure components
- Controlled and Uncontrolled components
- Prop drilling
- Lifting the state up
- Higher Order Components (HOC)
- React context
- React Hooks
  - useState
  - useEffect
  - useContext
- Custom hooks
- React component life cycle vs useEffect hook
- Redux Toolkit (RTK)
  - Redux Store
  - Redux Slices
  - Dispatchers
  - Actions 
  - Reducers 
  - Selectors
  - Hooks
    - useDispatch
    - useSelector
- React Router
  - Client side routing using Link
  - Child routing using Outlet
  - Hooks
    - useRouteError
- Lazy Loading and Suspense
- Shimmer UI
- Tailwind CSS with PostCSS
  - Utility classes
  - Adding dynamic classes
- React testing library
- Jest with JSDOM
  - Unit testing
  - Integration testing
  - Individual and groups of tests
  - Tests for asynchronous operations
  - Mock functions and mock data
