from tensorflow.keras.models import load_model

def load_ml_model():
    # Load the model
    model = load_model('backend/app/models/handwritten_recognition.h5')
    return model