import React from "react";

function AramaCubugu({ aramaMetni, setAramaMetni }) {
  function handleSearch(event){
    setAramaMetni(event.target.value);
  }

  return(
    <>
      <input 
        type="text" 
        placeholder="Başlık veya yazar giriniz ..." 
        value={aramaMetni} 
        onChange={handleSearch} 
      />
    </>
  );
}

export default AramaCubugu;