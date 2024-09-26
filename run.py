import os
from flask import Flask, render_template, url_for

app = Flask(__name__)

# Ruta hacia la carpeta donde se almacenan los proyectos
PROJECTS_PATH = os.path.abspath('static/images/')


def load_projects():
    projects = {}
    # Recorremos las carpetas dentro de 'static/images/'
    for project_folder in os.listdir(PROJECTS_PATH):
        project_path = os.path.join(PROJECTS_PATH, project_folder)
        if os.path.isdir(project_path):
            images = os.listdir(project_path)
            main_image = None
            detail_images = []

            # Buscamos la imagen principal y las imágenes de detalles
            for image in images:
                if image.startswith('imagen01'):  # La imagen principal
                    main_image = f'images/{project_folder}/{image}'  # Ruta relativa a 'static/images/'
                else:
                    detail_images.append(f'images/{project_folder}/{image}')  # Rutas relativas a 'static/images/'

            if main_image:
                projects[project_folder] = {
                    'title': project_folder.replace('-', ' ').title(),  # Convertimos el nombre del folder a título
                    'main_image': main_image,
                    'detail_images': detail_images
                }
    return projects

@app.route('/')
def index():
    projects = load_projects()  # Cargamos los proyectos
    return render_template('index.html', projects=projects, current_page='home')

@app.route('/projects')
def projects_page():
    projects = load_projects()  # Cargamos los proyectos
    return render_template('projects.html', projects=projects, current_page='projects')

@app.route('/project/<project_id>')
def project_detail(project_id):
    projects = load_projects()
    project = projects.get(project_id)
    if project:
        return render_template('project_detail.html', project=project)
    else:
        return render_template('404.html'), 404  # Usar una plantilla 404 personalizada


@app.route('/')
def contact_page():
    return render_template('contact.html', current_page='contact')


@app.route('/about')
def about_page():
    return render_template('about.html', current_page='about')

if __name__ == '__main__':
    app.run(debug=True)
