import locationIcon from './assets/location.png';
import buildingIcon from './assets/building.png';

function Jobs() {
  return (
    <>
      <div className="title">
        <h2 id="jobs-title">İş İlanları</h2>
      </div>
      <div className="jobs">
        <div className="job">
          <div className='job-details'>
            <h3>Fullstack Developer &#40;Part Time &#92; Hibrit&#41;</h3>
            <span>ASTROTECH INNOVATIONS BİLİŞİM TİCARET</span>
            <div className='location'>
              <img src={locationIcon} alt="Location Icon" />
              <span>İzmir &#40;Hibrit&#41;</span>
            </div>
          </div>
          <div className='job-redirection'>
            <img src={buildingIcon} alt="Building Icon" />
            <button className='secondary-button'>İşe Başvur</button>
          </div>
        </div>
        <div className="job">
          <div className='job-details'>
            <h3>Fullstack Developer &#40;Part Time &#92; Hibrit&#41;</h3>
            <span>ASTROTECH INNOVATIONS BİLİŞİM TİCARET</span>
            <div className='location'>
              <img src={locationIcon} alt="Location Icon" />
              <span>İzmir &#40;Hibrit&#41;</span>
            </div>
          </div>
          <div className='job-redirection'>
            <img src={buildingIcon} alt="BuildingIcon" />
            <button className='secondary-button'>İşe Başvur</button>
          </div>
        </div>
        <div className="job">
          <div className='job-details'>
            <h3>Fullstack Developer &#40;Part Time &#92; Hibrit&#41;</h3>
            <span>ASTROTECH INNOVATIONS BİLİŞİM TİCARET</span>
            <div className='location'>
              <img src={locationIcon} alt="Location Icon" />
              <span>İzmir &#40;Hibrit&#41;</span>
            </div>
          </div>
          <div className='job-redirection'>
            <img src={buildingIcon} alt="BuildingIcon" />
            <button className='secondary-button'>İşe Başvur</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs