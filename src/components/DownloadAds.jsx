import React from 'react'

function DownloadAds (){

    const downloadIconsStyle = "w-[80px] h-[80px] mx-4";
    return (
        <div className="flex lg:justify-left py-4">
            <img className={downloadIconsStyle} src={require('../imgs/app-store.png')} alt="music logo"/>
            <img className={downloadIconsStyle} src={require('../imgs/playstore.png')} alt="music logo"/>
        </div>
    )
}

export default DownloadAds;