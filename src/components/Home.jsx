import { FaFacebookSquare } from 'react-icons/fa';
import './Home.css';
import Image from '../image/tiaro-cover.jpg'

const Home = ({ reference }) => {
  return (
    <section ref={reference} className="home" style={{backgroundImage: `url(${Image})`}}>
      <div className="content">
        <h3>Home</h3>
        <p>
          <i>Chaque enfant qu'on enseigne est un homme qu'on gagne </i>
          <br />
          <br />- Victor Hugo
        </p>
        <a href="https://web.facebook.com/OrganisationTiaro" target="_blank">
          <FaFacebookSquare /> Tiaro
        </a>
      </div>
    </section>
  );
};
export default Home;
