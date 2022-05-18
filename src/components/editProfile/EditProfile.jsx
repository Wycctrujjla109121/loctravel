import React from 'react';

//  COMPONENTS
import Avatar from './avatar/Avatar';
import Form from './form/Form';
//  STYLES
import s from './EditProfile.module.scss'

const EditProfile = () => {
    return (
        <div className={s.editProfile}>
            <button className={s.editProfile__close}></button>
            <div className={s.editProfile__info}>
                <Avatar />
                <Form />
            </div>
        </div>
    );
};

export default EditProfile;