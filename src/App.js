import { useState } from 'react'
import { db } from './firebaseConnection';
import { doc, setDoc, collection, addDoc, getDoc } from 'firebase/firestore'

import './app.css';
import { wait } from '@testing-library/user-event/dist/utils';

function App() {

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');


  async function handleAdd() {
    // await setDoc(doc(db, "posts", "12345"),{

    // titulo: titulo,
    //autor: autor,
    //})

    //.then(() => {
    //console.log("DADOS REGISTRADO NO BANCO!")

    //})

    //.catch((error) => {
    //console.log("Gerou erro " + error)

    //})

    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor:  autor,
    })

    .then(() => {
      console.log("DADOS REGISTRADO NO BANCO")
      setAutor('');
      setTitulo('');
    })

    .catch((error) => {
      console.log("Gerou erro" + error)
    })
  }


  async function buscarPosts(){
   const postRef = doc(db, "posts", "12345")

   await getDoc(postRef)
   .then((snapshot) => {
      setAutor(snapshot.data().autor)
      setTitulo(snapshot.data().titulo)
   })
    .catch(() => {
      console.log("ERRO AO BUSCAR")
    })
  }

  return (
    <div>
      <h1>ReactJs + Firebase</h1>

      <div className="container">
        <label>Titulo: </label>
        <textarea
          type="text"
          placeholder='digite o ttitulo'
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <label>Autor:</label>
        <input
          type="text"
          placeholder="Autor do Post"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={buscarPosts}>Buscar posts</button>

      </div>

    </div>

  );
}

export default App;
