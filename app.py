from flask import Flask, request, jsonify
import requests
from bs4 import BeautifulSoup
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permite peticiones desde Ionic

@app.route("/buscar", methods=["GET"])
def buscar():
    query = request.args.get("q", "")
    if not query:
        return jsonify({"error": "No se proporcionó una búsqueda"}), 400

    headers = {"User-Agent": "Mozilla/5.0"}
    url = f"https://www.solotodo.cl/search?q={query.replace(' ', '+')}"

    res = requests.get(url, headers=headers)
    if res.status_code != 200:
        return jsonify({"error": "No se pudo obtener información de solotodo.cl"}), 500

    soup = BeautifulSoup(res.text, "html.parser")

    # Aquí ajustamos el selector de los productos
    items = soup.select("div.product-card")  # Clase actual para cada producto

    resultados = []
    for item in items[:5]:  # Limitamos a 5 resultados
        nombre_tag = item.select_one("a.product-card__title")
        precio_tag = item.select_one("span.price")
        link_tag = item.select_one("a.product-card__title")

        if nombre_tag and precio_tag and link_tag:
            nombre = nombre_tag.text.strip()
            precio = precio_tag.text.strip()
            link = "https://www.solotodo.cl" + link_tag['href']

            resultados.append({
                "nombre": nombre,
                "precio": precio,
                "link": link
            })

    return jsonify(resultados)

if __name__ == "__main__":
    app.run(debug=True)

