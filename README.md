# Model-View-Controller (MVC): Tech Blog

Built from scratch, this is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.
> **Note**: This application is deployed on Heroku. The app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
## Why

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Table of Contents

- [Preview](#preview)
- [Important](#important)
- [Features](#features)
- [License](#license)
- [Contribute](#contribute)
- [Resources](#resources)

## Preview

The following animation demonstrates the application functionality:

![Animation cycles through signing into the app, clicking on buttons, and updating blog posts.](./Assets/mvc-demo-01.gif) 

## Important

The application’s folder structure must follow the Model-View-Controller paradigm. The [express-handlebars](https://www.npmjs.com/package/express-handlebars) package to implement Handlebars.js was used for Views, [MySQL2](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for Models, and create an Express.js API for Controllers.

Also use thy [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

**Note**: The [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and you do not have to do anything to the application other than implement the npm package.

## Features

`CREATE user account`

`LOGIN to Account`

`ADD post to blog`

`VIEW all posts`

`ADD comments to posts`

`REMOVE added posts from blog`

`VIEW all posts and new comments`

## License

This project license is under the [MIT](https://opensource.org/licenses/MIT)

## Contribute

Git fork. Pull request

## Resources

* [MySQL2](https://www.npmjs.com/package/mysql2)

* [Sequelize](https://www.npmjs.com/package/sequelize)

* [dotenv](https://www.npmjs.com/package/dotenv)

* [bcrypt package](https://www.npmjs.com/package/bcrypt)

* [Express.js Demo](https://expressjs.com/en/starter/hello-world.html)

* [Express.js basic-routing](https://expressjs.com/en/starter/basic-routing.html)

* [Serving static files in Express](https://expressjs.com/en/starter/static-files.html)

* [Express.js – app.delete() Method](https://www.tutorialspoint.com/express-js-app-delete-method)

* [express-handlebars](https://www.npmjs.com/package/express-handlebars)

* [express-session](https://www.npmjs.com/package/express-session)

* [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
