from flask import Blueprint, render_template, request, jsonify
from backend.app.utils.image_processing import process_image

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/api/process_image', methods=['POST'])
def handle_process_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No se encontró imagen'}), 400
    
    file = request.files['image']
    prediction = process_image(file)
    
    return jsonify({'prediction': prediction})