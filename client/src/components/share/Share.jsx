import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material';
import './share.css'

export default function Share() {
  return <div className='share'>
    <div className="share-wrapper">
      <div className="share-top">
        <img src="/assets/person/7.jpeg" alt="" className="share-profile-img"/>
        <input placeholder="What's on your mind Nur?" className="share-input" />
      </div>

      <hr className="share-hr" />

      <div className="share-bottom">
        <div className="share-options">
          <div className="share-option">
            <PermMedia htmlColor='tomato' className='share-option-icon' />
            <span className='share-option-text'>Photo or Video</span>
          </div>
          <div className="share-option">
            <Label htmlColor='blue' className='share-option-icon' />
            <span className='share-option-text'>Tag</span>
          </div>
          <div className="share-option">
            <Room htmlColor='green' className='share-option-icon' />
            <span className='share-option-text'>Location</span>
          </div>
          <div className="share-option">
            <EmojiEmotions htmlColor='goldenrod' className='share-option-icon' />
            <span className='share-option-text'>Feelings</span>
          </div>
        </div>
        <button className="share-btn">Share</button>
      </div>
    </div>
  </div>;
}
