function FavoriPaneli({ favori_kitaplar, favoridenKaldir }) {

  function handleRemove(baslik){ 
    favoridenKaldir(baslik);
  }

  return (
    <div style={{
      border: "1px solid #190d0d",
      borderRadius: "8px",
      padding: "16px",
      margin: "8px",
      width: "220px",
      height: "200px",
      overflowY: "auto",
      boxShadow: "5px 4px 8px rgba(0, 0, 0, 0.1)"
    }}>
      <h2>Favori Kitaplar</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {favori_kitaplar.map(kitap => (
          <li key={kitap.id} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "5px"
          }}>
            <strong>{kitap.baslik}</strong>
            <button 
              onClick={() => handleRemove(kitap.baslik)} 
              style={{
                border: "1px solid black",
                boxShadow: "2px 2px 5px rgba(0,0,0,0.5)",
                backgroundColor: "lightgray",
                borderRadius: "6px",
                cursor: "pointer",
                color: "green"
              }}
            >
              kaldır
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriPaneli;
