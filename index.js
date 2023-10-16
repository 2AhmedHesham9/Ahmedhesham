function check() {
    dna = document.getElementById("dna").value;
    if (dna.length > 0) {


        //  ch= [...dna].sort().join('');   //sort the string 
        //  dna=Array.from(new Set(dna.split(','))).toString();

        const remDup = e => [...new Set(e)].sort().join("");  //remove duplicated letters
        cdna = remDup(dna);
        if ((cdna[0] == 'a' && cdna[1] == 'c') && (cdna[2] == 'g' && cdna[3] == 't') && (cdna.length == 4)) //check after remove duplicat
        {
            alert("DNA VALID");
            return true;
        }
        else {
            alert("DNA INVALID");
            return false;
        }
    }

    //  console.log(cdna);

}

function convert() {
    dna = document.getElementById("dna").value;
    rna = "";


    if (dna.length > 0) {
        // first i need to check if dna valid or noooooooooot

        if (check()) {
            document.getElementById("d").innerHTML = dna;
            // console.log ("true");
            for (i = 0; i < dna.length; i++) {
                if (dna[i] == 't') {
                    rna += 'u';
                }
                else {
                    rna += dna[i];
                }
            }
            console.log(rna);

            document.getElementById("r").innerHTML = rna;
            document.getElementById("card").style.display="block";


        }

    }

}