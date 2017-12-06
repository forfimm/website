from flaskapp import app
from flask import render_template

@app.route("/plate")
def plate():
    types = ['CD45+', 'Blasts_SSCvsCD45', 'Lymphocytes', 'Granulocytes', 'Monocytes', 'CD34+', 'CD14+', 'CD34+CD123+', 'CD34+CD123-']
    # counts = ['Raw Counts', 'Blue', 'Black', 'Orange']
    counts = ['Raw Counts']

    return render_template('plate.html', types=types, counts=counts, methods=['GET'])

