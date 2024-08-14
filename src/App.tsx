import BotaoDeTema, { TemaProvider } from "./examples/react/hook/botaoDeTema";
import Contador from "./examples/react/hook/contador";
import ContadorReducer from "./examples/react/hook/contadorReducer";
import FocoInput from "./examples/react/hook/focoInput";

function App() {
  return (
    <>
      <Contador />
      <ContadorReducer />

      <TemaProvider>
        <BotaoDeTema />
      </TemaProvider>

      <FocoInput />
    </>
  );
}

export default App;
