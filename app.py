from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/calculate", methods=["POST"])
def calculate():
    try:
        daily_consumption = float(request.form.get("daily_consumption"))
        days_remaining = int(request.form.get("days_remaining"))
        water_footprint = daily_consumption * days_remaining
        return render_template("index.html", result=water_footprint)
    except ValueError:
        error_message = "Por favor, ingresa valores válidos."
        return render_template("index.html", error=error_message)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
