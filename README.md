# My learnings from NextJs

## What is Next.js?

The docs define Next.js as **The React Framework for Production**.

But why a framework for react, isn't React enough to start building applications. Well

- React is a library for building user interfaces, it is responsible only the view layer of the application.

- Now if you think of building applications with just **React**. Its is not really possible to build to full feature rich application ready to be deployed for production just with it.

- As a developer have to make decisions on who to implement different features like routing, styling, authentication, backend api etc.

Well Next.js on the other hand is framework(a complete solution with its own opinionated rules of building an app).

- A package that uses React for building user interfaces.

- Loaded with a lot more features that enable you to build full fledged production readu applications. Features exactly like routing, styling, authentication, bundle optimization, backend apis etc.

- As mentioned before, its has some opinions and conventions that needs to followed to implement the above said features.

## Why Next.js?

Next.js simplifies the process of building a react application for production by abstracting a lot of things.
Some of the features that Next.js provides-

- File based Routing.
- Pre-rendering.
- API routes.
- Support CSS modules.
- Authentication.
- Dev and Prod build system.

## Routing

Next js has an opiniated way of routing all the screens/pages, its called **File Based Routing**.

### Routing with Pages.

- All the files( react component ) created in the pages folder corresponds to paths with similar names on the app.
- You can also just create a subfoler inside the pages folder and create an index.js file inside that folder, the react, a new route will me created with the same name as that of the subfolder and it will reside the react component(or page) you just created in that index.js file.
