import { FaFacebookSquare } from 'react-icons/fa';
import './Home.css';

const Home = ({ reference }) => {
  return (
    <section ref={reference} className="home">
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
