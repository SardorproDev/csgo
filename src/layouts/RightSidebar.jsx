import {AiOutlineArrowRight} from 'react-icons/ai';
import {BsPlusLg} from 'react-icons/bs';
import {GiWallet} from 'react-icons/gi'

function RightSidebar() {
  return (
    <div className="right"> 
      <div className="left-sidebar__header-icons">
        <AiOutlineArrowRight />
        <h3>My inventory(9/250)</h3>
        <BsPlusLg />
      </div>
      <div className="balance">
        <p>Current balance 24.5$</p>
      </div>
      <div className="main-right__box">
        <div className="box">
          <GiWallet width='100px' height='80px' />
          <h5>CS.GO Case</h5>
          <span>Key</span>
          <h3 className="price">2.55</h3>
        </div>
        <div className="box">
          <img src="../images/csgo-case-key.png" alt="csgo-key" width='100px' height='80px'/>
          <h5>CS.GO Case</h5>
          <span>Key</span>
          <h3 className="price">2.55</h3>
        </div>
        <div className="box">
          <img src="../images/csgo-case-key.png" alt="csgo-key" width='100px' height='80px'/>
          <h5>CS.GO Case</h5>
          <span>Key</span>
          <h3 className="price">2.55</h3>
        </div>
        <div className="box">
          <img src="../images/csgo-case-key.png" alt="csgo-key" width='100px' height='80px'/>
          <h5>CS.GO Case</h5>
          <span>Key</span>
          <h3 className="price">2.55</h3>
        </div>
        <div className="box">
          <img src="../images/csgo-case-key.png" alt="csgo-key" width='100px' height='80px'/>
          <h5>CS.GO Case</h5>
          <span>Key</span>
          <h3 className="price">2.55</h3>
        </div>
        <div className="box">
          <img src="../images/csgo-case-key.png" alt="csgo-key" width='100px' height='80px'/>
          <h5>CS.GO Case</h5>
          <span>Key</span>
          <h3 className="price">2.55</h3>
        </div>
        <div className="box">
          <img src="../images/csgo-case-key.png" alt="csgo-key" width='100px' height='80px'/>
          <h5>CS.GO Case</h5>
          <span>Key</span>
          <h3 className="price">2.55</h3>
        </div>
        <div className="box">
          <img src="../images/csgo-case-key.png" alt="csgo-key" width='100px' height='80px'/>
          <h5>CS.GO Case</h5>
          <span>Key</span>
          <h3 className="price">2.55</h3>
        </div>
        <div className="box">
          <img src="../images/csgo-case-key.png" alt="csgo-key" width='100px' height='80px'/>
          <h5>CS.GO Case</h5>
          <span>Key</span>
          <h3 className="price">2.55</h3>
        </div>
      </div>

      <div className='select'>
        <h3>Selected 1 / 2.55$</h3>
        <button className='deposit-btn'>Deposit into small</button>
        <button className='deposit-btn gray'>Deposit into small</button>
      </div>
    </div>
  );
}

export default RightSidebar;