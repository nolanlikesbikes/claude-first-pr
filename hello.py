import random
import tkinter as tk

GREETINGS = [
    "Hello",
    "Hola",
    "Bonjour",
    "Hallo",
    "Ciao",
    "Ola",
    "Konnichiwa",
    "Ni Hao",
    "Annyeonghaseyo",
    "Namaste",
    "Marhaba",
    "Privet",
    "Yassou",
    "Merhaba",
    "Jambo",
]


def randomize_greeting():
    label.config(text=random.choice(GREETINGS))


root = tk.Tk()
root.title("Hello World")
root.geometry("300x150")

label = tk.Label(root, text="Hello", font=("Helvetica", 32))
label.pack(expand=True)

button = tk.Button(root, text="Randomize", command=randomize_greeting)
button.pack(pady=10)

root.mainloop()
