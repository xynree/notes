# NOTES FOR " GETTING STARTED WITH P5 JS "


## Chapter 2: Starting to Code

- sketch.js has two blocks - setup() and draw()
    - any code setting up initial program state is in setup() block
    - any code that involves drawing things to screen is in draw() block


## Chapter 3: Draw

- createCanvas(): two parameters (width, height) of canvas.
    - function setup() {
    createCanvas(800,600)}
- 3.2: Draw a Point:
    function draw() {
    background(204);
    point(240, 60(;{

- Basic Shapes:
   - line(x1, y1, x2, y2)
   - triangle(x1, y1, x2, y2, x3, y3)
   - quad(x1,y1,x2,y2,x3,y3, x4,y4)
   -rect(x, y, width, height(
   -ellipse(x,y,width,height)
   -arc(x,y,width,height,start,stop)

- 3-7 Draw Part of Ellipse
    - arc() draws a piece of ellipse
        - 1/2 parameter sets location
        - 3/4 sets width/height
        - 5/6 : angel to start arc, angle to stop
    - Angles are set in radians instead of degrees
        - PI: 180
        - QUARTER_PI: 45
        - HALF_PI: 90
        - TWO_PI: 360
    - can convert to degree with radian():
        - arc(90,60,80,80,0, radians(90))
Stroke Attributes - 
- 3-12 Set Stroke Weight
    - strokeWeight(pixelsize) only one at a time.
    - strokeJoin(ROUND) round stroke corners
    - strokeJoin(BEVEL)
    - strokeCap(SQUARE)
    - strokeCap(ROUND) round line endings
- Color:
    - use fill() and stroke()
        - noFill()
        - noStroke()
    - add extra parameter to fill to define OPACITY.
- beginShape() makes a new shape.
    - beginShape();
        vertex(x,y)
        vertex(x,y)
        endShape(CLOSE)

# Chapter 4: Variables

- variables can be placed outside of setup() and draw(); those are called "global" 

vocab:
    - declare : sets aside space to store information. 
        - var x; var x = 12;
    
- p5js special variables : width, height specifies width and height of CANVAS as created in createCanvas
- basic arithmetic : PEMDAS order
- special JS operaters: +=, -=, ++, --

- Repitition
    - use for loops to adjust variables:
        - for (var i= 20; i < 440, i+=60))
            - line(i, 40, i + 60, 80);
        - for (init; test; update) {statements}
    - embedding for loops, fanning out lines, changing shapes
    - for loops adjacent to each other

# Chapter 5 : Response

- You can define global variables outside of setup() and draw()
    - Order:
        - Variables outside of setup() and draw() are generated
        - Code inside setup() run once
        - Code inside draw() run continuously
- Mouse Position
    - Track mouse position with mouseX and mouseY
    - To refresh screen put background command in the begining of 'draw' function.i
    - pMouseX, pmouseY: position of mouse at previous framei    - Easing:
        - x+= (mouseX - x)* easing
        - easing between 0 and 1. Speed and which variable catches up is set with easing value.
- Mouse Click
    - mouseIsPressed => boolean
    - mouseButton = LEFT, CENTER, RIGHT
- dist() function calculates distance between two points.

-Type
    -keyIsPressed => boolean
    - textSizE(), textModifier, text(key, positionX, posY)
- Touch
    - touchIsDown, touchX, touchY


# Chapter 6: Translate, Rotate, Scale

- Translate
    - Translate sets the (0,0) coordinate of the screen to the (x,y) value.
    - Transformations made are applied to all drawing functions that follow

- Rotate
    - takes parameter of angle in radians to rotate
        - ex: corner rotation
            - rotate(mouseX/100)
        - ex: center rotation
            - switch coordinates so 0,0 is at the center of the shape
        - ex: translation/rotation
            - use translate to move to location, then rotate to draw with center around(0,0)
    - rectMode(), ellipseMode(), imageMode(): draws shapes from the center

- Scale
    -  everything drawn to canvas increases/decreases with ths dimension
    - Scalar value: used ot keep strokes consistent

- Push/Pop
    - used to isolate transformations


# Chapter 7: Media

- Images
    - Add image to sketch folder
    - Create variable to store imagfe
    - Load image into variable with loadImage()
- Load Images
    - preload() runs once before setup()
    - draw image with image()
        - img = loadImage('lunar.jpg')
        - image(img, 0,0)
        - first parameter specifies image to draw, second/third set coordinates for image, fourth and fifth set width & height
    - gif/png/svg supports transparancy

- Asynchronicity
    - preload() is synchronus - forces program to wait before moving on
        - only load calls in preload()
    - instead of preload(), could use a callback function
        - loadImage('lunar.jpg', callFunc)
        - drawImage(img){image(img, 0,0)}
            - once image loaded, callback function is automatically called

- Fonts
    - load in fonts from computer
        - textFont('Arial') to set font
        - draw letter with text()
        - change size textSize()
    - WebFont
        - link into index.html
    - Load custom font
        - preload(){
            font = loadFont('SourceCodePro-Regular.ttf')}

    - fill() stroke() affect text
    - to draw text in a box, add fourth/fith param for w/h
    - store text in variable
