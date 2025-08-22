const form = document.querySelector("form")


//this use casewill give you empty values
//const height =  parseInt(document.querySelector("#height").value)

form.addEventListener("submit",function(e) {
    e.preventDefault();
 const result = document.querySelector("#results")
   const height =  parseInt(document.querySelector("#height").value)
   const weight =  parseInt(document.querySelector("#weight").value)
   if(height === "" || height<0 || isNaN(height)){
     result.innerHTML = `please give valid height ${height}`;
   }
   else if(weight === "" || weight < 0 || isNaN(weight)){
     result.innerHTML = `please give valid weight ${weight}`;
   }
   else{
    const BMI = (weight / ((height*height)/10000)).toFixed(2)
    if( BMI < 18.6){
        result.innerHTML = `<span>${BMI} = Under Weight</span>`
    }
    else if(BMI > 24.9){
        result.innerHTML = `<span>${BMI} = Over Weight</span>`
    }else{
        result.innerHTML = `<span>${BMI} = Normal Weight</span>`
    }
   }
 
})