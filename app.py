from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Aqui ficam guardados os "lugares" do mapa e o que cada um revela.
# Depois a gente pode migrar isso pra um banco de dados (SQLite),
# mas pra começar, uma lista em Python já funciona perfeitamente.
MAP_SPOTS = [
    {
       "id": "casa",
       "name": "Nossa casa",
       "x": 20,
       "y": 65,
       "icon": "🏠",
       "message": "Obrigada por ser a melhor sobrinha do mundo, a mais linda e divertida",
       "unlocked": True,
    },

    {
       "id": "parque",
       "name": "O parque",
       "x": 45,
       "y": 30,
       "icon": "🌲",
       "message": "Colocar uma foto de lembrança de um passeio ou brincadeira com a Evelyn",
       "unlocked": True,
    },

    {
       "id": "escola",
       "name": "A escola dela",
       "x": 70,
       "y": 60,
       "icon": "🏫",
       "message": "Mensagem de orgulho por algo que ela conquistou.",
       "unlocked": True,
    },

    {
       "id": "castelo",
       "name": "Castelo Surpresa",
       "x": 85,
       "y": 20,
       "icon": "🏰",
       "message": "A grande surpresa final! Troque por video, mensagem especial ou revelação do presente de verdade.",
       "unlocked": True,
       "final": True,
    },
]

@app.route("/")
def home():
    return render_template("index.html", spots=MAP_SPOTS)


@app.route("/api/spots")
def get_spots():
    """Endpoint que devolve os pontos do mapa em JSON (útil se quiser trocar o frontend por algo mais dinâmico no futuro)."""
    return jsonify(MAP_SPOTS)


if __name__ == "__main__":
   app.run(debug=True)