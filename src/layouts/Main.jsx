import {BiUserCircle} from 'react-icons/bi';


function Main() {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top__price-content">
          <div className="main-buttons">
            <button className="active">Small</button>
            <button>Medium</button>
            <button>Biy</button>
          </div>
          <div className="header-contnet">
            <p>9/30</p>
          </div>
          <div className="sidebars">
            <div className="main-left__sidebar">
              <span>Chance to win 0.00%</span>
              <h1>22.95$</h1>
              <button className="deposit-btn">Deposite now <br /> (min 0.50) (max 5.00)</button>
            </div>
            <div className="main-right__sidebar">
              <div className="main-right__box">
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
                <div className="box">
                  <img src="../images/csgo-case-key.png" alt="csgo-key" width='100px' height='80px'/>
                  <h5>CS.GO Case</h5>
                  <span>Key</span>
                  <h3 className="price">2.55</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-bottom__section">
          <div className="main-buttons">
            <button className="active">Current jackpot</button>
            <button>History</button>
            <button>My History</button>
            <button>Provbly fair</button>
          </div>
          <div className="main-bottom__header-content">
            Round hash: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, distinctio.
          </div>
          
          <div className="sidebars">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th className='total'>Total</th>
                <th className='skins'>Skins</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className='user'>
                    <BiUserCircle />
                    <span>Lorem, ipsum dolor.</span>
                  </div>
                  <div className='user'>
                    <BiUserCircle />
                    <span>Lorem, ipsum dolor.</span>
                  </div>
                  <div className='user'>
                    <BiUserCircle />
                    <span>Lorem, ipsum dolor.</span>
                  </div>
                  <div className='user'>
                    <BiUserCircle />
                    <span>Lorem, ipsum dolor.</span>
                  </div>
                  <div className='user'>
                    <BiUserCircle />
                    <span>Lorem, ipsum dolor.</span>
                  </div>
                </td>
                <td className='total'>
                  <p>2.69</p>
                  <p>2.69</p>
                  <p>2.69</p>
                  <p>2.69</p>
                  <p>2.69</p>
                </td>
                <td className='skins'>
                  <div>
                    <img src="./images/csgo-case-key.png" alt="" width='40px' height='35px' />
                  </div>
                  <div>
                    <img src="./images/csgo-case-key.png" alt="" width='40px' height='35px' />
                  </div>
                  <div>
                    <img src="./images/csgo-case-key.png" alt="" width='40px' height='35px' />
                    <img src="./images/csgo-case-key.png" alt="" width='40px' height='35px' />
                    <img src="./images/csgo-case-key.png" alt="" width='40px' height='35px' />
                  </div>
                  <div>
                    <img src="./images/csgo-case-key.png" alt="" width='40px' height='35px' />
                    <img src="./images/csgo-case-key.png" alt="" width='40px' height='35px' />
                  </div>
                  <div>
                    <img src="./images/csgo-case-key.png" alt="" width='40px' height='35px' />
                    <img src="./images/csgo-case-key.png" alt="" width='40px' height='35px' />
                  </div>
                </td>
                <td className='skinas-text'>
                  <p>A few seconds ago</p>
                  <p>A few seconds ago</p>
                  <p>A few seconds ago</p>
                  <p>A few seconds ago</p>
                  <p>A few seconds ago</p>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;