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
    <div className="">
      <h1>Escolha o treino</h1>
      {
        treinoSelecionado ? (
      <div className="justify-center my-8 select-none flex">
        <button
          onClick={handleTreinoA}
          className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-600 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
        >Treino A</button>
        <button
          onClick={handleTreinoB}
          className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-600 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
        >Treino B</button>
        <button
          onClick={handleTreinoC}
          className="py-2 px-4 shadow-md no-underline rounded-full bg-blue-600 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2"
        >Treino C</button>
      </div>) : (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-black min-w-full">
          <p>{treino}</p>
            {treinoEscolhido.map((treino) => (
          <div key={treino.id} className="px-6 py-4">
            <p className="font-bold text-xl mb-2 text-gray-200">{treino.nome}</p>
            <p className="text-gray-200 text-base">Séries: {treino.series}</p>
            <p className="text-gray-200 text-base">Repetições {treino.repeticoes}</p>
            <p className="text-gray-200 text-base">Carga: {treino.carga}kg</p>
            <p className="text-gray-200 text-base">Realizado?</p>
            <input type="checkbox" name="" id="" className="text-gray-700 text-base" />
          <hr />
          </div>
            ))}
        </div>
      )
      }
    </div>
  );
}

export default App;
