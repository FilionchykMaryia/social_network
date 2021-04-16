import React from 'react';
import Preloader from '../Preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
  
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <>
      {/* <div className="content-banner__img"></div> */}
      <div className="profile">
        <img className="profile-avatar" src={props.profile.photos.large ? props.profile.photos.large : process.env.PUBLIC_URL +`/img/avatars/3.jpg`} alt="avatar"/>
        <ProfileStatus status={'Hello my friends'}/>
        <div className="profile-decription">
          <div className="profile-decription__items">
            <span className="label">Name:</span> {props.profile.fullName}</div>
          <div className="profile-decription__items"><span className="label">About Me:</span> {props.profile.aboutMe}</div>
          <div className="profile-decription__items">{props.profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'}</div>
          <div className="profile-decription__items">{props.profile.lookingForAJobDescription}</div>
        </div>
        <div className="profile-contacts"><span className="label">Contacts:</span>
          {props.profile.contacts.github && <div>
            <img className="icon" src={process.env.PUBLIC_URL +`/img/icons/github.png`} alt="github"/>
            <span>{props.profile.contacts.github}</span>
          </div>}
          {props.profile.contacts.vk && <div>            
            <img className="icon" src={process.env.PUBLIC_URL +`/img/icons/vk.png`} alt="vk"/>
            <span>{props.profile.contacts.vk}</span>
            </div>}
          {props.profile.contacts.facebook && <div>
            <img className="icon" src={process.env.PUBLIC_URL +`/img/icons/facebook.png`} alt="facebook"/>
            <span>{props.profile.contacts.facebook}</span>
          </div>}
          {props.profile.contacts.instagram && <div>
            <img className="icon" src={process.env.PUBLIC_URL +`/img/icons/instagram.png`} alt="instagram"/>
            <span>{props.profile.contacts.instagram}</span>
          </div>}
          {props.profile.contacts.twitter && <div>
            <img className="icon" src={process.env.PUBLIC_URL +`/img/icons/twitter.png`} alt="twitter"/>
            <span>{props.profile.contacts.twitter}</span>
          </div>}
          {props.profile.contacts.website && <div>
            <img className="icon" src={process.env.PUBLIC_URL +`/img/icons/website.png`} alt="website"/>
            <span>{props.profile.contacts.website}</span>
          </div>}
          {props.profile.contacts.youtube && <div>
            <img className="icon" src={process.env.PUBLIC_URL +`/img/icons/youtube.png`} alt="youtube"/>
            <span>{props.profile.contacts.youtube}</span>
          </div>}
          {props.profile.contacts.mainLink && <div>
            <img className="icon" src={process.env.PUBLIC_URL +`/img/icons/mainLink.png`} alt="mainLink"/>
            <span>{props.profile.contacts.mainLink}</span>
          </div>}
        </div>
       
      </div>
    </>
  )
}
export default ProfileInfo;