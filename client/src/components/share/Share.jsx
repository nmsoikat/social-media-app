import './share.css'
import { EmojiEmotions, Label, LineAxisOutlined, PermMedia, Room } from '@mui/icons-material';
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios'

export default function Share() {
  const { user } = useContext(AuthContext)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const desc = useRef();
  const [file, setFile] = useState(null);


  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId: user._id,
      desc: desc.current.value
    }

    if (file) {
      const data = new FormData()
      const fileName = Date.now() + file.name;

      data.append("file", file)
      data.append("name", fileName)

      newPost.photo = fileName;

      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post("/posts", newPost);
    } catch (err) {
      console.log(err);
    }
  }
  return <div className='share'>
    <div className="share-wrapper">
      <div className="share-top">
        <img src={user.profilePicture ? PF + user.profilePicture : PF + "/person/noAvatar.png"} alt="" className="share-profile-img" />
        <input placeholder={"What's on your mind " + user.username + "?"} className="share-input" ref={desc} />
      </div>

      <hr className="share-hr" />

      <form className="share-bottom" onSubmit={submitHandler}>
        <div className="share-options">
          <label id="file" className="share-option">
            <PermMedia htmlColor='tomato' className='share-option-icon' />
            <span className='share-option-text'>Photo or Video</span>
            <input style={{ display: 'none' }} type="file" id="file" name='file' accept='.png,.jpeg,.jpg' onChange={(e) => setFile(e.target.files[0])} />
          </label>
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
        <button className="share-btn" type='submit'>Share</button>
      </form>
    </div>
  </div>;
}
