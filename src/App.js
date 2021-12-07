
import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { useHistory } from 'react-router';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useState,useEffect  } from 'react';
import { TheaterList } from './TheaterList';
import { Movies } from './Movies';
import { Add } from './Add';
import { Delete } from './Delete';
import { Edit } from './Edit';
import { AddMovies } from './AddMovies';
import { Home } from './Home';

function App() {
  const history=useHistory();
  // const theatres=[
  //   {
  //     name:"PVR",
  //     pic:"https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/07/pvr-tickets-1595905696.jpg",
  //     movies:[
  //       {
  //         "name":"Iron man 2",
  //         "poster":"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
  //         "rating":7,
  //         "summary":"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
  //         "trailer":"https://www.youtube.com/embed/wKtcmiifycU",
  //         seats:[
  //           0,1,1,1,1,1,1,1,1,0,
  //           0,1,1,1,0,0,0,0,0,0,
  //           0,0,0,0,0,0,1,1,1,1,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,1,1,0,0,1,1,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,1,1,1,0,0,0,0,0,
  //           0,0,0,0,0,1,1,1,1,1
  //         ]
  //       },
  //       {
  //         "name":"No Country for Old Men",
  //         "poster":"https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
  //         "rating":8.1,
  //         "summary":"A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
  //         "trailer":"https://www.youtube.com/embed/38A__WT3-o0",
  //         seats:[
  //           0,1,1,1,1,1,1,1,1,0,
  //           0,1,1,1,0,0,0,0,0,0,
  //           0,0,0,0,0,0,1,1,1,1,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,1,1,0,0,1,1,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,1,1,1,0,0,0,0,0,
  //           0,0,0,0,0,1,1,1,1,1
  //         ]
  //       },
  //       {"name":"Jai Bhim",
  //       "poster":"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
  //       "summary":"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
  //       "rating":8.8,
  //       "trailer":"https://www.youtube.com/embed/nnXpbTFrqXA",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     },
  //     {
  //       "name":"The Avengers",
  //       "rating":8,
  //       "summary":"Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
  //       "poster":"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  //       "trailer":"https://www.youtube.com/embed/eOrNdBpGMv8",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     },
  //     {
  //       "name":"Interstellar",
  //       "poster":"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
  //       "rating":8.6,
  //       "summary":"When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
  //       "trailer":"https://www.youtube.com/embed/zSWdZVtXT7E",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     },
  //     {
  //       "name":"Baahubali",
  //       "poster":"https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
  //       "rating":8,
  //       "summary":"In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
  //       "trailer":"https://www.youtube.com/embed/sOEg_YZQsTI",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     },
  //     {
  //       "name":"Ratatouille",
  //       "poster":"https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
  //       "rating":8,
  //       "summary":"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
  //       "trailer":"https://www.youtube.com/embed/NgsQ8mVkN8w",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     }
  //   ],
    
  // },

  //   {
  //     name:"INOX",
  //     pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsrCJZDZpj3eWPMbYbGLCspMjrnB7RlFuXMA&usqp=CAU",
  //     movies:[
  //       {
  //         "name":"Iron man 2",
  //         "poster":"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
  //         "rating":7,
  //         "summary":"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
  //         "trailer":"https://www.youtube.com/embed/wKtcmiifycU",
  //         seats:[
  //           0,1,1,1,1,1,1,1,1,0,
  //           0,1,1,1,0,0,0,0,0,0,
  //           0,0,0,0,0,0,1,1,1,1,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,1,1,0,0,1,1,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,1,1,1,0,0,0,0,0,
  //           0,0,0,0,0,1,1,1,1,1
  //         ]
  //       },
  //       {
  //         "name":"No Country for Old Men",
  //         "poster":"https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
  //         "rating":8.1,
  //         "summary":"A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
  //         "trailer":"https://www.youtube.com/embed/38A__WT3-o0",
  //         seats:[
  //           0,1,1,1,1,1,1,1,1,0,
  //           0,1,1,1,0,0,0,0,0,0,
  //           0,0,0,0,0,0,1,1,1,1,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,1,1,0,0,1,1,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,1,1,1,0,0,0,0,0,
  //           0,0,0,0,0,1,1,1,1,1
  //         ]
  //       },
  //       {"name":"Jai Bhim",
  //       "poster":"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
  //       "summary":"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
  //       "rating":8.8,
  //       "trailer":"https://www.youtube.com/embed/nnXpbTFrqXA",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     },
  //     {
  //       "name":"The Avengers",
  //       "rating":8,
  //       "summary":"Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
  //       "poster":"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  //       "trailer":"https://www.youtube.com/embed/eOrNdBpGMv8",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     },
  //     {
  //       "name":"Interstellar",
  //       "poster":"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
  //       "rating":8.6,
  //       "summary":"When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
  //       "trailer":"https://www.youtube.com/embed/zSWdZVtXT7E",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     },
  //     {
  //       "name":"Baahubali",
  //       "poster":"https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
  //       "rating":8,
  //       "summary":"In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
  //       "trailer":"https://www.youtube.com/embed/sOEg_YZQsTI",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     },
  //     {
  //       "name":"Ratatouille",
  //       "poster":"https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
  //       "rating":8,
  //       "summary":"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
  //       "trailer":"https://www.youtube.com/embed/NgsQ8mVkN8w",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     }
  //   ],
  //   },

  //   {
  //     name:"Sathyam",
  //     pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoAbZYBMHhL8LrAeBLY2vFrexZxBeYGy_HiA&usqp=CAU",
  //     movies:[
  //       {
  //         "name":"Iron man 2",
  //         "poster":"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
  //         "rating":7,
  //         "summary":"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
  //         "trailer":"https://www.youtube.com/embed/wKtcmiifycU",
  //         seats:[
  //           0,1,1,1,1,1,1,1,1,0,
  //           0,1,1,1,0,0,0,0,0,0,
  //           0,0,0,0,0,0,1,1,1,1,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,1,1,0,0,1,1,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,1,1,1,0,0,0,0,0,
  //           0,0,0,0,0,1,1,1,1,1
  //         ]
  //       },
  //       {
  //         "name":"No Country for Old Men",
  //         "poster":"https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
  //         "rating":8.1,
  //         "summary":"A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
  //         "trailer":"https://www.youtube.com/embed/38A__WT3-o0",
  //         seats:[
  //           0,1,1,1,1,1,1,1,1,0,
  //           0,1,1,1,0,0,0,0,0,0,
  //           0,0,0,0,0,0,1,1,1,1,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,1,1,0,0,1,1,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,1,1,1,0,0,0,0,0,
  //           0,0,0,0,0,1,1,1,1,1
  //         ]
  //       },
  //       {"name":"Jai Bhim",
  //       "poster":"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
  //       "summary":"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
  //       "rating":8.8,
  //       "trailer":"https://www.youtube.com/embed/nnXpbTFrqXA",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     },
  //     {
  //       "name":"The Avengers",
  //       "rating":8,
  //       "summary":"Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
  //       "poster":"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  //       "trailer":"https://www.youtube.com/embed/eOrNdBpGMv8",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     },
  //     {
  //       "name":"Interstellar",
  //       "poster":"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
  //       "rating":8.6,
  //       "summary":"When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
  //       "trailer":"https://www.youtube.com/embed/zSWdZVtXT7E",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     },
  //     {
  //       "name":"Baahubali",
  //       "poster":"https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
  //       "rating":8,
  //       "summary":"In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
  //       "trailer":"https://www.youtube.com/embed/sOEg_YZQsTI",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     },
  //     {
  //       "name":"Ratatouille",
  //       "poster":"https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
  //       "rating":8,
  //       "summary":"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
  //       "trailer":"https://www.youtube.com/embed/NgsQ8mVkN8w",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     }
  //   ],
  //   },

  //   {
  //     name:"IMAX",
  //     pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5hfB_qqx8jVCvSiTM8quRRzaij0PCfuYpdJOfLciqxv7ELeZ1g4tUa46XiZfkKY2b97g&usqp=CAU",
  //     movies:[
  //       {
  //         "name":"Iron man 2",
  //         "poster":"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
  //         "rating":7,
  //         "summary":"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
  //         "trailer":"https://www.youtube.com/embed/wKtcmiifycU",
  //         seats:[
  //           0,1,1,1,1,1,1,1,1,0,
  //           0,1,1,1,0,0,0,0,0,0,
  //           0,0,0,0,0,0,1,1,1,1,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,1,1,0,0,1,1,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,1,1,1,0,0,0,0,0,
  //           0,0,0,0,0,1,1,1,1,1
  //         ]
  //       },
  //       {
  //         "name":"No Country for Old Men",
  //         "poster":"https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
  //         "rating":8.1,
  //         "summary":"A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
  //         "trailer":"https://www.youtube.com/embed/38A__WT3-o0",
  //         seats:[
  //           0,1,1,1,1,1,1,1,1,0,
  //           0,1,1,1,0,0,0,0,0,0,
  //           0,0,0,0,0,0,1,1,1,1,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,1,1,0,0,1,1,0,0,0,
  //           0,0,0,0,0,0,0,0,0,0,
  //           0,0,1,1,1,0,0,0,0,0,
  //           0,0,0,0,0,1,1,1,1,1
  //         ]
  //       },
  //       {"name":"Jai Bhim",
  //       "poster":"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
  //       "summary":"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
  //       "rating":8.8,
  //       "trailer":"https://www.youtube.com/embed/nnXpbTFrqXA",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     },
  //     {
  //       "name":"The Avengers",
  //       "rating":8,
  //       "summary":"Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
  //       "poster":"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  //       "trailer":"https://www.youtube.com/embed/eOrNdBpGMv8",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     },
  //     {
  //       "name":"Interstellar",
  //       "poster":"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
  //       "rating":8.6,
  //       "summary":"When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
  //       "trailer":"https://www.youtube.com/embed/zSWdZVtXT7E",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     },
  //     {
  //       "name":"Baahubali",
  //       "poster":"https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
  //       "rating":8,
  //       "summary":"In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
  //       "trailer":"https://www.youtube.com/embed/sOEg_YZQsTI",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     },
  //     {
  //       "name":"Ratatouille",
  //       "poster":"https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
  //       "rating":8,
  //       "summary":"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
  //       "trailer":"https://www.youtube.com/embed/NgsQ8mVkN8w",
  //       seats:[
  //         0,1,1,1,1,1,1,1,1,0,
  //         0,1,1,1,0,0,0,0,0,0,
  //         0,0,0,0,0,0,1,1,1,1,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,1,1,0,0,1,1,0,0,0,
  //         0,0,0,0,0,0,0,0,0,0,
  //         0,0,1,1,1,0,0,0,0,0,
  //         0,0,0,0,0,1,1,1,1,1
  //       ]
  //     }
  //   ],
  //   },


  // ]

  const [theaters, settheaters] = useState([]);

  useEffect(() => {
    async function getTher() {
      const d = await fetch("https://hackaton2-node.herokuapp.com/theaters");
      const ther = await d.json();
      settheaters(ther);
      console.log(theaters);
    }
    getTher();
  }, []);

  return (
    <div className="App">
      <AppBar position="static" >
        <Toolbar variant="dense">
        <Button 
        onClick={()=>history.push("/")}
        variant="contained" startIcon={<HomeIcon/>}>
          Home
        </Button>
        <Button 
         onClick={()=>history.push("/theaters")}
         variant="contained" startIcon={<TheaterComedyIcon/>}>
          Theaters
        </Button>
        <Button 
        onClick={()=>history.push("/add-theather")}
        variant="contained" startIcon={<AddIcon/>}>
          Add Theaters
        </Button>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path ="/"><Home/></Route>
        <Route  path ="/theaters"><TheaterList/></Route>

        <Route path="/add-theather"><Add/></Route>
        <Route path="/theater/:id"><Movies /></Route>
        <Route path="/delete-theater/:id"><Delete/></Route>
        <Route path="/edit-theater/:id"><Edit/></Route>
        <Route path="/:id/add-movies"><AddMovies/></Route>
      </Switch>
    
    </div>
  );
}

export default App;
