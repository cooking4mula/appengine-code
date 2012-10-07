appengine-code
==============

Code for webserver using google appengine

Source code repository : http://www.github.com
Source code manager: git  (similar to perforce)
Code location : https://github.com/cooking4mula/appengine-code
username : cooking4mula@gmail.com
password : you know what

Getting started with code

One time setup
(Download and install git)
$ cd my favorite directory
$ mkdir cooking4mula
$ cd cooking4mula
$ git init

$ git config --global user.name "Sushma"
$ git config --global user.email "cooking4mula@gmail.com"
$ git config --global credential.helper cache
$ git config --global credential.helper 'cache --timeout=604800'

$ git clone https://github.com/cooking4mula/appengine-code.git
$ cd appengine-code
$ git remote add upstream https://github.com/cooking4mula/appengine-code.git

Every just before you start to code
$ git fetch upstream
$ git merge upstream/master

Makes code changes
$ vim appengine-code/filename
$ git add appengine-code/filename
$ git commit -m 'changed backround color of home page'
