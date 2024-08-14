import React, { createContext, ReactNode, useContext, useState } from "react";

// 1. Definindo a interface para o contexto
interface TemaContextoType {
  tema: string;
  setTema: (tema: string) => void;
}

// 2. Criando o contexto com um tipo definido
const TemaContext = createContext<TemaContextoType | undefined>(undefined);

const TemaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tema, setTema] = useState<string>("claro");

  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {children}
    </TemaContext.Provider>
  );
};

export { TemaProvider };

function BotaoDeTema() {
  // 4. Consumindo o contexto com verificação de segurança
  const contexto = useContext(TemaContext);

  if (!contexto) {
    throw new Error(
      "useContext(TemaContext) deve ser usado dentro de um TemaProvider"
    );
  }

  const { tema, setTema } = contexto;

  return (
    <button onClick={() => setTema(tema === "claro" ? "escuro" : "claro")}>
      Tema atual: {tema}
    </button>
  );
}

export default BotaoDeTema;
