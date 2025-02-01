import os
from flask import Flask, render_template, url_for



app = Flask(__name__)

# Ruta hacia la carpeta donde se almacenan los proyectos
PROJECTS_PATH = os.path.abspath('static/images/')


def load_all_projects():

    project_names = ['duo-padel-store', 'lb-santa-anita', 'los-mezquites', 'nomenclatura-municipal', 'plaza-9Q', 'plaza-manto', 'villa-solciego', 'truck-stop']

    project_names = sorted(project_names)

    projects = {}

    # Recorremos las carpetas dentro de 'static/images/'
    for project_folder in project_names:
        project_path = os.path.join(PROJECTS_PATH, project_folder)
        if os.path.isdir(project_path):
            images = os.listdir(project_path)
            main_image = None
            detail_text = ""
            location_text = ""

            # Buscamos la imagen principal y el archivo de texto
            for image in images:
                if image.startswith('Picture1'):  # La imagen principal
                    main_image = f'images/{project_folder}/{image}'  # Ruta relativa a 'static/images/'
                elif image == 'detalles.txt':  # Archivo de detalle
                    with open(os.path.join(project_path, image), 'r') as f:
                        detail_text = f.read().strip()
                elif image == 'location.txt':
                    with open(os.path.join(project_path, image), 'r') as f:
                        location_text = f.read().strip()

            if main_image:
                projects[project_folder] = {
                    'title': project_folder.replace('-', ' ').title(),
                    'main_image': main_image,
                    'detail_text': detail_text,
                    'location_text': location_text
                }
    
    # Retorna solo los primeros 'limit' proyectos
    return projects


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


def load_project_details(project_folder):
    project_path = os.path.join(PROJECTS_PATH, project_folder)
    
    if os.path.isdir(project_path):
        images = sorted([img for img in os.listdir(project_path) if img.endswith('.webp')])
        main_image = None
        additional_images = []
        detail_text = ""
        location_text = ""

        # Buscamos las imágenes y el archivo de texto
        for image in images:
            is_big = '-big' in image  # Verificamos si la imagen contiene "-big"

            if image.startswith('Picture1'):  # Imagen principal
                main_image = f'images/{project_folder}/{image}'
                # También agregamos la imagen principal a las adicionales
                additional_images.append({
                    'url': main_image,
                    'is_big': is_big
                })
            else:  # Otras imágenes
                additional_images.append({
                    'url': f'images/{project_folder}/{image}',
                    'is_big': is_big
                })

        # Detalles en texto
        detail_text_path = os.path.join(project_path, 'texto.txt')
        if os.path.exists(detail_text_path):
            with open(detail_text_path, 'r') as f:
                detail_text = f.read().strip()

        location_text_path = os.path.join(project_path, 'location.txt')
        if os.path.exists(location_text_path):
            with open(location_text_path, 'r') as f:
                location_text = f.read().strip()

        # Devolver la información del proyecto
        if main_image:
            return {
                'title': project_folder.replace('-', ' ').title(),
                'main_image': main_image,
                'additional_images': additional_images,
                'detail_text': detail_text,
                'location_text': location_text
            }

    return None  # Si el directorio del proyecto no existe




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

@app.route('/contacto')
def contact_page():
    return render_template('contact.html')


if __name__ == '__main__':
    app.run(debug=True)