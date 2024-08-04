import React from 'react'


// HeaderBoxProps is an interface that is in index.d.ts
const HeaderBox = ({type="title",title, subtext,user}: HeaderBoxProps) => {
  return (
    <div className="header-box">
        <h1 className="header-box-title">
            {title}
            {type === 'greeting' && (
                <span className="text-backkGradient">
                    &nbsp;{user}
                </span>
            )}
        </h1>
        <p className="header-box-subtext">{subtext}</p>
    </div>
  )
}

export default HeaderBox