import React, { useEffect } from "react";
import {Howl, Howler} from 'howler';
    
var isPlaying = false;
var hours = [];
var currentHour = new Date().getHours(); 
var interval = msToNextHour();

// TODO use the clock component for these things, would allow for faking time in the future

function MusicPlayer() {

    useEffect(() => {
        setInterval(() => {
            TransitionHour();
            interval = msToNextHour();
        }, interval);
    });

    // Preloads all songs
    for (var i = 0; i < 24; i++)
    {
        hours[i] = new Howl({
            src: ['/songs/scruffy' + i + '.mp3'],
            loop: true,
        });
    }

    return (
        <div>
            <button onClick={() => Play()}>
                PLAY
            </button>
        </div>
    )
}

function TransitionHour()
{
    // Ideally, should go fade out -> hour chime (optional) -> fade in
    var prevHour = currentHour;
    currentHour++;
    currentHour %= 24;

    console.log("Transitioning from " + prevHour + " to " + currentHour)
    hours[prevHour].fade(1, 0, 1000);
    hours[prevHour].on('fade', function (){
        if (isPlaying)
        {
            hours[currentHour].play();
            hours[currentHour].fade(0, 1, 1000); // Fade in
        }
        hours[prevHour].off();
    });
}

function Play()
{
    isPlaying = !isPlaying; // Toggle playing
    hours[currentHour].play(); // Fade in?
}

// https://stackoverflow.com/questions/9337616/calculate-amount-of-time-until-the-next-hour
function msToNextHour() {
    return 3600000 - new Date().getTime() % 3600000;
}

export default MusicPlayer;