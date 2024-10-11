import os
from flask import Flask, render_template, url_for



app = Flask(__name__)

# Ruta hacia la carpeta donde se almacenan los proyectos
PROJECTS_PATH = os.path.abspath('static/images/')


def load_all_projects(limit=8):
    projects = {}
    # Recorremos las carpetas dentro de 'static/images/'
    for project_folder in os.listdir(PROJECTS_PATH):
        project_path = os.path.join(PROJECTS_PATH, project_folder)
        if os.path.isdir(project_path):
            images = os.listdir(project_path)
            main_image = None
            detail_text = ""

            # Buscamos la imagen principal y el archivo de texto
            for image in images:
                if image.startswith('Picture1'):  # La imagen principal
                    main_image = f'images/{project_folder}/{image}'  # Ruta relativa a 'static/images/'
                elif image == 'detalles.txt':  # Archivo de detalle
                    with open(os.path.join(project_path, image), 'r') as f:
                        detail_text = f.read().strip()

            if main_image:
                projects[project_folder] = {
                    'title': project_folder.replace('-', ' ').title(),
                    'main_image': main_image,
                    'detail_text': detail_text
                }
    
    # Retorna solo los primeros 'limit' proyectos
    return dict(list(projects.items())[:limit])


def load_projects():
    # Lista con los nombres específicos de los proyectos que quieres cargar
    project_names = ['the-f-house', 'zoe-center', 'los-mezquites']
    
    # Ordenamos la lista alfabéticamente (según el nombre de la carpeta)
    project_names = sorted(project_names)
    
    projects = {}
    for project_folder in project_names:
        project_path = os.path.join(PROJECTS_PATH, project_folder)
        if os.path.isdir(project_path):
            images = os.listdir(project_path)
            main_image = None
            detail_text = ""

            # Buscamos la imagen principal y el archivo de texto
            for image in images:
                if image.startswith('Picture1'):  # La imagen principal
                    main_image = f'images/{project_folder}/{image}'  # Ruta relativa a 'static/images/'
                elif image == 'detalles.txt':  # Archivo de detalle
                    with open(os.path.join(project_path, image), 'r') as f:
                        detail_text = f.read().strip()  # Leemos el contenido del archivo

            if main_image:
                projects[project_folder] = {
                    'title': project_folder.replace('-', ' ').title(),  # Convertimos el nombre del folder a título
                    'main_image': main_image,
                    'detail_text': detail_text  # Añadimos el texto de detalle
                }

    return projects  # Retorna los proyectos en el orden alfabético de la lista

def load_all_projects_gallery():
    projects = {}
    # Recorremos las carpetas dentro de 'static/images/'
    for project_folder in os.listdir(PROJECTS_PATH):
        project_path = os.path.join(PROJECTS_PATH, project_folder)
        if os.path.isdir(project_path):
            images = os.listdir(project_path)
            main_image = None
            detail_text = ""

            # Buscamos la imagen principal y el archivo de texto
            for image in images:
                if image.startswith('Picture1'):  # La imagen principal
                    main_image = f'images/{project_folder}/{image}'  # Ruta relativa a 'static/images/'
                elif image == 'detalles.txt':  # Archivo de detalle
                    with open(os.path.join(project_path, image), 'r') as f:
                        detail_text = f.read().strip()

            if main_image:
                projects[project_folder] = {
                    'title': project_folder.replace('-', ' ').title(),
                    'main_image': main_image,
                    'detail_text': detail_text
                }
    
    # Retorna solo los primeros 'limit' proyectos
    return dict(list(projects.items()))

@app.route('/')
def index():
    projects = load_projects()  # Cargamos los proyectos específicos en orden

    all_projects = load_all_projects(limit=8)

    return render_template('index.html', projects=projects, all_projects=all_projects, current_page='home')


@app.route('/projects')
def projects_page():
    projects = load_all_projects_gallery()  # Cargamos los proyectos
    return render_template('projects.html', projects=projects, current_page='projects')

@app.route('/project/<project_id>')
def project_detail(project_id):
    projects = load_projects()
    project = projects.get(project_id)
    if project:
        return render_template('project_detail.html', project=project)
    else:
        return render_template('404.html'), 404  # Usar una plantilla 404 personalizada


if __name__ == '__main__':
    app.run(debug=True)