<p align='center'>
  <img src='./react-app/public/favicon.ico' height='200px'>
</p>

# prodocs
prodocs is an app where you can collect different resources and reference a long list of prepopulated ones. You can also keep track of and edit projects that you're working on. It is a fullstack React App made with a Redux state manager and a backend using Python, Flask, SQL-Alchemy, and PostgresSQL and GitHubs' API.

* View the <a href='https://prodocs.herokuapp.com/'>prodocs</a> App Live

* Reference to the prodocs github <a href='https://github.com/hnrywltn/pro_docs'>GitHub Page</a>

| Table of Contents |
| ----------------- |
| 1. [Features](#features) |
| 2. [Installation](#installation) |
| 3. [Future Features](#future-features) |
| 4. [Contact](#contact) |
| 5. [Special Thanks](#special-thanks) |


## Technologies
* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=JavaScript&logoColor=333333" /></a>
* <a href="https://www.postgresql.org/"><img src="https://img.shields.io/badge/-PostgreSQL-336791?logo=PostgreSQL&logoColor=white" /></a>
* <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white"></a>
* <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB"></a>
* <a href="https://redux.js.org/"><img src="https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white"></a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS3-1572B6?logo=CSS3" /></a>
* <a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" /></a>
* <a href="https://flask.palletsprojects.com/"><img src="https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white" /></a>
* <a href="https://www.heroku.com/home"><img src="https://img.shields.io/badge/Heroku-430098?style=flat&logo=heroku&logoColor=white" /></a>


## Features

### Sign In and Sign Up
![Sign Up](./readme-assets/images/signup.jpg)
![Login](./readme-assets/images/login.jpg)

### Resource Collection
prodocs feed displays all resources
Save and build your own resource collection.
![Home Page](./readme-assets/images/home.jpg)
![Resources](./readme-assets/images/home2.jpg)

### Github Searching
Search for other GitHub users and see lists of their public repos.
![github Page](./readme-assets/images/github.jpg)

### Project Collection
Add new projects and collect different projects you want to track.
![Project List](./readme-assets/images/projectForm.jpg)




## Installation
To build/run project locally, please follow these steps:

1. Clone this repository

```shell
git clone https://github.com/hnrywltn/pro_docs.git
```

2. Install Pipfile dependencies and create the virtual environment
```shell
pipenv install
```

2. Install npm dependencies for the `/react-app`

```shell
cd react-app
npm install
```

3. In the `/` root directory, create a `.env` based on the `.env.example` with proper settings

4. Setup your PostgreSQL user, password and database and ensure it matches your `.env` file

5. Before running any flask commands, confirm you are in the pipenv virtual env. If not, run the command:
```shell
pipenv shell
```

5. In the root folder, create the database by running in the terminal:
```shell
flask db create
```

6. In the root folder, migrate tables to the database by running in the terminal:
```shell
flask db migrate
```

7. In the root folder, seed the database by running in the terminal:
```shell
flask seed all
```

8. Start the flask backend in the `/` root directory
```shell
flask run
```

9. Start the frontend in the `/react-app` directory

```javascript
npm start
```





## Future Features

1. __Search__ - Search for resources

2. __Github Following and signing in via third party__ - Users will be able to sign in via github

3. __Documentation Generation__ - Users will be able to get basic templated documentation for their projects


## Contact

### Henry Walton
<a href="https://www.linkedin.com/in/hnrywltn/"><img src="./readme-assets/logos/linkedin-logo.png" height="28" align="middle" /></a>
<a href="https://angel.co/u/henry-walton-3"><img src="./readme-assets/logos/angellist-logo.png" height="28" align="middle" /></a>
<a href="https://github.com/hnrywltn"><img src="./readme-assets/logos/github-logo.png" height="38" align="middle" /></a>

hnrywltn@gmail.com


## Special Thanks
* Fellow peers who have given me support and community: [Andrew](https://github.com/andru17urdna), [Pierre](https://github.com/TheGuilbotine), [Lema](https://github.com/lemlooma), [Meagan](https://github.com/meagan13), [Simon](https://github.com/Simonvargas), [Michelle](https://github.com/michellekontoff), [Nico](https://github.com/nicopierson), [John](https://github.com/Jomix-13), [Manna](https://github.com/makon57), and [Monte](https://github.com/theflaggship)
* Mentors who have given me their time and effort: [Caleb](https://github.com/CalebAmes), [Ed](https://github.com/edherm), and [Javier](https://github.com/javiermortiz)
