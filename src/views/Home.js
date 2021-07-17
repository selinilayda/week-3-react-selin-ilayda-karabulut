import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [viewData, setViewData] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character?count=20")
      .then((response) => response.json())
      .then((data) => {
        setViewData(data.results);
      });
  }, []);

  return (
    <div className="content">
      <div className="cards">
        {viewData.map((item) => {
          return (
            <div className="card">
              <Link to={`/character/${item.id}`}>
                <div className="image">
                  <img src={item.image} />
                </div>
                <div className="description">
                  <p>
                    Name: <span> {item.name} </span>
                  </p>
                  <p>
                    Gender: <span> {item.gender} </span>
                  </p>
                  <p>
                    Type: <span> {item.type} </span>
                  </p>
                  <p>
                    Status: <span> {item.status} </span>
                  </p>
                  <p>
                    Last Location: <span> {item.location.name} </span>
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
