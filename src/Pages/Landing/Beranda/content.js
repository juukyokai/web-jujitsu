import React from 'react';
import "./w3.css";

export default function content(){
    return (
        <div>
            <header class="w3-display-container w3-center">
            <button class="w3-button w3-block w3-green w3-hide-large w3-hide-medium" onclick="document.getElementById('download').style.display='block'">Download <i class="fa fa-android"></i> <i class="fa fa-apple"></i> <i class="fa fa-windows"></i></button>
            
            <div class="mySlides w3-animate-opacity">
                <img class="w3-image" src="/w3images/app2.jpg" alt="Image 2" style="min-width:500px" width="1500" height="1000">
                <div class="w3-display-left w3-padding w3-hide-small" style="width:35%">
                <div class="w3-black w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large">
                    <h1 class="w3-xlarge w3-text-red"><b>CLICK!</b> Fast and Easy</h1>
                    <hr class="w3-opacity">
                    <p>Choose from thousands of features</p>
                    <p><button class="w3-button w3-block w3-red w3-round" onclick="document.getElementById('download').style.display='block'">Download <i class="fa fa-android"></i> <i class="fa fa-apple"></i> <i class="fa fa-windows"></i></button></p>
                </div>
                </div>
            </div>
            <div class="mySlides w3-animate-opacity">
                <img class="w3-image" src="/w3images/app4.jpg" alt="Image 3" style="min-width:500px" width="1500" height="1000">
                <div class="w3-display-left w3-padding w3-hide-small" style="width:35%">
                <div class="w3-black w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large">
                    <h1 class="w3-xlarge">Smart Design</h1>
                    <hr class="w3-opacity">
                    <p>Customize photos as you go</p>
                    <p><button class="w3-button w3-block w3-indigo w3-round" onclick="document.getElementById('download').style.display='block'">Download <i class="fa fa-android"></i> <i class="fa fa-apple"></i> <i class="fa fa-windows"></i></button></p>
                </div>
                </div>
            </div>
            <a class="w3-button w3-black w3-display-right w3-margin-right w3-round w3-hide-small w3-hover-light-grey" onclick="plusDivs(1)">Take Tour <i class="fa fa-angle-right"></i></a>
            <a class="w3-button w3-block w3-black w3-hide-large w3-hide-medium" onclick="plusDivs(1)">Take Tour <i class="fa fa-angle-right"></i></a>
            </header>
        </div>
        
    )
}

function comp1() {
    <div class="mySlides w3-animate-opacity">
    <img class="w3-image" src="/w3images/app.jpg" alt="Image 1" style="min-width:500px" width="1500" height="1000">
        <div class="w3-display-left w3-padding w3-hide-small" style="width:35%">
        <div class="w3-black w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large">
            <h1 class="w3-xlarge">Take photos with our app</h1>
            <hr class="w3-opacity">
            <p>Super simple installment: free of charge</p>
            <p><button class="w3-button w3-block w3-green w3-round" onclick="document.getElementById('download').style.display='block'">Download <i class="fa fa-android"></i> <i class="fa fa-apple"></i> <i class="fa fa-windows"></i></button></p>
        </div>
        </div>
    </div>
}