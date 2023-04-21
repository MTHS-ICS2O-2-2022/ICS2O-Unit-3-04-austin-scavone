// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * This function is calculates the area of a trapezoid
*/
'use strict'


function calculate () {
// input
const farheneit = parseFloat(document.getElementById('fahrenheit').value)

// process

const celsius = (farheneit - 32) * 5 / 9

// output
document.getElementById('celsius').innerHTML = 'celsius is: ' + celsius + ' °C'
}