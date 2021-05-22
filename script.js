(function(){
    function QustionAnswer(qustion,answer,key){
        this.qustion=qustion,
        this.answer=answer,
        this.key=key;
        this.correctAnswer=function(ans,fn){
           
            if(this.answer[ans]==this.answer[this.key]){
                console.log("you get correct answer");
               var sc= fn(true);
            }else{
                console.log("you get the wrong Anwer");
                var sc= fn(false);
            }
            this.scoreDisplay(sc);
    
        }
    }
    QustionAnswer.prototype.displayQustion=function(){
        console.log(this.qustion);
        for (var i=0; i<this.answer.length; i++){
            console.log(i+") "+this.answer[i]);
        }
    }
    QustionAnswer.prototype.scoreDisplay=function(score){
        console.log("the total Score is"+ score);
        console.log("---------------------------");
    }

    
    var q1=new QustionAnswer("what is your age ",[12,13,18],2);
    var q2=new QustionAnswer("what is your name",["anzil","nithinsha","khan"],1);
    var q3=new QustionAnswer("what is color of apple",["red","oranmge","green"],0);
    
    
    var qustionList=[q1,q2,q3];

    // --function inside the functionLike clouse ---
    function score(){
        var sc=0;
        return function(cor){
            if(cor){
                sc++;
            }
            return sc;
        }
    }
    var keepScore=score();


 // ---nextQustionFunction---
  function nextQustion(){
    var rand=Math.floor(Math.random()*qustionList.length)
    qustionList[rand].displayQustion();
    var ans=prompt(qustionList[rand].qustion); 
  
    if(ans !== "exit"){    
        qustionList[rand].correctAnswer(parseInt(ans),keepScore);
        nextQustion();
    }
 
  }



  nextQustion();
})()


