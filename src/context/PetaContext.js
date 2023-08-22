import { createContext, useState, useMemo } from "react";

const PETA_INITIAL_STATE = {
  tinggiElement: {},
  setTinggiElement: () => {},
  posisiAtasElement: {},
  setPosisiAtasElement: () => {},
};

const PetaContext = createContext(PETA_INITIAL_STATE);

export const PetaProvider = ({ children }) => {
  const [posisiAtasElementPengenalan, setPosisiAtasElementPengenalan] =
    useState(0);
  const [
    posisiAtasElementMetropolitanPertama,
    setPosisiAtasElementMetropolitanPertama,
  ] = useState(0);
  const [
    posisiAtasElementMetropolitanKedua,
    setPosisiAtasElementMetropolitanKedua,
  ] = useState(0);
  const [
    posisiAtasElementMetropolitanKetiga,
    setPosisiAtasElementMetropolitanKetiga,
  ] = useState(0);
  const [
    posisiAtasElementMetropolitanKeempat,
    setPosisiAtasElementMetropolitanKeempat,
  ] = useState(0);
  const [
    posisiAtasElementMetropolitanKelima,
    setPosisiAtasElementMetropolitanKelima,
  ] = useState(0);
  const [
    posisiAtasElementMetropolitanKeenam,
    setPosisiAtasElementMetropolitanKeenam,
  ] = useState(0);
  const [
    posisiAtasElementMetropolitanKetujuh,
    setPosisiAtasElementMetropolitanKetujuh,
  ] = useState(0);
  const [
    posisiAtasElementMetropolitanKedelapan,
    setPosisiAtasElementMetropolitanKedelapan,
  ] = useState(0);
  const [
    posisiAtasElementMetropolitanKesembilan,
    setPosisiAtasElementMetropolitanKesembilan,
  ] = useState(0);
  const [
    posisiAtasElementMetropolitanKesepuluh,
    setPosisiAtasElementMetropolitanKesepuluh,
  ] = useState(0);

  const memoizedValue = useMemo(() => {
    return {
      posisiAtasElementPengenalan,
      setPosisiAtasElementPengenalan,
      posisiAtasElementMetropolitanPertama,
      setPosisiAtasElementMetropolitanPertama,
      posisiAtasElementMetropolitanKedua,
      setPosisiAtasElementMetropolitanKedua,
      posisiAtasElementMetropolitanKetiga,
      setPosisiAtasElementMetropolitanKetiga,
      posisiAtasElementMetropolitanKeempat,
      setPosisiAtasElementMetropolitanKeempat,
      posisiAtasElementMetropolitanKelima,
      setPosisiAtasElementMetropolitanKelima,
      posisiAtasElementMetropolitanKeenam,
      setPosisiAtasElementMetropolitanKeenam,
      posisiAtasElementMetropolitanKetujuh,
      setPosisiAtasElementMetropolitanKetujuh,
      posisiAtasElementMetropolitanKedelapan,
      setPosisiAtasElementMetropolitanKedelapan,
      posisiAtasElementMetropolitanKesembilan,
      setPosisiAtasElementMetropolitanKesembilan,
      posisiAtasElementMetropolitanKesepuluh,
      setPosisiAtasElementMetropolitanKesepuluh,
    };
  }, [
    posisiAtasElementPengenalan,
    setPosisiAtasElementPengenalan,
    posisiAtasElementMetropolitanPertama,
    setPosisiAtasElementMetropolitanPertama,
    posisiAtasElementMetropolitanKedua,
    setPosisiAtasElementMetropolitanKedua,
    posisiAtasElementMetropolitanKetiga,
    setPosisiAtasElementMetropolitanKetiga,
    posisiAtasElementMetropolitanKeempat,
    setPosisiAtasElementMetropolitanKeempat,
    posisiAtasElementMetropolitanKelima,
    setPosisiAtasElementMetropolitanKelima,
    posisiAtasElementMetropolitanKeenam,
    setPosisiAtasElementMetropolitanKeenam,
    posisiAtasElementMetropolitanKetujuh,
    setPosisiAtasElementMetropolitanKetujuh,
    posisiAtasElementMetropolitanKedelapan,
    setPosisiAtasElementMetropolitanKedelapan,
    posisiAtasElementMetropolitanKesembilan,
    setPosisiAtasElementMetropolitanKesembilan,
    posisiAtasElementMetropolitanKesepuluh,
    setPosisiAtasElementMetropolitanKesepuluh,
  ]);

  return (
    <PetaContext.Provider value={memoizedValue}>
      {children}
    </PetaContext.Provider>
  );
};
export default PetaContext;
