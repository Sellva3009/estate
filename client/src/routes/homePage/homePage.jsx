import { useContext } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';
import { AuthContext } from '../../context/AuthContext';

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get your dreams place</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            eius nostrum odio, cumque consequatur tenetur doloremque illo dicta
            ipsam eos?
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h2>16+</h2>
              <h3>Years of Experience</h3>
            </div>
            <div className="box">
              <h2>200+</h2>
              <h3>Award Gained</h3>
            </div>
            <div className="box">
              <h2>2000+</h2>
              <h3>Property Ready</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage