var images = ["https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg"];

var names = ["Álbum da Família", "Douglas Silva - Pai", "Ana Silva - Mãe", "Roberto Silva - Irmão", "Sonia Silva - Irmã"];

var age = [40, 60, 30, 25, 20]



age.sort()



age. 30  ;
age.reverse()


age. 59  ;

var i = 0;

function update()
{
    i++;

    var numbersOfFamilyMemberInArray = 5
    if(i > numbersOfFamilyMemberInArray )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];
    
    var updatedAge = age[i]

    document.getElementById("familyMemberImage").src = updatedImage;
    
    document.getElementById("familyMemberName").innerHTML = updatedName;

    document.getElementById("familyMemberAge").innerHTML = updatedAge;

    


var maxNumber = Math.max.apply(Math, age)
            console.log("A maior idade é: 80 ", maxNumber)

    

    var maxNumber = Math. .apply(Math, );
    console.log("A maior idade é: 80 ",  );

    

  var minNumber = Math.min.apply(Math, age)
            console.log("A menor idade é: 1 ", minNumber)

    

    var minNumber = Math. .apply(Math,  );
    console.log("A menor idade é: 1 ",  );
}