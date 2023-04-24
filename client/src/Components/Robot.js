import React from 'react'
import Link from "next/link";


function Robot() {
  return (
    <center>
    <div className='robot-check'><h1>Click the Third Button😎</h1>
        <div className="button-grp">
            <button class="button">Nice</button>
            <button class="button">To</button>
            <Link href="/income"><button class="button">Have</button></Link>
            <button class="button">You</button>
            <button class="button">Here</button>
        </div>
    </div>
    </center>
  )
}

export default Robot