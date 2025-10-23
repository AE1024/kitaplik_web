import React, { useState } from "react";
import './App.css';
import AramaCubugu from "./components/AramaCubugu";
import KitapListe from "./components/KitapListe";
import KategoriFiltre from "./components/KategoriFiltre";
import FavoriPaneli from "./components/FavoriPaneli";

function App() {
  const [aramaMetni, setAramaMetni] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favoriler, setFavoriler] = useState([]); // Favoriler state'i buraya taşındı

  const kitap_listesi = [
    { id: 1, baslik: "Suç ve Ceza", yazar: "Fyodor Dostoyevski", kategori: "Klasik" },
    { id: 2, baslik: "1984", yazar: "George Orwell", kategori: "Bilim Kurgu" },
    { id: 3, baslik: "Küçük Prens", yazar: "Antoine de Saint-Exupéry", kategori: "Klasik" },
    { id: 4, baslik: "Sefiller", yazar: "Victor Hugo", kategori: "Klasik" },
    { id: 5, baslik: "Simyacı", yazar: "Paulo Coelho", kategori: "Roman" },
    { id: 6, baslik: "Fahrenheit 451", yazar: "Ray Bradbury", kategori: "Bilim Kurgu" },
  ];
  useEffect(() => {
 localStorage.setItem("aramaMetni", aramaMetni);
 }, [aramaMetni]); 


 useEffect(() => {
localStorage.setItem("favoriler", JSON.stringify(favoriler));
 }, [favoriler]); 

  // Favori ekleme fonksiyonu
  const favoriyeEkle = (kitap) => {
    if (!favoriler.find(f => f.id === kitap.id)) {
      setFavoriler(prev => [...prev, kitap]);
    }
  };

  const favoridenKaldir = (baslik) => {
  setFavoriler(prev => prev.filter(kitap => kitap.baslik !== baslik));
};


  const filtrelenmisKitaplar = kitap_listesi.filter(kitap => {
    const aramaEslesiyor = kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
    const kategoriEslesiyor = selectedCategory === "All" || kitap.kategori === selectedCategory;
    return aramaEslesiyor && kategoriEslesiyor;
  });

  function handleCategoryChange(category) {
    setSelectedCategory(category); 
  }

  return (
    <div className="App">
      <h1>Mini Kitaplık</h1>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <AramaCubugu 
          aramaMetni={aramaMetni} 
          setAramaMetni={setAramaMetni} 
        />    

        <KategoriFiltre 
          selectedCategory={selectedCategory} 
          onCategoryChange={handleCategoryChange} 
        />

        <FavoriPaneli favori_kitaplar={favoriler}
         favoridenKaldir={favoridenKaldir} />
      </div>

      <KitapListe
        kitaplar={filtrelenmisKitaplar}
        favoriyeEkle={favoriyeEkle}
        favoriler={favoriler}
      />
    </div>
  );
}

export default App;