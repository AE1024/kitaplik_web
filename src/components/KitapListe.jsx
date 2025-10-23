import React from "react";
import KitapKarti from "./KitapKarti";

function KitapListe({ kitaplar, favoriyeEkle, favoriler }) {
  return (
    <div >
      <ul>
        {kitaplar.map((kitap) => (
          <KitapKarti 
            key={kitap.id} 
            {...kitap} 
            favorideMi={favoriler.some(f => f.id === kitap.id)} 
            onFavoriyeEkle={() => favoriyeEkle(kitap)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Kitaplistesi;