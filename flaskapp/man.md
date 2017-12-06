## man for setting up the env. Use python 3.6
* setup env of choice (conda/anaconda/virtualenv and activate it
* `pip install flask`

## man for running
* `export FLASK_APP=flaskapp`
* `export FLASK_DEBUG=true` //choose false if used for production. If windows, use setx or info from [here](https://www.java.com/en/download/help/path.xml) 
* `pip install -e .` from library root, where setup.py is located
* `flask run`

## Modifications
* wells in first row that have been covered by the dropdown menu on the image are programmed as empty. As it is the only class that was not used in the rest of the plate.
* a number of drugs that are also covered by the dropdown have been gathered from the internet

## possible TODOs
* enable API for gui-less access to data, for ease of integration in other services
* enable user authorization (potentially giving accesss to different data depths depending on user access rights)
* cache the *.js/*.css static files and minify them to decrease load time
* use bootstrap css for mobile/cross platform viz and much prettier UI
* add cool D3 stuff, like interactive controls and bidirectional callbacks from graphs <-> document elements 
* work on loading of static files using async or defer on less usefull stuff
* set favicon :)
* think of better system for labeling the wells. It is not robust with case/ifs
