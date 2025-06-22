import requests
from bs4 import BeautifulSoup

def proyecto (producto):
    headers = {"User-Agent": "Mozilla/5.0"}
    query = producto.replace(" ", "+")
    url = f"https://www.solotodo.cl/search?q={query}"

    res = requests.get(url, headers=headers)
    if res.status_code != 200:
        print("No se pudo acceder al sitio.")
        return

    soup = BeautifulSoup(res.text, "html.parser")
    items = soup.select(".search-result-product")

    if not items:
        print("No se encontraron resultados.")
        return

    for item in items[:5]:  # Limita a los 5 primeros
        nombre = item.select_one(".product-name").text.strip()
        precio = item.select_one(".price").text.strip()
        link = "https://www.solotodo.cl" + item.select_one("a")["href"]
        print(f"\n📦 {nombre}\n💲 Precio: {precio}\n🔗 Link: {link}\n")

# Loop para que puedas buscar varios productos
while True:
    producto = input("🔍 ¿Qué producto deseas buscar? (escribe 'salir' para terminar): ")
    if producto.lower() == "salir":
        break
    proyecto(producto)
