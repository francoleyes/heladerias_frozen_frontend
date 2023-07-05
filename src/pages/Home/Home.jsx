import React, { useEffect, useState } from "react";
import { Card, Loader } from "semantic-ui-react";
import "./Home.scss";
import useHfrozen from "../../hooks/useHfrozen";

function Home() {
  const { getMessage, getTemp } = useHfrozen();
  const [message, setMessage] = useState();
  const [temp, setTemp] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const message = await getMessage();
      setMessage(message.message);
      setIsLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const temp = await getTemp();
      setTemp(temp.main.temp);
    })();
  }, []);

  return (
    <div className="home">
      <h1 className="home__title">BIENVENIDO A HELADERÍA FROZEN</h1>

      {isLoading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <h3 className="home__subtitle">{message}</h3>
      )}

      {temp && <h3 className="home__subtitle2">Este mensaje es debido a que la temperatura obtenida por la API es: {temp}°</h3>}

    </div>
  );
}
export default Home;
