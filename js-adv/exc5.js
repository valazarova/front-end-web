
function change(sColor1,sColor2){

    var paragraphs = document.getElementsByTagName("p");
    var classHeaderTitle = document.getElementsByClassName("headertitle");

    
    var numberParagraphs = paragraphs.length;
    var numberClasses = classHeaderTitle.length;
    
    for(var i=0;i<numberParagraphs;i++){
        paragraphs[i].style.backgroundColor = sColor1;
    }

    for(var i=0;i<numberClasses;i++){
        classHeaderTitle[i].style.backgroundColor = sColor2;
    }
    let result = `${numberParagraphs} параграфа,${numberClasses} елемента с клас <headertitle>`;
    document.getElementsByTagName("title")[0].innerHTML = result;

}
change("red","pink");

