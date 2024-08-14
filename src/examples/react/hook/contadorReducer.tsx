import { useReducer } from "react";

// Define a interface para o estado
interface State {
  contador: number;
}

// Define a interface para as ações
type Action = { type: "incrementar" } | { type: "decrementar" };

// Define a função reducer com tipagem
function contadorReducer(state: State, action: Action): State {
  switch (action.type) {
    case "incrementar":
      return { contador: state.contador + 1 };
    case "decrementar":
      return { contador: state.contador - 1 };
    default:
      return state;
  }
}

function ContadorReducer() {
  // Inicializa o useReducer com o reducer e o estado inicial
  const [state, dispatch] = useReducer(contadorReducer, { contador: 0 });

  return (
    <div>
      <p>Você clicou {state.contador} vezes</p>
      {/* Dispara ações para incrementar ou decrementar o estado */}
      <button onClick={() => dispatch({ type: "incrementar" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "decrementar" })}>
        Decrementar
      </button>
    </div>
  );
}

export default ContadorReducer;
