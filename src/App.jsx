import "./App.css";
import React from 'react';



function Arama({aramaMetni, onSearch, }){
 
  function handleChange(event){
    setAramaMetni(event.target.value)
     props.onSearch(event);
     localStorage.setItem("aranan", event.target.value); 
  }
  React.useEffect(() => {
    localStorage.setItem("aranan", aramaMetni); 
  },[aramaMetni]);
    return(
    <div>     
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={onSearch} value={aramaMetni}   />  
      <p>
        
      </p>
      </div>
  )
}



function Yazi({id, url, baslik, yazar, yorum_sayisi, puan}){
  return(
    <li key={id}>
          <span>
            <a href={url}>{baslik}</a>, 
          </span>
          <span><b>Yazar:</b> {yazar}, </span>
          <span><b>Yorum Sayısı:</b> {yorum_sayisi}, </span>
          <span><b>Puan:</b> {puan}</span>
        </li>
  )
}





function Liste(props) {
  return(
  <ul>
   {props.yazilar.map(function (yazi){
    return (
    
    <Yazi key={yazi.id} {...yazi}/>
    );
   })}

  </ul>

  )                     
}





function App() {
  const [aramaMetni, setAramaMetni] = React.useState(localStorage.getItem("aranan") ||  "React");

  const yaziListesi = [
    {  
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 2,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },

    {
      baslik: "Unity ile Mobil Oyun",
      url: "https://veyselkinaci.vercel.app",
      yazar: "Veysel Kinaci",
      yorum_sayisi: 556,
      puan: 5.0,
      id: 0
    },

    {
      baslik: "Acik Hava Sporlari",
      url: "www.canakandemir.com/",
      yazar: "Furkan Atici",
      yorum_sayisi: 12,
      puan: 4.7,
      id: 3
    },
    
  ];

  const arananYazilar = yaziListesi.filter(function (yazi) {
    return (
      yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) || yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase()) 
    );
  });




  function handleSearch(event){
   setAramaMetni(event.target.value);
  }

  React.useEffect(()=>{
    localStorage.setItem("aranan",aramaMetni);
  },[aramaMetni]);

  return (
    <div>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni}  onSearch = {handleSearch} />  
      <strong>{aramaMetni} araniyor...</strong>
      <hr />
      <Liste yazilar={arananYazilar}/>
    </div>
  );

}
export default App;