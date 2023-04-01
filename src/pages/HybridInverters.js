import InfiniPg1 from '../images/InfiniSolar-brochure-page-0.jpg';
import InfiniPg2 from '../images/InfiniSolar-brochure-page-1.jpg';
import InfiniPg3 from '../images/InfiniSolar-brochure-page-2.jpg';
import InfiniPg4 from '../images/InfiniSolar-brochure-page-3.jpg';
import GoodWePg1 from '../images/goodwe-hybrid-spec.jpg';
import GoodWePg2 from '../images/goodwe-hybrid-spec-2.jpg';

function HybridInverters() {
  return (
    <article>
      <h1>Hybrid Inverters</h1>
      <img className='imageFrame fullWidth' alt="InfiniSolar: on grid brochure page 1"  src={InfiniPg1} />
      <img className='imageFrame fullWidth' alt="InfiniSolar: on grid brochure page 2"  src={InfiniPg2} />
      <img className='imageFrame fullWidth' alt="InfiniSolar: on grid brochure page 3"  src={InfiniPg3} />
      <img className='imageFrame fullWidth' alt="Goodwe: brochure page 1"  src={GoodWePg1} />
      <img className='imageFrame fullWidth' alt="Goodwe: brochure page 2"  src={GoodWePg2} />
    </article>
  );
}

export default HybridInverters;
