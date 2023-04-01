function SolarPowerSystems() {
  return (
    <article>
      <h1>On Grid -Off Grid and Hybrid Solar Power Systems</h1>
      <div>
        <h2>Grid Tied Systems</h2>
        <p>Grid tied (also known as on grid)  systems consist of solar panels and a grid tied inverter (or inverters). No batteries are used as the electrical grid is used as the battery. The big advantage of the system is that 100% of the generated energy is used , either on the premises if required ,or is  automatically sent into the grid which then gets consumed by the other users connected to the grid. It is in effect, stored ,until you require it when your system is not producing any power (at night). A  disadvantage of the system is that if the power is cut the PV system will shut down  to prevent any energising of the grid. If backup power is required, a hybrid inverter with battery backup will provide power during the power cut. A bi- directional meter is installed and this measures the amount of power consumed by you from the grid and the amount that you have put into the grid. A system of net metering (actually net billing) has recently been introduced nationally whereby the amount that is fed into the grid is deducted from the amount taken from the grid and the balance is then billed (or credited) to the consumer.The price of the imported power is more than the price of the exported power and you are not credited for any amount exported beyond the amount that you have imported .The various utilities all have different export tariffs eg. Erongo Red –N$1.09 Windhoek N$1.13 as well as different import tariffs.  </p>

        <h2>Off Grid Systems</h2>
        <p>Off grid systems consist of solar panels, charge controller , batteries and DC to AC inverter. They are designed for areas where no mains grid electricity is available. It is possible to have an Off grid system even if you are connected to the grid if you wish to minimize your contact with your electricity provider. In this case, it is better to have a prepaid meter installed, so you can access mains power if you wish to charge your batteries without paying any basic charges (which you will have to pay even if you do not consume any electricity).     They are available from small to large systems. Batteries are the weak point of such systems as they are prone to short lifespans if the battery storage is too small and too much power is cycled from the battery everyday , Unlike grid tied systems a careful calculation of size requirement is required to prevent such over cycling. Therefore an audit of your power consumption is required to try and minimize the power requirement.</p>

        <h2>Hybrid Systems</h2>
        <p>Hybrid systems are a combination of on grid and off grid systems. They are basically an on grid system with battery storage. They will work exactly as an on grid system while the grid is operating. If the grid goes down, the loads will automatically switch over to battery power ( within 20 Ms) and continue to power the loads until the battery(s) reaches a preset voltage ( to avoid damaging the batteries)  or the grid powers up again. These inverters are available in single or three phase.</p>
      </div>
    </article>
  );
}

export default SolarPowerSystems;
