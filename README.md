# Configuração do Projeto

## Criação do arquivo `.env`
```env
PORT=5000
DATABASE_URL="file:./banco_relacionamento.db"
JWT_SECRET=SENHA

Instalar dependências do projeto:
npm install

Desinstalar migrations (se necessário):
npm prisma migrate dev

Iniciar o Servidor
npm run dev

Instalação de Dependências Adicionais
bcryptjs (para hash de senhas):

jsonwebtoken (para geração de tokens JWT):
npm install jsonwebtoken

