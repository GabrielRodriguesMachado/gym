import React, {useState} from "react";
import { treinoA, treinoB, treinoC } from "./mocks/treinos";

function App() {
  const [treino, setTreino] = useState('');
  const [treinoSelecionado, setTreinoSelecionado] = useState(true);
  const [treinoEscolhido, setTreinoEscolhido] = useState([]);

  function handleTreinoA() {
    setTreino('Treino A');
    setTreinoEscolhido(treinoA);
    setTreinoSelecionado(false);
  }

  function handleTreinoB() {
    setTreino('Treino B');
    setTreinoEscolhido(treinoB);
    setTreinoSelecionado(false);
  }

  function handleTreinoC() {
    setTreino('Treino C');
    setTreinoEscolhido(treinoC);
    setTreinoSelecionado(false);
  }
  return (
    <div>
      <h1>Escolha o treino</h1>
      {
        treinoSelecionado ? (
      <div>
        <button onClick={handleTreinoA}>Treino A</button>
        <button onClick={handleTreinoB}>Treino B</button>
        <button onClick={handleTreinoC}>Treino C</button>
      </div>) : (
        <div>
          <p>{treino}</p>
          <ul>
            {treinoEscolhido.map((treino) => (
              <li key={treino.id}>
                <p>{treino.nome}</p>
                <p>Séries: {treino.series}</p>
                <p>Repetições {treino.repeticoes}</p>
                <p>Carga: {treino.carga}kg</p>
                <p>Realizado?</p>
                <input type="checkbox" name="" id="" />
              </li>
            ))}
          </ul>
        </div>
      )
      }
    </div>
  );
}

export default App;
