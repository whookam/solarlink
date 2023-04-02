import Brochure1 from '../images/brochure02.jpg';
import Brochure2 from '../images/brochure03.jpg';
import Brochure3 from '../images/brochure04.jpg';
import Brochure4 from '../images/brochure05.jpg';

function GasmateGasGeysers() {
  return (
    <article>
      <h1>Kwikot Gasmate Gas Geysers</h1>
      <img className="imageFrame fullWidth" alt='Gasmate Gas brochure' src={Brochure1} />
      <img className="imageFrame fullWidth" alt='Gasmate Gas brochure' src={Brochure2} />
      <img className="imageFrame fullWidth" alt='Gasmate Gas brochure' src={Brochure3} />
      <img className="imageFrame fullWidth" alt='Gasmate Gas brochure' src={Brochure4} />
    </article>
  );
}

export default GasmateGasGeysers;
