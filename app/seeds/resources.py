from app.models import db, Resource

def seed_resources():


  mdn = Resource(
    name="MDN",
    cat_id=5,
    ref_link="https://developer.mozilla.org/en-US/",
    description="A place to find Mozilla's descriptions. This is a great resource for javascript, HTML, CSS, etc...",
  )
  SalaryLevels = Resource(
    name="Salary Levels",
    cat_id=5,
    ref_link="https://www.levels.fyi/",
    description="This is a searchable database that allows you to see salary predictions and comparisons in the tech field.",
  )
  node = Resource(
    name="Node",
    cat_id=5,
    ref_link="https://nodejs.org/api/http.html",
    description="Node.js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.",
  )
  github = Resource(
    name="GitHub",
    cat_id=4,
    ref_link="https://github.com/",
    description="GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.",
  )
  LearnBranchingGame = Resource(
    name="Learn Branching Game",
    cat_id=4,
    ref_link="https://learngitbranching.js.org/",
    description="LearnBranchingGame is a game that helps you learn git branching. It's a simple game that uses git to branch and merge.",
  )
  AddingandCreatingGitHubrepos= Resource(
    name="Adding and Creating GitHub repos",
    cat_id=4,
    ref_link="https://docs.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line",
    description="This will help you add existing projects to gitHub using the command line",
  )
  gitignoreTool = Resource(
    name="Tool for creating gitignores",
    cat_id=4,
    ref_link="https://www.toptal.com/developers/gitignore",
    description="This is a tool for creating gitignore files. It's a simple tool that will help you create gitignore files for your projects.",
  )
  GHdocs = Resource(
    name="StackEdit",
    cat_id=4,
    ref_link="https://stackedit.io/app#",
    description="This is a site that helps you build markdown files for your wikis.",
  )
  Readmes = Resource(
    name="A curated list of good READMEs",
    cat_id=4,
    ref_link="https://github.com/matiassingers/awesome-readme",
    description="Elements in beautiful READMEs include, but are not limited to: images, screenshots, GIFs, text formatting, etc.",
  )
  mardownguide = Resource(
    name="Markdown Walkthrough",
    cat_id=4,
    ref_link="https://guides.github.com/features/mastering-markdown/",
    description="A walk through of mastering Markdown. Markdown is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown.",
  )
  git = Resource(
    name="Reason for git",
    cat_id=4,
    ref_link="https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control",
    description="This will help you understand why Git is around, why you should use it and you should be all set up to do so.",
  )
  videoofgitbasics= Resource(
    name="Youtube video of git basics",
    cat_id=4,
    ref_link="https://www.youtube.com/watch?v=8oRjP8yj2Wo",
    description="A meaningful discussion of the value of Git begins with a solid understanding of what version control is and what it does for software developers, document authors, and designers.",
  )
  videoofgithubbasics= Resource(
    name="Youtube video of GitHub for noobs",
    cat_id=4,
    ref_link="https://www.youtube.com/watch?v=1h9_cB9mPT8&t=13s",
    description="Github for Noobs is a great way to become familiar with the basics of Git and GitHub.",
  )
  videoofcommandlinefundamentals= Resource(
    name="Youtube video of commandline fundamentals",
    cat_id=4,
    ref_link="https://www.youtube.com/watch?v=HVsySz-h9r4",
    description="In this video, we'll go over the basics of what git is and how to use it within the command-line.",
  )
  htmloverview= Resource(
    name="https://webapps-for-beginners.rubymonstas.org/html.html",
    cat_id=6,
    ref_link="https://webapps-for-beginners.rubymonstas.org/html.html",
    description="This is a great overview of HTML, and will get you started",
  )
  htmltool= Resource(
    name="Tool for showing differences between tags",
    cat_id=6,
    ref_link="https://htmlreference.io/",
    description="This has a searchable database that compares different HTML tags",
  )
  videoofforms= Resource(
    name="Youtube video of basic forms",
    cat_id=6,
    ref_link="https://www.youtube.com/watch?v=vj78j_Sy3uM",
    description="This video will help you get started with HTML forms. It's a great way to learn the basics of HTML forms.",
  )
  csstricks= Resource(
    name="CSS Tricks",
    cat_id=1,
    ref_link="https://css-tricks.com/",
    description="These days CSS-Tricks is really about building websites and all that entails, mostly from a front-end perspective.",
  )
  csstool= Resource(
    name="Tool for showing differences between tags",
    cat_id=1,
    ref_link="https://cssreference.io/",
    description="This has a searchable database that compares different CSS tags",
  )
  declarations= Resource(
    name="Basics about declaration",
    cat_id=1,
    ref_link="https://www.codecademy.com/learn/learn-css/modules/learn-css-selectors-visual-rules/cheatsheet",
    description="Basics about declaration and this is also a searchable database.",
  )
  googlefonts= Resource(
    name="Google Fonts",
    cat_id=1,
    ref_link="https://fonts.google.com/",
    description="Database of importable google fonts",
  )
  materialicons= Resource(
    name="Google Material Icons",
    cat_id=1,
    ref_link="https://fonts.google.com/icons?selected=Material+Icons",
    description="Database of importable material icons by google <3",
  )
  froggy= Resource(
    name="FlexBox Froggy Game",
    cat_id=1,
    ref_link="https://flexboxfroggy.com/",
    description="A game that teaches you a lot about flex",
  )
  gridgarden= Resource(
    name="Grid Garden Game",
    cat_id=1,
    ref_link="http://cssgridgarden.com/",
    description="A game that teaches you a lot about grid",
  )
  noperson = Resource(
    name="Resource! THISPERSONDOESNOTEXIST",
    cat_id=1,
    ref_link="https://thispersondoesnotexist.com/",
    description="This app uses AI to create a high res photo of a fake person. You can use these pics without worrying about copyright",
  )
  flashcards= Resource(
    name="Basic CommandLine Flashcards",
    cat_id=7,
    ref_link="https://flashcards.github.io/command_line/introduction.html",
    description="The command line is a text interface for your computer. It’s a program that takes in commands, which it passes on to the computer’s operating system to run.",
  )
  videolinux= Resource(
    name="Video Series on Linux Commands",
    cat_id=7,
    ref_link="https://www.youtube.com/playlist?list=PLT98CRl2KxKHaKA9-4_I38sLzK134p4GJ",
    description="One of my most-watched Linux tutorial series with over 100,000 views and counting!",
  )
  booklinux= Resource(
    name="A book on Linux/Cmmnd Line",
    cat_id=7,
    ref_link="http://conqueringthecommandline.com/book/basics",
    description="Learn to master and conquer the most valuable and useful command line tools for Unix and Linux based systems. In this book you will find not only the most useful command line tools you need to know, but also the most helpful options and flags for those tools.",
  )
  readline  = Resource(
    name="Readline Documentation",
    cat_id=7,
    ref_link="https://nodejs.org/api/readline.html#readline_readline",
    description="Readline is a library for parsing and interpreting the command line.",
  )
  leetcode= Resource(
    name="LeetCode",
    cat_id=8,
    ref_link="https://leetcode.com/",
    description="A place to pratice and prove your javascript skills.",
  )
  Edabit= Resource(
    name="Edabit",
    cat_id=8,
    ref_link="https://edabit.com/",
    description="A great site full of searchable toy problems based on difficulty.",
  )
  codewars= Resource(
    name="Codewars",
    cat_id=8,
    ref_link="https://www.codewars.com/dashboard",
    description="A place to pratice and prove your coding skills.",
  )
  replit= Resource(
    name="Repl.it",
    cat_id=8,
    ref_link="https://replit.com/",
    description="A repl to try small ideas out. Everything you put in their repl, they technically own",
  )
  breakpoints= Resource(
    name="Breakpoints",
    cat_id=9,
    ref_link="https://developer.chrome.com/docs/devtools/javascript/breakpoints/",
    description="What are breakpoints and how to use them.",
  )
  videofordebugger= Resource(
    name="Intro walk-through of Chrom debugger",
    cat_id=9,
    ref_link="https://developer.chrome.com/docs/devtools/javascript/",
    description="This video will help you get started with the Chrome Debugger.",
  )
  cdbbuttons= Resource(
    name="Overview of debugger buttons",
    cat_id=9,
    ref_link="https://developer.chrome.com/docs/devtools/javascript/reference/#stepping",
    description="An overview of the different debugging buttons.",
  )
  videodebugcss= Resource(
    name="A video of debugging CSS",
    cat_id=9,
    ref_link="https://www.youtube.com/watch?v=Z3HGJsNLQ1E",
    description="This video will help you get started with CSS debugging.",
  )
  devtooldocs= Resource(
    name="Dev Tools Documentation",
    cat_id= 9,
    ref_link="https://developer.chrome.com/docs/devtools/",
    description="DevTools Documentation",
  )
  BooleanCS= Resource(
    name="Logic CheatSheet",
    cat_id=10,
    ref_link="https://assets.aaonline.io/Module-Solo-Prep-Work/assets/logic-cheat-sheet-1.1.pdf",
    description="A logic sheet in PDF form",
  )
  aawait= Resource(
    name="Async/Await",
    cat_id=11,
    ref_link="https://javascript.info/async-await",
    description="There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. It’s surprisingly easy to understand and use.",
  )
  promiseclass= Resource(
    name="Promise Class",
    cat_id=11,
    ref_link="https://javascript.info/promise-api#promise-resolve-reject",
    description="There are 6 static methods in the Promise class. We’ll quickly cover their use cases here.",
  )
  adefer= Resource(
    name="Async/Defer",
    cat_id=11,
    ref_link="https://flaviocopes.com/javascript-async-defer/",
    description="When loading a script on an HTML page, you need to be careful not to harm the loading performance of the page. Depending on where and how you add your scripts to an HTML page will influence the loading time",
  )
  fetch= Resource(
    name="Fetch API docs",
    cat_id=12,
    ref_link="https://www.npmjs.com/package/fetch",
    description="The fetch API",
  )
  searchforapis= Resource(
    name="Search for API's",
    cat_id=12,
    ref_link="https://devresourc.es/tools-and-utilities/public-apis",
    description="Search for public APIs",
  )
  bigo= Resource(
    name="Video introduction of Big-O Notation",
    cat_id=13,
    ref_link="https://www.youtube.com/embed/kS_gr2_-ws8",
    description="A video on how to use Big-O Notation",
  )
  bigograph= Resource(
    name="BigO graph CheatSheet",
    cat_id=13,
    ref_link="https://www.bigocheatsheet.com/",
    description="A visual of common bigO.",
  )
  bigotool= Resource(
    name="BigO Tool",
    cat_id=13,
    ref_link="https://www.wolframalpha.com/",
    description="WolframAlpha tool",
  )
  # = Resource(
  #   name=,
  #   cat_id=,
  #   ref_link=,
  #   description=,
  # )
  # = Resource(
  #   name=,
  #   cat_id=,
  #   ref_link=,
  #   description=,
  # )


  db.session.add(mdn)
  db.session.add(SalaryLevels)
  db.session.add(node)
  db.session.add(github)
  db.session.add(LearnBranchingGame)
  db.session.add(AddingandCreatingGitHubrepos)
  db.session.add(gitignoreTool)
  db.session.add(GHdocs)
  db.session.add(Readmes)
  db.session.add(mardownguide)
  db.session.add(git)
  db.session.add(videoofgitbasics)
  db.session.add(videoofcommandlinefundamentals)
  db.session.add(htmloverview)
  db.session.add(htmltool)
  db.session.add(videoofforms)
  db.session.add(csstricks)
  db.session.add(csstool)
  db.session.add(declarations)
  db.session.add(googlefonts)
  db.session.add(materialicons)
  db.session.add(froggy)
  db.session.add(gridgarden)
  db.session.add(noperson)
  db.session.add(flashcards)
  db.session.add(videolinux)
  db.session.add(booklinux)
  db.session.add(readline)
  db.session.add(leetcode)
  db.session.add(Edabit)
  db.session.add(codewars)
  db.session.add(replit)
  db.session.add(breakpoints)
  db.session.add(videofordebugger)
  db.session.add(cdbbuttons)
  db.session.add(videodebugcss)
  db.session.add(devtooldocs)
  db.session.add(BooleanCS)
  db.session.add(aawait)
  db.session.add(promiseclass)
  db.session.add(adefer)
  db.session.add(fetch)
  db.session.add(searchforapis)
  db.session.add(bigo)
  db.session.add(bigograph)
  db.session.add(bigotool)




  db.session.commit()









def undo_resources():
    db.session.execute('TRUNCATE resources RESTART IDENTITY CASCADE;')
    db.session.commit()
