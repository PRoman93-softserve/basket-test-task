import React from "react";
import preloader from './preloader.gif'
import s from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div className={s.preloaderContainer}><img src={preloader} alt=""/></div>
    )
}
export default Preloader
