
  export const DIETENUM ={
    VEGAN :"Vegan",
    RAW_VEGAN:"Raw Vegan",
    VEGETARIAN:"Vegetarian",
    EXPLORING_VEG:"Exploring",

  };
  export const RDIETENUM ={
    Vegan:'VEGAN',
    'Raw Vegan':'RAW_VEGAN',
    Vegetarian:'VEGETARIAN',
    Exploring:'EXPLORING_VEG',
};
export const MONTHS =[
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

let years = new Array();
export function getYears() {
  if (!years.length) {
    let currentYear = parseInt(new Date().getFullYear());
    for (let i = currentYear; i > 1900; i--) {
      years.push(i);
    }
  }
  return years;
}



  export const DIETENUMARR =[
    'Choose your diet',
    'Exploring',
    'Vegan',
    'Vegetarian',
    'Raw Vegan',
  ];

  export const REASON ={
    ETHICAL:'Ethical',
    RELIGIOUS:'Religios',
    HEALTH:'Health',
    ENVITONMENT:'Environment',
    OTHER:'Other'

  };


  export const REASONARR =[
    'Ethical',
    'Religios',
    'Health',
    'Environment',
    'Other'
  ];


  export const RREASON ={
    Ethical:'ETHICAL',
    Religios:'RELIGIOUS',
    Health:'HEALTH',
    Environment:'ENVITONMENT',
    Other:'OTHER'

  };

export function shortName(str,charValue){
    return str.trim().substring( 0,charValue)
}

export function getOneString(str,seperator){
    return str.substr(0,str.indexOf(seperator));
}
