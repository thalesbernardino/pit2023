const User = require('../models/User');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        // Aqui você pode gerar um token de autenticação e retorná-lo como resposta
        // Pode usar bibliotecas como jsonwebtoken para isso

        res.status(200).json({ message: 'Login bem-sucedido', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor' });
    }
};
