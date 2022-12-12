var sliderimages = Array.from(document.querySelectorAll('.slide-container img')); // arr from elements img ;
var slidescount = sliderimages.length  ; /// number img 
var curentslide = 1;  // set curent slide
var slidenumberelements = document.getElementById('slide-number'); //slide number element
var nextbuttons =  document.getElementById('next');
var prevbuttons =  document.getElementById('prev');
var indicators = document.getElementById('indicators');


///click buttons 
nextbuttons.onclick= nextslide;
prevbuttons.onclick = prevslide;


/// ul bullets 
var pagination  = document.createElement('ul');
pagination.setAttribute('id' , "pagination-ul");
for(var i=1;i<=slidescount ;i++){
    
    var paginationitem = document.createElement('li');
    paginationitem.setAttribute('data-index' , i);
    
    
    paginationitem.appendChild(document.createTextNode(i));
    
    pagination.appendChild(paginationitem);
    
}


indicators.appendChild(pagination);

var pagination_ul = document.getElementById("pagination-ul");
var pagination_All_ul = Array.from(document.querySelectorAll('#pagination-ul li')); // arr from elements img ;

for(i=1; i< pagination_All_ul.length;i++){
    pagination_All_ul[i].onclick =function(){
        curentslide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
    
}


theChecker();

function nextslide (){
    console.log("nextt");
    if(curentslide < slidescount){
       curentslide++;
       }
    
    
    theChecker();
}

function prevslide (){
    console.log("prev");
    if(curentslide > 1){
       curentslide--;
       }
    
    theChecker();
    console.log(curentslide);
    
}

function theChecker(){
    slidenumberelements.textContent = 'Slide #' + (curentslide) + ' of ' + (slidescount);
    removeActive();
    sliderimages[curentslide - 1].classList.add('active');
    
    pagination_ul.children[curentslide - 1].classList.add('active');
    
    if(curentslide == 1){
        prevbuttons.classList.add("disabled");
        
    }else{
        prevbuttons.classList.remove("disabled");
    }
    
     if(curentslide == slidescount){
        nextbuttons.classList.add("disabled");
        
    }else{
        nextbuttons.classList.remove("disabled");
    }
    
}

function removeActive(){
    sliderimages.forEach(function(img){
        
        img.classList.remove('active');
       
    });
    
    pagination_All_ul.forEach(function(paginationLi){
        
        paginationLi.classList.remove('active');
       
    });
}










