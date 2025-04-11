# Calculator-Repo

# Sepnotes

Pano nagawa ung calculator?

Table of Contents

I. Head
II. Body
III. Buttons
IV. Script

I. Head

1. meta charset="UTF-8"

   - para ung ginamit nating pi at back space sign maging compatible sa website

   yung title tas style.css ung html combo na usual

II. Body

    Div class calculator
     - para ma encase ung mismong calcu tas ma set na ren ng name pang css

     input type text id display readonly
      - to ensure na ung display don bawal mo matypean
      - naka set to text ren para ma convert mamaya sa script ung text into code para ma execute ung code

    Div class buttons
    - main buttons ng calcue ung + - 12345 cjhuchuc

III. Buttons

    Button on click = append()

        Button on click
            - ung button on click event yan na naka lagay talaga sa html. nag aactivate pag clinick ng user

             (Reference: https://www.w3schools.com/jsref/event_onclick.asp)

        Append()=
            - ung append Jquery code siya (javascript library) na para mag add ung text don.

            - dun sa java script code ren natin relating siya dun sa function append para ma add ung corresponding button don sa display

    class=""
    - para ma label lang ung mga sqrt at ibang operators if trip niyo i design later


    Math (Reference: https://www.w3schools.com/js/js_math.asp)

        Math.*operation*
        - tawag jan sa mga math, chuchu math object ng javascript

        - static value yan ibig sabihin naka set na yan

        - so pag nag append ka parang

        add this function to the display tas add this to another function

    clearDisplay()

    - clear display function sa javascript code natin to set the value ng text box into blank

    backspace()

    - javascript code natin that uses slice para isang character lang ma babawasan sa bawat pindot

    (Reference: https://www.w3schools.com/jsref/jsref_slice_string.asp)

IV. Script

    const display = document.getElementById("display")

        - to get the value ng display textbox natin

    append(Value)

        - append to add the value sa text box

    cleardisplay()

        - pang clear ng textbox

    backspace()

        - slice function

    calculate()

        - custom code natin na gumagamit ng try and catch

            Try (Javascript code when handling errors ito)

                - Try ung statement para i try niy to run ung code block so pag pinindot ung equals sign which is calculate i trtry niya i solve ung equation dun sa display value

            Catch (javascript code error)

                - Pag may unusual na outcome dun sa eval kunyari bawal mag divide sa 0 or may letters bigla or any error na pwede mang yari. Imbis na masisira ung code i didisplay niya nalang ng error dun sa text box

    eval(display.value)
        - Yung eval javascript code na talaga that evaluates or executes ung given na argument or code doon so kunyari sin(90) tas na eval un
        si javascript na bahala

        (Reference: https://www.w3schools.com/jsref/jsref_eval.asp)

    function clearError(value)

    if (display.value === "Error") {
        display.value = "";  clear the display
    }
    display.value += value;

    ungcode na yan pag ung condition ng error nagpakita sa textbox tas may pinindot kang iba mag clclear na agad matik
