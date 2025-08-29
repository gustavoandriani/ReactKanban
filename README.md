# ReactKanban

**ReactKanban** é uma aplicação de quadro Kanban desenvolvida como estudo de **React** com **TypeScript**, construída sobre **Vite**.

---

## 🚀 Tecnologias Utilizadas

- **React** com **TypeScript**
- **Vite** como bundler/servidor de desenvolvimento

---

## ✨ Funcionalidades (exemplos)

- Criação, edição e remoção de cartões (tasks)
- Organização de cartões em colunas (To Do, Doing, Done)
- Drag-and-drop entre colunas
- Estado persistido em `db.json` (via API fake local ou `json-server`)
- Layout responsivo e estilização básica com CSS ou Framework

---

## 📦 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/gustavoandriani/ReactKanban.git
   ```
2. Entre no diretório do projeto:
   ```bash
   cd ReactKanban
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
   ou
   ```bash
   yarn install
   ```

---

## ▶️ Desenvolvimento

Para rodar o servidor de desenvolvimento:
```bash
npm run dev
```
ou
```bash
yarn dev
```
Abra o navegador em `http://localhost:5173` (ou porta indicada no terminal) para visualizar a aplicação.

---

## 🗄️ Simulação da API com `db.json`

Se você está usando `json-server` ou algo similar para simular backend com `db.json`, inclua instruções como:

```bash
npm run json-server
```

**Endpoints disponíveis:**
- `GET /tasks`
- `POST /tasks`
- `PATCH /tasks/:id`
- `DELETE /tasks/:id`

---

## 📂 Estrutura do Projeto (exemplo)

```
ReactKanban/
├── src/
│   ├── components/
│   │    ├── CreateTaskForm.tsx/
│   │    ├── TaskBoard.tsx/
│   │    └── TaskCard.tsx/
│   ├── contexts/
│   │    └── TasksContext.tsx/
│   ├── entities/
│   │    └── Task.ts/
│   ├── hooks/
│   │    └── useTasks.ts/
│   ├── services/
│   │    └── api.ts/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.tsx
├── db.json
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🌍 Rotas (exemplo)

Se o app utiliza roteamento:

- `/` – Quadro Kanban principal
- `localhost:3300/tasks/:id` – Visualização ou edição de um cartão específico

---

## 🤝 Como Contribuir

Contribuições são bem-vindas! Basta seguir estes passos:

1. Faça um **fork** do projeto  
2. Crie uma branch para sua feature ou correção  
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas alterações e **commit** com uma mensagem descritiva  
4. Envie para seu fork e abra um **Pull Request**

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📬 Contato

Caso queira entrar em contato para sugestões, tirar dúvidas ou colaborar:

- **Nome**: Gustavo Andriani  
- **Email**: [Gmail](gustavo.joseandriani@gmail.com)
- **GitHub**: [@gustavoandriani](https://github.com/gustavoandriani)