let serial = 0;

// card 1 : triangle
document.getElementById('triangle-btn').addEventListener('click', function () {
    const triangle_b_Value = getInputFieldValueById('triangle-b-field');
    const triangle_h_Value = getInputFieldValueById('triangle-h-field');
    const triangleFixedValue = parseFloat(0.5);
    const triangleTotalResult = triangleFixedValue * triangle_b_Value * triangle_h_Value;
    const card_Name = document.getElementById("triangle-title").innerText;
    serial += 1;
    displayData(card_Name, triangleTotalResult);
})

// card 2 : Rectangle
document.getElementById('rectangle-btn').addEventListener('click', function () {
    const rectangle_w_Value = getInputFieldValueById('rectangle-w-field');
    const rectangle_i_Value = getInputFieldValueById('rectangle-i-field');
    const rectangleTotalResult = rectangle_w_Value * rectangle_i_Value;
    const card_Name = document.getElementById('rectangle-title').innerText;
    serial += 1;
    displayData(card_Name, rectangleTotalResult);
})

// card 3 : Parallelogram
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const parallelogramResult = getInnerElementValueById('parallelogram-b-value', 'parallelogram-h-value');
    const card_Name = document.getElementById('parallelogram-title').innerText;
    serial += 1;
    displayData(card_Name, parallelogramResult);
})

// card 4 : Rhombus
document.getElementById('rhombus-btn').addEventListener('click', function () {
    const rhombusFixedValue = 0.5;
    const rhombusResult = getInnerElementValueById('rhombus-d1-value', 'rhombus-d2-value');
    const rhombusFinalResult = rhombusFixedValue * rhombusResult;
    const card_Name = document.getElementById('rhombus-title').innerText;
    serial += 1;
    displayData(card_Name, rhombusFinalResult);
})

// card 5 : Pentagon
document.getElementById('pentagon-btn').addEventListener('click', function () {
    const pentagonFixedValue = 0.5;
    const pentagonResult = getInnerElementValueById('pentagon-p-value', 'pentagon-b-value');
    const pentagonFinalResult = pentagonFixedValue * pentagonResult;
    const card_Name = document.getElementById('pentagon-title').innerText;
    serial += 1;
    displayData(card_Name, pentagonFinalResult);
})

// card 6 : Ellipse
document.getElementById('ellipse-btn').addEventListener('click', function () {
    const pieValue = 3.14;
    const ellipseResult = getInnerElementValueById('ellipse-a-value', 'ellipse-b-value');
    const ellipseFinalResult = (pieValue * ellipseResult).toFixed(2);
    const card_Name = document.getElementById('ellipse-title').innerText;
    serial += 1;
    displayData(card_Name, ellipseFinalResult);
})


// CARD BACKGROUND COLOR CHANGE RANDOMLY :::::::::::::::::::::::::::::::::::::::

// card 1 random background color
document.getElementById('triangle-random-color').addEventListener('mouseover', function () {
    // console.log('clicked color')
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const changedColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementById('triangle-random-color').style.backgroundColor = changedColor;
})

// card 2 random background color
document.getElementById('rectangle-random-color').addEventListener('mouseover', function () {
    // console.log('clicked color')
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const changedColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementById('rectangle-random-color').style.backgroundColor = changedColor;
})

// card 3 random background color
document.getElementById('parallelogram-random-color').addEventListener('mouseover', function () {
    // console.log('clicked color')
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const changedColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementById('parallelogram-random-color').style.backgroundColor = changedColor;
})

// card 4 random background color
document.getElementById('rhombus-random-color').addEventListener('mouseover', function () {
    // console.log('clicked color')
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const changedColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementById('rhombus-random-color').style.backgroundColor = changedColor;
})

// card 5 random background color
document.getElementById('pentagon-random-color').addEventListener('mouseover', function () {
    // console.log('clicked color')
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const changedColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementById('pentagon-random-color').style.backgroundColor = changedColor;
})

// card 6 random background color
document.getElementById('ellipse-random-color').addEventListener('mouseover', function () {
    // console.log('clicked color')
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const changedColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementById('ellipse-random-color').style.backgroundColor = changedColor;
})
