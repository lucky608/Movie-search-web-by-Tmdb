
//apis 
const APIURL = "api-url";
const IMGPATH='poster path';
const SEARCHAPI="search path";

//all html attribute
const main=document.querySelector('main');
//const mybtn=document.getElementById('mybtn');
const span=document.querySelector('span');
const form=document.getElementById('form');
const search=document.getElementById('search');
const demo=document.getElementById('demo');


//for intitialy get movie
getMovies(APIURL);
async function getMovies(url){
     const resp=await fetch(url);
     respData=await resp.json();
     
   showMovies(respData);
        
}
   
//for show all populer movies in home
   function showMovies(movies){

    main.innerHTML='';
    movies.results.forEach(movie => {
        const {poster_path,title,vote_average,overview,
          release_date,adult,original_language}=movie;

         const movieEl=document.createElement("div");
         movieEl.classList.add("movie");

         movieEl.innerHTML=`
         <img  src="${IMGPATH+poster_path}" alt="${title}"/>
         <div class="movie-info">
         
            <h2 style="font-size:17px">${title}</h2>
            <span style=" font-weight: 10pxs; " class="${getClassByRate(vote_average)}">
            ${vote_average}</span>
         </div>
         <div class="detail">
         <div class="borders">
           <div class="d">
             <h5>Details</h5>
             </div>
             <h3>Movie Name:</h3>
             ${title}
             <h3>Release Date:</h3>
             ${release_date}
             <h3>Language:</h3>
             ${original_language}
             
             <h3>Overview:</h3>
             ${overview}
             </div> 
         </div>
         
     `;
     console.log({overview});
    main.appendChild(movieEl);
     });
   


   }

   //for rating tag color

   function getClassByRate(vote){

     if(vote>8){
         return "gold";
     }else if(vote>=5){
         return 'orange';
     }else{
         return 'red';
     }

   };
   function getCategory(adult){

    if(adult===false){
        return "No";
    }else{
        return "Yes";
    }

  };


  //search event on click 
//all code are in under construction from here
form.addEventListener("submit",(e)=>{
      e.preventDefault();

      const searchTerm=search.value;
  if(searchTerm){
      getMovies(SEARCHAPI+searchTerm);
      console.log(SEARCHAPI+searchTerm);
      
      search.value='';
  }
});


  function showMovieDetails(res){


    console.log(res.results);
    
  

 }



//for onclick and show movie details
main.addEventListener("click", (e)=>{
     console.log(e);
     console.log(e.target.currentSrc);
    console.log("clicked");
     console.log(respData.results[0].title);
     console.log(respData.results);
     showMovieDetails(respData);
   // showMovieDetails(e);2147483647
   
});

