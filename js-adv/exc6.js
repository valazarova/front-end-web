/*
	Условие:
		Създайте с JavaScript html страница, имаща вида 6.png. За улеснение, текста в 
        колона "Comments" може да е произволен.	
*/
var FirstLine = '<td>A</td>\
            <td>Power Output</td>\
            <td>3 Stars</td>\
            <td>80% 18 studies</td>\
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A architecto blanditiis cumque doloribus, eius enim est exercitationem harum itaque iure iusto magni nam nobis? Alias  aspenatur deleniti deserunt ea veniam!</td>'

var SecondLine = '<td>B</td>\
            <td>Weight</td>\
            <td>4 Stars</td>\
            <td>100% 65 studies</td>\
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab ad corporis cumque, dignissimos eaque excepturi fuga in ipsa laudantium mollitia obcaecati</td>'

var myTable = '<!DOCTYPE html>\
    <html>\
    <head>\
        <title>Table</title>\
    </head>\
    <body>\
    <button onClick="switchLines()">Magic button for switching lines</button>\
        <table border="1">\
            <caption>Table caption</caption>\
            <tr>\
            <th>Evidence Rating</th>\
                 <th>Effect</th>\
                 <th>Efficiancy</th>\
                 <th>Consensas</th>\
                 <th>Comments</th>\
            </tr>\
            <tr id="FirstLine">\
            </tr>\
            <tr id="SecondLine">\
            </tr>\
        </table>\
    </body>\
    </html>'


function switchLines(){
    document.getElementById("FirstLine").innerHTML = SecondLine;
    document.getElementById("SecondLine").innerHTML = FirstLine;
}
function create() {
    document.documentElement.innerHTML = myTable;
    document.getElementById("FirstLine").innerHTML = FirstLine;
    document.getElementById("SecondLine").innerHTML = SecondLine;

};

create();