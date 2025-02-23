import os
import re
from flask import Flask, render_template, url_for, request, jsonify, flash, redirect
from flask_mail import Mail, Message
from forms import ContactForm  # Importar el formulario
from config import Config
from methods import load_all_projects, load_projects, load_project_details, load_all_projects_gallery, validar_email

app = Flask(__name__)
app.config.from_object(Config)
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

@app.route('/contacto', methods=["GET", "POST"])
def contact_page():
    form = ContactForm()  # Crear una instancia del formulario

    if request.method == "POST" and form.validate_on_submit():
        try:
            name = form.name.data
            email = form.email.data
            message = form.message.data

            msg = Message(
                subject="Nuevo mensaje de contacto",
                sender=email,
                recipients=['destinatario@gmail.com'],
                body=f"Nombre: {name}\nCorreo: {email}\nMensaje: {message}"
            )

            mail.send(msg)
            flash("Mensaje enviado correctamente.", "success")  # Mensaje de éxito
        except Exception as e:
            print(f"Error al enviar correo: {str(e)}")
            flash("Error al enviar el mensaje. Inténtalo de nuevo.", "danger")  # Mensaje de error

        return redirect(url_for("contact_page"))  # Redirige a la misma página

    return render_template("contact.html", form=form)  # Pasar el formulario a la plantilla


@app.route('/not-found')
def not_found_page():
    return render_template('404.html')

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=os.getenv("PORT", default=5000))