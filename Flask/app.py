from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/nonPrivileged', methods=['GET'])
def normalPanel():
    # The user panel variable has to be changed to be either the grafana local server or the url from the panel hosted in grafana cloud
    userPanel = 'http://urlForUserPanel.com'
    return redirect(userPanel)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)
