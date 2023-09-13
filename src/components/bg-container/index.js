import React from 'react';

export const BgContainer = (props) => {
  const bgContainerStyle = {
    position: 'relative',
    margin: '2rem 0', // Ganti dengan margin yang sesuai
    backgroundColor: '#121212', // Ganti dengan warna yang sesuai
    padding: '96px', // Ganti dengan padding yang sesuai
    width: '100%',
    borderRadius: '8px', // Ganti dengan border radius yang sesuai
    color: '#ffffff', // Ganti dengan warna teks yang sesuai
    overflow: 'hidden',
  };

  const flexContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    perspective: '250px', // Ganti dengan perspektif yang sesuai
  };

  return (
    <div style={bgContainerStyle}>
      <div style={flexContainerStyle}>{props.children}</div>
    </div>
  );
};