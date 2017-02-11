let motSecret = "popschool";
let reponse ;

function mfInitReponse(){
	reponse = "" ;
	for (let i = 0 ; i < motSecret.length ; i++) {
		reponse += '.' ;
	}
	document.pendu_form.reponse_txt.value = reponse ;
}

function mfChkCar(car)
{
	let buf = '' ;

	for (let i = 0 ; i < motSecret.length  ; i++) {

		if (motSecret.charAt(i) == car ) {
			buf += car ;
		}
		else {
			buf += reponse.charAt(i) ;
		}
	}
	document.pendu_form.reponse_txt.value = buf ;
	reponse = buf ;

}

function mfAfficherAlphabet() {

let alphabet = "abcdefghijklmnopqrstuvwxyz" ;


for (let  i = 0 ; i < alphabet.length / 2 ; i++) {
		document.write('<td>') ;
		let lettre = alphabet.charAt(i) ;


		let buf = "<button value=\"" + lettre + "\"  onclick=\"mfChkCar(this.value)\">" + lettre +"</button>" ;
		document.write(buf) ;
		document.write('</td>') ;

	}
	 document.write('</tr>') ;

	 document.write('<tr>') ;
	  for (let  i = alphabet.length /2 ; i < alphabet.length ; i++) {
		document.write('<td>') ;
		let lettre = alphabet.charAt(i) ;


		let buf = "<button value=\"" + lettre + "\"  onclick=\"mfChkCar(this.value)\">" + lettre +"</button>" ;
		document.write(buf) ;
		document.write('</td>') ;

	}
	 document.write('</tr>') ;
	 document.write("</table>") ;
}


mfInitReponse() ;
mfAfficherAlphabet() ;
