import { useRef, useEffect } from "react";

function FocoInput() {
  // Criando a referência ao elemento input
  const inputRef = useRef<HTMLInputElement>(null);

  // Focando no input quando o componente é montado
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Foque automaticamente aqui"
      />
    </div>
  );
}

export default FocoInput;
