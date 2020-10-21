
import React from 'react';
import './Home.css';

export default function Home(){
    return(
        <>
           <header>
            <div class='hbutton'>
                <svg height="32px" class="hamburger" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px"  xmlns="http://www.w3.org/2000/svg" >
                    <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
                </svg>

                <nav>
                    <ul>
                        <li class="link"><a href='https://www.google.com/search?q=emil+joshy&rlz=1C5CHFA_enIN918IN918&oq=emil+joshy&aqs=chrome..69i57j69i60l2j69i61.2819j0j15&sourceid=chrome&ie=UTF-8' target="_blank">About Me</a></li>
                        <li class="link"><a href='https://www.instagram.com/emjshrx/' target="_blank">Instagram</a></li>
                        <li class="link"><a href='https://www.linkedin.com/in/emil-joshy-1ab610144/' target="_blank">Linkedin</a></li>
                        <li class="link"><a href='https://github.com/emjshrx' target="_blank">Github</a></li>
                    </ul>
                </nav>
            </div>
            <div class="name">Emil Joshy</div>
            </header>
            <main>
                <div class="isa">I am a</div>
                <div class="jobs">
                    <div class="job" ><a href='/#/clock'>timekeeper</a></div>
                    <div class="job" ><a href='https://drive.google.com/drive/folders/0B8Tu2WmoMEAjOTJyUUxMRXk2Y3M?usp=sharing' target="_blank">designer</a></div>
                    <div class="job" ><a href='https://www.youtube.com/channel/UCap13UTaDSzgB4u-7gyuQtw' target="_blank">critic</a></div>
                    <div class="job" ><a href='https://drive.google.com/drive/folders/0B8Tu2WmoMEAjOTJyUUxMRXk2Y3M?usp=sharing' target="_blank">editor</a></div>
                    <div class="job" ><a href='https://github.com/emjshrx/' target="_blank">hacker</a></div>
                    
                </div>
                
            </main>
            <div class="subtext">click links to explore</div>
            <footer>
                <div class="foottext">COPYRIGHT © 2020</div>
            </footer> 
        </>
    );
}