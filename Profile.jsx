import React from 'react';


    const user= {
        name:'HEDY LAMAR',
        imageURL:'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize:90,
    };
    export default function Profile() {
        return (
            <>
                <h1>{user.name}</h1>
                <img
                    className="avator"
                    src={user.imageURL}
                    alt={'Photo of ' +  user.name}
                />
            </>
        )
    }
