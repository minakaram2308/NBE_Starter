import {Dimensions, PixelRatio} from 'react-native';
import {logObject} from './logging';

const baseDimensions = {width: 396, height: 902};
const {width: actualWidth, height: actualHeight, fontScale} = Dimensions.get('window');
const wScale = actualWidth / baseDimensions.width;
const hScale = actualHeight / baseDimensions.height;

export {wScale, hScale}

export function RDP(size, lengthWise = true, dampingIntensity = 0.4, undampingIntensity=1) {

    return size * dampingFactor(lengthWise, dampingIntensity, undampingIntensity);
  }

  // export function RFS(size, dampingIntensity=0.4){, 
  //   return size * dampingFactor(true, dampingIntensity) / fontScale
  // }


function dampingFactor(lengthWise = true, dampingIntensity=0, undampingIntensity=1) {
  const base = lengthWise ? wScale : hScale;

  return exponential(base, Math.max(1,undampingIntensity) / (1 + Math.max(0,dampingIntensity)));
}

function exponential(base, power) {
    return base ** power;
  }