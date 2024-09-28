# Proyecto de Reconocimiento de Caracteres Escritos a Mano

Este proyecto implementa un sistema de reconocimiento de caracteres escritos a mano utilizando modelos de aprendizaje automático, 
con un enfoque principal en redes neuronales convolucionales (CNN). Se probaron y compararon varios modelos, incluidos SVC, Random Forest y CNN optimizadas, 
para seleccionar la mejor arquitectura según el rendimiento y la capacidad de generalización.

## Estructura del Proyecto

La estructura del notebook handwritten facilita la navegación y la replicación de los resultados. Esta organizada en:

0. configuración del entorno: se realiza una configuración para usar el dataset tomado de [kaggle](https://www.kaggle.com/datasets/dhruvildave/english-handwritten-characters-dataset).
1. Análisis exploratorio de datos: se análiza el dataset y precesan las imagens.
2. Modelos de Machine Learning: Se implementan los diferentes modelos de ML.
3. Comparación de Modelos: se compara el rendimiendo de cada modelo implementado usando la precisión como métrica.
4. Anális de Errores: se análisan las principales clases en las que el modelo de machine learning está cometiendo imprecisones y se intenta reducir dicho error.
5. Resumen del proyecto realizado.

Para replicar este proyecto, se deben instalar las dependencias en eñ archivo `requirements.txt` que contiene las librerías necesarias.

Para instalar las dependencias, ejecuta el siguiente comando:

```bash
pip install -r requirements.txt
```

Para clonar repositioio:
```bash
git clone https://github.com/JulianSalazarD/handwritten.git
```

link repositio:
- [Repositorio en GitHub](https://github.com/JulianSalazarD/handwritten)



