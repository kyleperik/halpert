from flask import Flask, render_template, request, abort
import os

import service
from service import page

app = Flask(__name__)
app.config.from_envvar('HALPERT_SETTINGS')
admin_key = app.config.get('ADMIN_KEY')

SITE_ROOT = os.path.realpath(os.path.dirname(__file__))

@app.route('/')
def index():
    return render_template('index.jinja')

@app.route('/pages/<path:path>', methods=['GET', 'POST'])
def page(path):
    if request.method == 'GET':
        return service.page.get(path)
    elif request.method == 'POST':
        post = request.get_data().decode()
        key = request.args.get('admin_key')
        if key != admin_key:
            abort(403)
        service.page.save(path, post)
        return ('', 204)

if __name__ == '__main__':
    app.run(host='0.0.0.0')
