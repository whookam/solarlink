import Sma from '../images/sma.png';
import Replus from '../images/replus-logo.png';
import microCare from '../images/microcare.png';
import aquaSol from '../images/aquaSol.jpg';
import RenaSol from '../images/ReneSola.jpg';
import enerSol from '../images/enerSol.jpg';
import solarEdge from '../images/solarEdge.png';
import samilPower from '../images/samilpower.png';
import canadianSolar from '../images/canadiansolar.jpg';

function About() {
    return (
        <article>
            <h2>About Us</h2>
            <p>We opened in Sept.2007 and have been supplying and installing solar water heaters (both solar geysers and heat pumps) and solar PV systems for over 9 years. We can offer both small and large systems.We are official Kwikot and Kwiksol suppliers and installers.We also supply and install ITS pool heat pumps.We supply  products from the following manufacturers.</p>
            <div className="image-gallery">
                <img alt="solar technology" src={Sma} />
                <img alt="Replus by ReneSola" src={Replus} />
                <img alt="Micro care" src={microCare} />
                <img alt="aquaSol" src={aquaSol} />
                <img alt="ReneSola" src={RenaSol} />
                <img alt="enerSol" src={enerSol} />
                <img alt="Solar Edge" src={solarEdge} />
                <img alt="Samil Power" src={samilPower} />
                <img alt="Canadian Solar" src={canadianSolar} />
            </div>
        </article>
    );
}

export default About;
