from app.models import db, Category

def seed_categories():
  CSS = Category(cat='CSS')
  JavaScript = Category(cat='JavaScript')
  Python = Category(cat='Python')
  Git_Github = Category(cat='Git-Github')
  Searchables = Category(cat='Searchables')
  HTML = Category(cat='HTML')
  Commandline = Category(cat='Commandline')
  ToyProblems = Category(cat='ToyProblems')
  Chrome = Category(cat='Chrome')
  BooleanAlgebra = Category(cat='BooleanAlgebra')
  Promises = Category(cat='Promises')
  APIs = Category(cat='APIs')
  BigO = Category(cat='BigO')
  Express = Category(cat='Express')
  Auth = Category(cat='Auth')
  React = Category(cat='React')
  Redux = Category(cat='Redux')
  DataBases = Category(cat='DataBases')





  db.session.add(CSS)
  db.session.add(JavaScript)
  db.session.add(Python)
  db.session.add(Git_Github)
  db.session.add(Searchables)
  db.session.add(HTML)
  db.session.add(Commandline)
  db.session.add(ToyProblems)
  db.session.add(Chrome)
  db.session.add(BooleanAlgebra)
  db.session.add(Promises)
  db.session.add(APIs)
  db.session.add(BigO)
  db.session.add(Express)
  db.session.add(Auth)
  db.session.add(React)
  db.session.add(Redux)
  db.session.add(DataBases)

  db.session.commit()



def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
