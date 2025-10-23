import React from 'react'

function KategoriFiltre({ selectedCategory, onCategoryChange }) {

  function handleKategoriChange(event) {
    onCategoryChange(event.target.value);
  }; 

  return (
    <div>
      <select 
        value={selectedCategory} 
        onChange={handleKategoriChange} 
        style={{
          backgroundColor: "gray",
          color: "white",
          borderRadius: "5px",
          padding: "5px"
        }}
      >
        <option value="All">Tüm Kategoriler</option>
        <option value="Klasik">Klasik</option>
        <option value="Roman">Roman</option>
        <option value="Bilim Kurgu">Bilim Kurgu</option>
      </select>
    </div>
  )
}

export default KategoriFiltre;