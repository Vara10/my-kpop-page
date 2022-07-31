import React from 'react'

function CenterMenu (){
    return (
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center gap-2">
      <a class="mr-5 hover:text-indigo-900">Home</a>
      <a class="mr-5 hover:text-indigo-900">Artist</a>
      <a class="mr-5 hover:text-indigo-900">Songs</a>
      <a class="mr-5 hover:text-indigo-900">Albums</a>
    </nav>
    )
}

export default CenterMenu;