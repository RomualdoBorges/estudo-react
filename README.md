# Visão geral da referência do React

A documentação de referência do React é dividida em subseções funcionais:

- React@18.3.1
- React-dom@18.3.1
- Regras do React
- APIs Legadas

---

## React

- Hooks
- Componentes
- APIs
- Diretivas

### Hooks

- `useState`: permite adicionar e gerenciar estado em componentes funcionais. [Exemplo.](https://github.com/RomualdoBorges/estudo-react/blob/main/src/examples/react/hook/contador.tsx)

- `useReducer`: oferece uma maneira alternativa de gerencia estados complexos em componentes funcionais. Ele é particularmente útil quando o estado envolve múltiplos valores ou quando a lógica de atualização do estado é mais complexa, como quando diferentes ações precisam manipular o estado de maneira distintas. [Exemplo.](https://github.com/RomualdoBorges/estudo-react/blob/main/src/examples/react/hook/contadorReducer.tsx)

- `useContext`: permite acessar o valor de um contexto em qualquer componente funcional. Ele é utilizado para compartilhar dados ou estados entre componentes sem precisar passar props manualmente em cada nível da árvore de componentes. [Exemplo.](https://github.com/RomualdoBorges/estudo-react/blob/main/src/examples/react/hook/botaoDeTema.tsx)

- `useRef`: serve para criar uma referência mutável que persiste durante o ciclo de vida completo de um componente. Ele é comumente utilizado para acessar diretamente elementos DOM ou armazenar valores mutáveis que não provocam re-renderizações quando atualizados. [Exemplo.](https://github.com/RomualdoBorges/estudo-react/blob/main/src/examples/react/hook/focoInput.tsx)
