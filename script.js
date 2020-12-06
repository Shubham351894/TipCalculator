class Calculator {
    // default constructor inside a class
    constructor()
    {
        
        try{

            //obtaining value for each input
             this.x = document.getElementById("usr").value;
             this.y = document.getElementById("tip").value;
             this.z = document.getElementById("ppl").value;
            //parse float the first variable
             this.a = parseFloat(this.x);
            
            if(isNaN(this.a))
            {
                //Set the default value in case of Not a number .
                document.getElementById("usr").value=0.0;
            }
            else{
                //Else set the parse value in input form.
                document.getElementById("usr").value=this.a;
                
            }
            }
            catch(err)
            {
                //If in case some error will come it will be redirected to console .
                console.log(err);
            }    

    }
     
   
    
  }
  //Inheritance
class TipCalculator extends Calculator{

    constructor()
    {
        //This super keyword calls the default constructor of super/parent class.
        super();
    }
    tipCalculation() {
        //This method calculates the tip per person
        try{
            //This if is checking wheather amount is non a noumber if true set default value 0.
            if(isNaN(this.a))
            {
                
                document.getElementById("tipperpp").innerHTML = 0;
               
            }
            else{
                //If above is false then calculate tip per person
                 this.d=(this.a*this.y)/(this.z*100);
                 document.getElementById("tipperpp").innerHTML =this.d;
          

            }

        }
        catch(err)
        {
            //If in case some error will come it will be redirected to console 
            console.log(err);
        }
           
        
        
    }
    totalperPerson(){
        //This methord calculate amount per person
        try{
            //This if is checking wheather amount is non a noumber if true set default value 0.
        if(isNaN(this.a))
        {
            document.getElementById("total").innerHTML = 0;
        }
        else{
            //If above is false then calculate the value.
            this.e=(this.a)+(this.a*this.y)/100;
            document.getElementById("total").innerHTML=(this.e)/(this.z);
        }
      
        }
        catch(err)
        {
            //If in case some error will come it will be redirected to console 
            console.log(err);
        }
        
    }

}
//This function create the object of subclass and call required methord.
 function myController() {
     //subclass object is created and call the default constructor of subclass
     var bb= new TipCalculator();
     bb.tipCalculation();
     bb.totalperPerson();


 }



  