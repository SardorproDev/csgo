import {SlBadge} from 'react-icons/sl';
import {AiFillBell} from 'react-icons/ai';
import {BiUserCircle} from 'react-icons/bi';
import {AiFillCaretDown} from 'react-icons/ai'

function Header() {
  return (
    <div className="header">
      <h2>Logo</h2>

      <div className="navbar">
        <h4>Martel</h4>
        <h4>Text</h4>
        <div className='header-icons__box'>
          <SlBadge className='header-icon' />
          <span className='header__icons-number'>1</span>
        </div>
        <div className='header-icons__box'>
          <AiFillBell className='header-icon' />
          <span className='header__icons-number'>1</span>
        </div>
        <div className='user-account'>
          <BiUserCircle className='header-icon' />
          <span>MR GAMBLER
          </span>
          <AiFillCaretDown className='account-down__icon' />
        </div>
      </div>
    </div>
  );
}

export default Header;