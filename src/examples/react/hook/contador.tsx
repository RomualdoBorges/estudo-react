import { useState } from "react";

function Contador() {
  // Inicializa o estado "contador" com o valor 0
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      {/* Atualiza o estado ao clicar no botão */}
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
    </div>
  );
}

export default Contador;
