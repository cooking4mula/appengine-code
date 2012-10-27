<pre>
--------------
One time setup
--------------
(Download and install http://git-scm.com/download)
$ cd my favorite directory
$ mkdir cooking4mula
$ cd cooking4mula
$ git init

$ git config --global user.name "Sush"
$ git config --global user.email "cooking4mula@gmail.com"
$ git config --global credential.helper cache
$ git config --global credential.helper 'cache --timeout=604800'

$ git clone https://github.com/cooking4mula/appengine-code.git
$ cd appengine-code
$ git remote add upstream https://github.com/cooking4mula/appengine-code.git

Download and install python - http://www.python.org/download/
Download and extract Google appengine sdk - https://developers.google.com/appengine/downloads#Google_App_Engine_SDK_for_Go

On linux you can do following, otherwise you will have to give complete path
$ vim ~/.bashrc
and add the following line at the end of the file.
export PATH=/path/to/google_appengine:${PATH}

----------------------------------------
Every time just before you start to code
----------------------------------------
$ git fetch upstream
$ git merge upstream/master

------------------
Makes code changes
-------------------
$ vim filename
$ git add filename
For help with html - http://www.w3schools.com/
For help with bootstrap javascript
 - http://twitter.github.com/bootstrap/javascript.html
 - http://www.9lessons.info/2012/03/bootstrap-tutorial-for-blog-design.html

-----------------
Testing your code
-----------------
$ cd cooking4mula/appengine-code
$ dev_appserver.py .
Now goto http://localhost:8080/

Hint: The server will automatically look for changes you do to files and run
      the latest code, no need restart server.

---------------------------------
Deploying your code to production
---------------------------------
$ appcfg.py update .

Goto http://cooking4mula.appspot.com and verify that your code has been pushed
correctly.

-------------------------------------------------------
Submit your code changes so other developers can use it
-------------------------------------------------------
$ git status
$ git commit -m 'changed backround color of home page'
$ git status
$ git push origin master
username : cooking4mula@gmail.com
password : you know what
Goto https://github.com/cooking4mula/appengine-code and check that your code has been submitted correctly.

--------------------------------------------------------------------------------
Want to learn more git commands? - See http://gitref.org
What's git? it's a source control like perforce.
</pre>