import React, { useEffect } from "react";
import {Howl, Howler} from 'howler';
    
var hours = [];
var currentHour = new Date().getHours();
var interval = 10000;

console.log(interval);

function MusicPlayer() {

    useEffect(() => {
        setInterval(() => {
            TransitionHour();
        }, interval);
    });

    // Proloads all songs
    for (var i = 0; i < 24; i++)
    {
        hours[i] = new Howl({
            src: ['/songs/scruffy' + i + '.mp3'],
            loop: true,
        });
    }

    return (
        <div>
            <button onClick={() => hours[currentHour].play()}>
                PLAY
            </button>
            <button onClick={() => hours[currentHour].pause()}>
                STOP
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
        hours[currentHour].play();
        hours[currentHour].fade(0, 1, 1000); // Fade in
        hours[prevHour].off();
    });
}

export default MusicPlayer;