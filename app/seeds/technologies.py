from sqlalchemy.orm import session
from app.models import db, Technology

def seed_technologies():
    """Add default technologies to the database."""
    # Add the default technologies to the database.
    python = Technology(name='Python',
                        description='Python is a high-level, general-purpose programming language.',
                        cat_id=(3),
                      )
    flask = Technology(name='Flask',
                        description='Flask is a microframework for Python based on Werkzeug, Jinja2 and good intentions.',
                        cat_id=(18),
                      )
    vanillaCSS = Technology(name='Vanilla CSS',
                        description='Vanilla CSS is a type of CSS that is essentially CSS without any of the new stuff.',
                        cat_id=(1),
                      )
    bootstrap = Technology(name='Bootstrap',
                        description='Bootstrap is a web development framework that uses Twitter Bootstrap as its base.',
                        cat_id=(1),
                      )
    sqlAlchemy = Technology(name='SQLAlchemy',
                        description='SQLAlchemy is a Python object-relational mapper (ORM) for the Python programming language.',
                        cat_id=(18),
                      )
    readline = Technology(name='Readline',
                        description='Readline is a general-purpose library for line editing.',
                        cat_id=(7),
                      )
    asyncawait = Technology(name='Async/await',
                        description='Async/await is a new keyword that lets you write asynchronous code using the syntax of coroutines.',
                        cat_id=(11),
                      )
    fetchApi = Technology(name='Fetch API',
                        description='Fetch API is a library for accessing public Fetch APIs.',
                        cat_id=(12),
                      )
    Node = Technology(name='Node.js',
                        description='Node.js is a JavaScript runtime engine written in JavaScript.',
                        cat_id=(5),
                      )
    HTML = Technology(name='HTML',
                        description='HTML is the standard markup language for creating web pages.',
                        cat_id=(6),
                      )
    PUG = Technology(name='PUG',
                        description='PUG is a html templating language.',
                        cat_id=(6),
                      )
    csrf = Technology(name='CSRF',
                        description='CSRF is a technique for Preventing Cross-Site Request Forgery (CSRF) attacks.',
                        cat_id=(15),
                      )
    oauth = Technology(name='OAuth',
                        description='OAuth is an open-source framework for secure client-server web application integration.',
                        cat_id=(15),
                      )
    Redux = Technology(name='Redux',
                        description='Redux is a JavaScript library for creating web APIs.',
                        cat_id=(17),
                      )
    React = Technology(name='React',
                        description='React is a JavaScript library for creating web APIs.',
                        cat_id=(17),
                      )
    psql = Technology(name='PostgreSQL',
                        description='PostgreSQL is a relational database management system.',
                        cat_id=(18),
                      )
    mongodb = Technology(name='MongoDB',
                        description='MongoDB is a document-oriented NoSQL database.',
                        cat_id=(18),
                      )
    heroku = Technology(name='Heroku',
                        description='Heroku is a platform for building and managing web applications.',
                        cat_id=(18),
                      )
    wtforms = Technology(name='WTForms',
                        description='WTForms is a library for creating web forms.',
                        cat_id=(18),
                      )
    rubyonrails = Technology(name='Ruby on Rails',
                        description='Ruby on Rails is a web framework for the Ruby programming language.',
                        cat_id=(18),
                      )
    scss = Technology(name='SCSS',
                        description='SCSS is a CSS preprocessor.',
                        cat_id=(1),
                      )
    sequelize = Technology(name='Sequelize',
                        description='Sequelize is an ORM library.',
                        cat_id=(18),
                      )
    javascript = Technology(name='JavaScript',
                        description='JavaScript is a high-level programming language.',
                        cat_id=(2),
                      )
    go = Technology(name='Go',
                        description='Go is a programming language.',
                        cat_id=(18),
                      )



    db.session.add(python)
    db.session.add(flask)
    db.session.add(vanillaCSS)
    db.session.add(bootstrap)
    db.session.add(sqlAlchemy)
    db.session.add(readline)
    db.session.add(asyncawait)
    db.session.add(fetchApi)
    db.session.add(Node)
    db.session.add(HTML)
    db.session.add(PUG)
    db.session.add(csrf)
    db.session.add(oauth)
    db.session.add(Redux)
    db.session.add(React)
    db.session.add(psql)
    db.session.add(mongodb)
    db.session.add(heroku)
    db.session.add(wtforms)
    db.session.add(rubyonrails)
    db.session.add(scss)
    db.session.add(sequelize)
    db.session.add(javascript)
    db.session.add(go)

    db.session.commit()


def undo_technologies():
    db.session.execute('TRUNCATE technologies RESTART IDENTITY CASCADE;')
    db.session.commit()
