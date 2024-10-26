// 1.⁠ ⁠მარტივი გამრავლება
// ფუნქცია უნდა მიიღოს ორი რიცხვი და დააბრუნოს მათი ნამრავლი. მაგალითად, თუ არგუმენტები არიან 3 და 4, ფუნქციამ უნდა დააბრუნოს 12.



function multiply(x, y) {
    return x * y;
  }
  console.log(multiply(3, 4));
//  
// 2.⁠ ⁠ასაკის შემოწმება
// ფუნქციამ უნდა მიიღოს ასაკი და დააბრუნოს "შენ ხარ სრულწლოვანი", თუ ასაკი 18-ზე მეტია ან ტოლია, წინააღმდეგ შემთხვევაში უნდა დააბრუნოს "შენ ხარ არასრულწლოვანი".\



function checkAge(age) {
    

    if (age >= 18) {
        return "შენ ხარ სრულწლოვანი"
    } else {
      return "შენ ხარ არასრულწლოვანი"
    }
}

console.log(checkAge(18))
//  3.⁠ ⁠რიცხვი ლუწია თუ კენტი
// ფუნქციამ უნდა მიიღოს რიცხვი და გამოითვალოს, თუ ის ლუწია ან კენტი და დააბრუნოს შესაბამისი ტექსტი.

function isEvenOrOdd(num) {
   if (num % 2 === 0)  {
    return "ლუწია"
   } else {
    return "კენტია"
   }
}

console.log(isEvenOrOdd(17))

//  4.⁠ ⁠switch case – დღეების დასახელება
// ფუნქციამ უნდა მიიღოს 1-დან 7-მდე რიცხვი და switch case-ების გამოყენებით დააბრუნოს შესაბამისი დღის სახელი (მაგ. 1 - ორშაბათი, 2 - სამშაბათი და ა.შ.).

function getDayName(dayNumber) {
    switch(dayNumber) {
        case 1:
            return "ორშაბათი";
        case 2:
            return "სამშაბათი";
        case 3:
            return "ოთხშაბათი";
        case 4:
            return "ხუთშაბათი";
        case 5:
            return "პარასკევი";
        case 6:
            return "შაბათი";
        case 7:
            return "კვირა";
        default:
            return "არასწორი რიცხვი. შეიყვანე 1-დან 7-მდე.";
    }
}


console.log(getDayName(1)); 
console.log(getDayName(2)); 
console.log(getDayName(3)); 
console.log(getDayName(4)); 
console.log(getDayName(5)); 
console.log(getDayName(6)); 
console.log(getDayName(7)); 



//  5.⁠ ⁠ორი რიცხვის შედარება
// ფუნქციამ უნდა მიიღოს ორი რიცხვი და დააბრუნოს "პირველი რიცხვი უფრო დიდია", "მეორე რიცხვი უფრო დიდია" ან "ორივე რიცხვი ტოლია".

function compareNumbers(a, b) {
    if ( a > b  ) {
         return "პირველი რიცხვი უფრო დიდია"
    } else if (a < b) {
        return "მეორე რიცხვი უფრო დიდია"
    } else {
        return "ორივე რიცხვი ტოლია"
    }
   
    
}

console.log(compareNumbers(7 , 17 , ))


//  6.⁠ ⁠ოთხი მოქმედების კალკულატორი
// ფუნქცია უნდა მიიღოს ორი რიცხვი და ოპერატორი (+, -, *, /) და შესაბამისი ოპერატორის მიხედვით გამოითვალოს შედეგი.

function calculator(a, b, operator) {
  switch (operator) {
    case "+":
        return a + b
        break;
    case "-":
        return a - b
        break; 
        
    case "*":
        return a * b
        break;
        
    case "/":
        return a / b
           
  
    default:
        return "არასწორია"
        break;
  }
}

console.log (calculator(27 , 37, "+"))
console.log (calculator(77, 37, "-"))
console.log (calculator(7, 3, "*"))
console.log (calculator(77, 7, "/"))




//  7.⁠ ⁠ტემპერატურის კონვერტორი
// ფუნქცია უნდა მიიღოს ტემპერატურა ცელსიუსში და დააბრუნოს ფარენჰეიტში კონვერტირებული მნიშვნელობა. ფორმულა: 
// F=C×9/5+32.


function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}


console.log(celsiusToFahrenheit(0));   

//  8.⁠ ⁠მაქსიმალური რიცხვის პოვნა
// ფუნქცია უნდა მიიღოს სამი რიცხვი და დააბრუნოს მათ შორის მაქსიმალური მნიშვნელობა.


function findMax(a, b, c) {
    return Math.max(a, b, c);
}


console.log(findMax(37, 17, 77));  

//  9.⁠ ⁠რიცხვის დადებითი თუ უარყოფითი
// ფუნქციამ უნდა მიიღოს რიცხვი და შეამოწმოს, დადებითია თუ უარყოფითი. დააბრუნოს შესაბამისი ტექსტი.

function checkSign(num) {
    if (num > 0 ) {
        return "დადებითია"
    } else if(num < 0) {
        return "უარყოფითია"
    } else {
        return "ნულია"
    }
}

console.log(checkSign(-27))

// 10.⁠ ⁠switch case – თვეების დასახელება
// ფუნქციამ უნდა მიიღოს 1-დან 12-მდე რიცხვი და switch case-ების გამოყენებით დააბრუნოს შესაბამისი თვის სახელი (მაგ. 1 - იანვარი, 2 - თებერვალი და ა.შ.).

function getMonthName(monthNumber) {
    switch(monthNumber) {
        case 1:
            return "იანვარი";
        case 2:
            return "თებერვალი";
        case 3:
            return "მარტი";
        case 4:
            return "აპრილი";
        case 5:
            return "მაისი";
        case 6:
            return "ივნისი";
        case 7:
            return "ივლისი";
        case 8:
            return "აგვისტო";
        case 9:
            return "სექტემბერი";
        case 10:
            return "ოქტომბერი";
        case 11:
            return "ნოემბერი";
        case 12:
            return "დეკემბერი";
        default:
            return "არასწორი რიცხვი. შეიყვანე 1-დან 12-მდე.";
    }
}

console.log(getMonthName(1)); 
console.log(getMonthName(2)); 
console.log(getMonthName(3)); 
console.log(getMonthName(4)); 
console.log(getMonthName(5)); 
console.log(getMonthName(6)); 
console.log(getMonthName(7)); 
console.log(getMonthName(8)); 
console.log(getMonthName(9)); 
console.log(getMonthName(10)); 
console.log(getMonthName(11)); 
console.log(getMonthName(12)); 


// 11.⁠ ⁠გამრავლების მნიშვნელობა
// ფუნქცია უნდა მიიღოს ერთი რიცხვი და თუ რიცხვი 5-ის ტოლია ან მეტი, დააბრუნოს მისი ნამრავლი 10-ზე. წინააღმდეგ შემთხვევაში დააბრუნოს "რიცხვი მცირეა".

function multiplyIfGreaterThanFive(num) {
   if (num >= 5) {
    return num * 10
   } else {
      return "რიცხვი მცირეა"
   }
}

console.log(multiplyIfGreaterThanFive(2))

// 12.⁠ ⁠switch case – სეზონის შემოწმება
// ფუნქციამ უნდა მიიღოს 1-დან 4-მდე რიცხვი და switch case-ებით დააბრუნოს შესაბამისი სეზონი (1 - გაზაფხული, 2 - ზაფხული, 3 - შემოდგომა, 4 - ზამთარი).

function getSeason(seasonNumber) {
    switch (seasonNumber) {
        case 1:
            return "გაზაფხული"
            
        case 2:
            return "ზაფხული"
            
        case 3:
            return "შემოდგომა"
            
        case 4:
            return "ზამთარი" 
            
    
        default:
            break;
    }
}
console.log(getSeason(1))
console.log(getSeason(2))
console.log(getSeason(3))
console.log(getSeason(4))

// 13.⁠ ⁠მარტივი აღრიცხვის ფუნქცია
// ფუნქციამ უნდა მიიღოს ფასის მნიშვნელობა და შეამოწმოს, არის თუ არა იგი 100-ზე მეტი. თუ კი, დააბრუნოს "ფასი მაღალია", წინააღმდეგ შემთხვევაში დააბრუნოს "ფასი ნორმალურია".

function checkPrice(price) {
   if (price >= 100) {
    return "ფასი მაღალია"
   } else {
    return "ფასი ნორმალურია"
   }
}

console.log(checkPrice(107))

// 14.⁠ ⁠switch case – მათემატიკური ოპერატორების შემოწმება
// ფუნქცია უნდა მიიღოს ორი რიცხვი და ოპერატორი (+, -, *, /) და switch case-ების გამოყენებით დააბრუნოს შესაბამისი მოქმედების შედეგი.

function switchCalculator(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b
        default:
            return "არასწორი ოპერატორი";
    }
}


console.log(switchCalculator(7, 77, '+'));  
console.log(switchCalculator(21, 2, '-'));  
console.log(switchCalculator(7, 3, '*'));  
console.log(switchCalculator(21, 7, '/'));  

 


// 15.⁠ ⁠რიცხვების დადებითი ჯამი
// ფუნქციამ უნდა მიიღოს ორი რიცხვი და თუ ორივე დადებითია, დააბრუნოს მათი ჯამი. წინააღმდეგ შემთხვევაში დააბრუნოს "მინიმუმ ერთი რიცხვი უარყოფითია".

function positiveSum(a, b) {
    if (a > 0 && b > 0) {
        return a + b;
    } else {
        return "მინიმუმ ერთი რიცხვი უარყოფითია";
    }
}


console.log(positiveSum(37, -27));  


