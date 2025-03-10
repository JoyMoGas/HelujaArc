import os
import re
from flask import Flask, render_template, url_for, request, jsonify, flash, redirect
from flask_mail import Mail, Message
from methods import load_all_projects, load_projects, load_project_details, load_all_projects_gallery, validar_email

app = Flask(__name__)
mail = Mail(app)

@app.route('/')
@app.route('/inicio')
def index():
    projects = load_projects()  # Cargamos los proyectos específicos en orden

    all_projects = load_all_projects()

    return render_template('index.html', projects=projects, all_projects=all_projects, current_page='home')

@app.route('/proyectos')
def projects_page():
    projects = load_all_projects_gallery()  # Cargamos los proyectos
    return render_template('projects.html', projects=projects, current_page='projects')

@app.route('/proyecto/<project_id>')
def project_detail(project_id):
    project = load_project_details(project_id)
    if project:
        return render_template('project_detail.html', project=project)
    else:
        return render_template('404.html'), 404  # Usar una plantilla 404 personalizada

@app.route('/contacto', methods=["GET"])
def contact_page():
    return render_template("contact.html")  # Pasar el formulario a la plantilla

@app.route('/not-found')
def not_found_page():
    return render_template('404.html')

if __name__ == '__main__':
    app.run(debug=True)
    """
    if not os.path.exists(app.config["UPLOAD_FOLDER"]):
        os.makedirs(app.config["UPLOAD_FOLDER"])    
    app.run(debug=True, host="0.0.0.0", port=os.getenv("PORT", default=5000))
    """