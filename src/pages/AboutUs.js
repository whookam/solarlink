import Sma from '../images/sma.png';
import Victron from '../images/victron.png'
import Replus from '../images/replus-logo.png';
import microCare from '../images/microcare.png';
import aquaSol from '../images/aquaSol.jpg';
import APS from '../images/aps.jpg';
import RenaSol from '../images/ReneSola.jpg';
import enerSol from '../images/enerSol.jpg';
import kwkisol from '../images/kwiksol.jpg';
import eland from '../images/eland-cables.png';
import goodwe from '../images/goodwe.png';
import steca from '../images/steca.png';
import solarEdge from '../images/solarEdge.png';
import voltronic from '../images/voltronic.jpg';
import samilPower from '../images/samilpower.png';
import canadianSolar from '../images/canadiansolar.jpg';

function About() {
    return (
        <article>
            <h1>About Us</h1>
            <p>We opened in Sept.2007 and have been supplying and installing solar water heaters (both solar geysers and heat pumps) and solar PV systems for over 9 years. We can offer both small and large systems.We are official Kwikot and Kwiksol suppliers and installers.We also supply and install ITS pool heat pumps.We supply  products from the following manufacturers.</p>
            <div className="image-gallery">
                <img alt="solar technology" src={Sma} />
                <img alt="Victron energy" src={Victron} />
                <img alt="Replus by ReneSola" src={Replus} />
                <img alt="Micro care" src={microCare} />
                <img alt="aquaSol" src={aquaSol} />
                <img alt="APS" src={APS} />
                <img alt="ReneSola" src={RenaSol} />
                <img alt="enerSol" src={enerSol} />
                <img alt="kwkisol" src={kwkisol} />
                <img alt="eland cables" src={eland} />
                <img alt="goodwe" src={goodwe} />
                <img alt="steca" src={steca} />
                <img alt="Solar Edge" src={solarEdge} />
                <img alt="voltronic" src={voltronic} />
                <img alt="Samil Power" src={samilPower} />
                <img alt="Canadian Solar" src={canadianSolar} />
            </div>
        </article>
    );
}

export default About;
