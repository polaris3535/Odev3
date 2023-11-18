import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const yaziListesi = [
  {
    baslik: "Unity ile Oyun Zamani",
    url: "https://veyselkinaci.vercel.app/",
    yazar: "Veysel Kinaci",
    yorum_sayisi: 5980,
    puan: 4.7,
    id: 0,
  },
  {
    baslik: "Web Teknolojileri ve Programlama",
    url: "wwww.google.com.tr",
    yazar: "Ufuk incesu",
    yorum_sayisi: 1,
    puan: 1.1,
    id: 1,
  },
];
function App() {
  return (
    <div>
      <h1>Baslik</h1>
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" />
      <hr />
      <ul>
        {yaziListesi.map(function (yazi) {
          return (
            <li key={yazi.id}>
              <span>
                <a href={yazi.url}>{yazi.baslik}</a>, 
              </span>
              <span><b>Yazar:</b> {yazi.yazar}, </span>
              <span><b>Yorum Sayısı:</b> {yazi.yorum_sayisi}, </span>
              <span><b>Puan:</b> {yazi.puan}</span>
            </li>
          );
        })}{" "}
      </ul>
    </div>
  );
}

export default App
