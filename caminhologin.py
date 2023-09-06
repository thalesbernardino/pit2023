# Banco de dados simulado de usuários (apenas para fins de demonstração)
def login():
    nome = "Login"
    return render_template("login.html", nome=nome)

database = {
    "usuario1@example.com": "senha123",
    "usuario2@example.com": "senha456",
    "usuario3@example.com": "senha789",
    "usuario4@example.com": "senha654",
    "usuario5@example.com": "senha321",
    "usuario6@example.com": "senha987",
    "usuario7@example.com": "senha159",
    
}

def realizar_login(email, senha):
    if email in database and database[email] == senha:
        return True
    else:
        return False

def main():
    print("Bem-vindo! Por favor, faça o login.")
    email = input("Email: ")
    senha = input("Senha: ")

    if realizar_login(email, senha):
        print("Login bem-sucedido!")
        
    else:
        print("Credenciais inválidas. Tente novamente.")

if __name__ == "__main__":
    main()
