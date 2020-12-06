class Calculator {
    // default constructor inside a class
    constructor()
    {
        
        try{

            //obtaining value for each input
             this.bill = document.getElementById("usr").value;
             this.tip = document.getElementById("tip").value;
             this.noPerson = document.getElementById("ppl").value;
            //parse float the first variable
             this.floatBill = parseFloat(this.bill);
            
            if(isNaN(this.floatBill) || this.floatBill<0)
            {
                //Set the default value in case of Not a number and less than 0.
                document.getElementById("usr").value=0.0;
            }
            else{
                //Else set the parse value in input form.
                document.getElementById("usr").value=this.floatBill;
                
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
            //This if is checking wheather amount is non a noumber or less than 0 if true set default value 0.
            if(isNaN(this.floatBill) || this.floatBill<0)
            {
                
                document.getElementById("tipperpp").innerHTML = 0;
               
            }
            else{
                //If above is false then calculate tip per person
                 this.temp=(this.floatBill*this.tip)/(this.noPerson*100);
                 document.getElementById("tipperpp").innerHTML =this.temp;
          

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
            //This if is checking wheather amount is non a noumber or less than 0 if true set default value 0.
        if(isNaN(this.floatBill) || this.floatBill<0 )
        {
            document.getElementById("total").innerHTML = 0;
        }
        else{
            //If above is false then calculate the value.
            this.temp2=(this.floatBill)+(this.floatBill*this.tip)/100;
            document.getElementById("total").innerHTML=(this.temp2)/(this.noPerson);
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
     var obj= new TipCalculator();
     obj.tipCalculation();
     obj.totalperPerson();


 }



  