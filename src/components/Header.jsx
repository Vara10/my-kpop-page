import React from "react";
import CenterMenu from "./CenterMenu";

function Header(){

    const iconHeroStyle = "w-[50px] h-[50px]";
    return(
        <header class="text-white body-font bg-indigo-500">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className={iconHeroStyle} src={require('../imgs/musica.png')} alt="music logo"/>
                    <span class="ml-3 text-xl text-white">KpopApp</span>
                </a>
                <CenterMenu/>
                {/*buttons*/}
                <div className="flex">
                    <button class="inline-flex items-center bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-200 rounded-xl text-base mt-4 md:mt-0 lg:w-lg">Login</button>
                    <button class="ml-4 inline-flex items-center bg-indigo-600 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-200 rounded-xl text-base mt-4 md:mt-0 lg:w-lg">Login</button>
                </div>
            </div>
        </header>
    )
}

export default Header;