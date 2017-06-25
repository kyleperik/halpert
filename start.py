from flask import Flask, render_template

app = Flask(__name__)
app.config.from_envvar('HALPERT_SETTINGS')

@app.route('/')
def index():
    return render_template('index.jinja')

if __name__ == '__main__':
    app.run(host='0.0.0.0')
