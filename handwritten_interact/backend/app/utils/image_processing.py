from PIL import Image
import io
import numpy as np
from backend.app.models.load_model import load_ml_model

def process_image(file):
    # Leer y preprocesar la imagen
    y_dict = {}
    for i in range(10):
        y_dict[i] = i

    for i in range(26):
        y_dict[i+10] = chr(i+65)
        
    for i in range(26):
        y_dict[i+36] = chr(i+97)

    try:
    
        img = Image.open(io.BytesIO(file.read())).convert('L')  # Convertir a escala de grises
        
        img = img.resize((32, 32)) 
        
        img_array = np.array(img)
        
        img_array = img_array / 255.0
        
        img_array = np.expand_dims(img_array, axis=0)
        
        img_array = np.expand_dims(img_array, axis=-1)
        
        label = load_ml_model().predict(img_array)

        return y_dict[np.argmax(label)]
    
    except Exception as e:
        return str(e)