import PriceList1 from '../images/pricelist1.jpg';
import PriceList2 from '../images/pricelist2.jpg';

function SolarPVPowerPriceList() {
  return (
    <article>
      <h1>Solar PV Power price list</h1>
      <p>ALL PRICES EXCL. VAT</p>
      <h2>SINGLE PHASE GRID INVERTERS</h2>
      <img className='imageFrame fullWidth' alt="price list" src={PriceList1} />
      <img className='imageFrame fullWidth' alt="price list" src={PriceList2} />
    </article>
  );
}

export default SolarPVPowerPriceList;
