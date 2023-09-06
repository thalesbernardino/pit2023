from flask import Flask, render_template, request, jsonify

app = Flask(cadastro2)

def index():
    nome = "Cadastro"
    return render_template("caminhocadastro.html", nome=cadastro)

# Banco de dados simulado de usuários (apenas para fins de demonstração)
database = {}

def realizar_cadastro(email, tipo_plano, senha, telefone):
    if email in database:
        return False  # Usuário já existe
    else:
        database[email] = {
            "tipo_plano": tipo_plano,
            "senha": senha,
            "telefone": telefone
        }
        return True  # Cadastro bem-sucedido

def main():
    print("Bem-vindo! Por favor, faça o cadastro.")
    email = input("Email: ")
    
    # Verificação se o usuário já existe
    if email in database:
        print("Usuário já existe. Por favor, faça login ou use outro email.")
        return

    tipo_plano = input("Tipo de plano: ")
    senha = input("Senha: ")
    telefone = input("Telefone: ")

    if realizar_cadastro(email, tipo_plano, senha, telefone):
        print("Cadastro bem-sucedido!")
        # Coloque o código para continuar após o cadastro bem-sucedido aqui
    else:
        print("Erro ao cadastrar. Tente novamente.")

if __name__ == "__main__":
    main()

