import React from "react";

function KitapKarti({ baslik, yazar, kategori, favorideMi, onFavoriyeEkle }) {

	return (
		<div className="kitap-kart">
			<h3>{baslik}</h3>
			<p>Yazar: {yazar}</p>
			<p>Kategori: {kategori}</p>

			<button
				style={{
					border: "1px solid black",
					boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
          backgroundColor: favorideMi ? "orange" : "gray"
				}}
				onClick={onFavoriyeEkle} 
        
			>
				{favorideMi ? "Favoride" : "Favorilere Ekle"}
			</button>
		</div>
	);
}

export default KitapKarti;
