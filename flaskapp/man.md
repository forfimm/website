# man for setting up the env. Use python 3.6
* `source activate fimm` //if using conda/anaconda
* `workon fimm` // if using virtualenv
* `pip install flask`

## man for running
* `export FLASK_APP=flaskapp`
* `export FLASK_DEBUG=true` //invert for production
* `pip install -e .` from library root, where setup.py is located
* `flask run`

## possible TODOs
* enable API for gui-less access to data, for ease of integration in other services
* enable user authorization (potentially giving accesss to different data depths)
* cache the *.js static stuff and minify it to decrease load time
* use bootstrap css for mobile data viz and much prettier UI
* add cool D3 stuff, like interactive controls and bidirectional callbals from graph <-> elements and back
* work on loading of static files using async or defer on less usefull stuff
* set favicon from default :)
* think of better system for labeling the wells. It is not robust with case/ifs
