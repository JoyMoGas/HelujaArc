import os
from flask import Flask, render_template, url_for

app = Flask(__name__)

# Ruta hacia la carpeta donde se almacenan los proyectos
PROJECTS_PATH = os.path.abspath('static/images/')
# Lista que define el orden de los proyectos
ORDERED_PROJECTS = [
    'the-f-house',
    'zoe-center',
    'los-mezquites'
]

def load_projects():
    projects = {}
    # Recorremos las carpetas dentro de 'static/images/'
    for project_folder in os.listdir(PROJECTS_PATH):
        project_path = os.path.join(PROJECTS_PATH, project_folder)
        if os.path.isdir(project_path):
            images = os.listdir(project_path)
            main_image = None
            detail_text = ""  # Inicializamos el texto de detalle

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

    return dict(list(projects.items())[:8])  # Retorna solo los primeros 3 proyectos

def load_projects_index():
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
                        detail_text = f.read().strip()  # Leemos el contenido del archivo

            if main_image:
                projects[project_folder] = {
                    'title': project_folder.replace('-', ' ').title(),
                    'main_image': main_image,
                    'detail_text': detail_text
                }

    # Ordenamos los proyectos según la lista de orden
    ordered_projects = {k: projects[k] for k in ORDERED_PROJECTS if k in projects}

    return ordered_projects  # Retorna los proyectos en el orden especificado



@app.route('/')
def index():
    projects = load_projects_index()  # Cargamos los proyectos
    return render_template('index.html', projects=projects, current_page='home')

@app.route('/project')
def project_detail():
    projects = load_projects()
    return render_template('project_detail.html')

if __name__ == '__main__':
    app.run(debug=True)