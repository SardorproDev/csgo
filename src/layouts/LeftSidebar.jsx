import {FaArrowUp} from 'react-icons/fa';
import {HiUsers} from 'react-icons/hi';
import {BsFillVolumeUpFill} from 'react-icons/bs';
import {SlEarphones} from 'react-icons/sl';
import {AiFillCloud} from 'react-icons/ai';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import {FaMoneyBillAlt} from 'react-icons/fa';
import {BiCoinStack} from 'react-icons/bi';
import {BsBox} from 'react-icons/bs';
import {FaHandPaper} from 'react-icons/fa';
import {RxQuestionMark} from 'react-icons/rx';

function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <div className="left-sidebar__header-icons">
        <FaArrowUp />
        <HiUsers />
        <BsFillVolumeUpFill />
        <SlEarphones />
        <AiFillCloud />
        <AiOutlineArrowLeft />
      </div>
      {/* left sidebar content */}
      <div className='left-sidebar__content'>
        <div className='gaming-box'>
          <h4>Jackpots</h4>
          <FaMoneyBillAlt className='icon-size' />
        </div>
        <div className='gaming-box'>
          <h4>Coninflip</h4>
          <BiCoinStack className='icon-size' />
        </div>
        <div className='gaming-box'>
          <h4>Mysterybox</h4>
          <BsBox className='icon-size' />
        </div>
        <div className='gaming-box'>
          <h4>Rosk Paper Scissors</h4>
          <FaHandPaper className='icon-size' />
        </div>
        <div className='gaming-box'>
          <h4>Chat Giveaway</h4>
          <h4>14:59</h4>
        </div>
      </div>
      <div className="left-sidebar__forms">
        <div className="input-form">
          <div className='input-form__icon'>
            <RxQuestionMark />
          </div>
          <input type="text" name='text' placeholder='(Username)' />
        </div>
        <p className='input-form__description'>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
        <div className="input-form">
          <div className='input-form__icon'>
            <RxQuestionMark />
          </div>
          <input type="text" name='text' placeholder='(Username)' />
        </div>
        <p className='input-form__description'>Text Text Text Text Text Text</p>
        <div className="input-form">
          <div className='input-form__icon'>
            <RxQuestionMark />
          </div>
          <input type="text" name='text' placeholder='(Username)' />
        </div>
        <p className='input-form__description'>Text Text Text Text Text Text</p>
        <div className="input-form">
          <div className='input-form__icon'>
            <RxQuestionMark />
          </div>
          <input type="text" name='text' placeholder='(Username)' />
        </div>
        <p className='input-form__description'>Text Text Text Text Text Text</p>
        <div className="input-form">
          <div className='input-form__icon'>
            <RxQuestionMark />
          </div>
          <input type="text" name='text' placeholder='(Username)' />
        </div>
        <p className='input-form__description'>Text Text Text Text Text Text</p>
      </div>
      <div className="left-sidebar__footer">
        <div className="input-form">
          <textarea placeholder='Say something...' />
        </div>
      <div className="user">
        <div>
          <span className='circle-box'></span>
          <span>User online: 4354</span>
        </div>
        <button className='user-btn'>SEND</button>
      </div>
      </div>
    </div>
  );
}

export default LeftSidebar;