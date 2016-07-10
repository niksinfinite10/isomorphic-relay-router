import {
  base64,
  unbase64
} from './base64.js';
import moment from 'moment';

export function getAspectRatio(width, height) {
  return aspectRatio = width / height;
}

export function getAspectRatio2(desiredWidth,width, height) {
   let aspectRatio = width / height;
  return  desiredWidth/aspectRatio;
}


export function getTimeAgo(sinceInMomentString){
  if(sinceInMomentString){
    let momentObj = moment(sinceInMomentString);
    return momentObj.fromNow(true);
  }
  return '';
}


export function toGlobalId(type: string, id: string): string {
  LOG("User",base64([type, id].join(':')));
  return base64([type, id].join(':'));
}


export function fromGlobalId(globalId: string): ResolvedGlobalId {
  var unbasedGlobalId = unbase64(globalId);
  var delimiterPos = unbasedGlobalId.indexOf(':');
  return {
    type: unbasedGlobalId.substring(0, delimiterPos),
    id: unbasedGlobalId.substring(delimiterPos + 1)
  };
}
