export const colors = {
    background: '#F1F3FB',
    fade63: '#000000a0',
    fade50: '#00000080',
    fade38: '#00000060',
    green: '#007236',
    greenDisabled: '#004004c0',
    orange: '#F49322',
    gray: '#B7B7B7',
    darkGray: "#333333",
    error: '#DC143C',
    errorLight: '#FFDCDC',
    textDark: hex('1C2347'),
    primary: hex('007236'),
    bgLight: hex('F1F3FB'),
    btnRippleBase: hex('3B3B3B', 0),
    textMuted: hex('6B839E'),
    grays:{
        light_1: hex('EDEDED'),
        base: hex('E6E6E6'),
        dark_1: hex('CCCCCC')
    },
    text:{
        dark: hex('#1C2347'),
        muted: hex('#949494'),
    },
    surface:{
        base: hex('#FFFFFF'),
        light95: hex('#F2F2F2'),
    },
    border:{
        base: hex('#EDEDED')
    }
  };
  
  //==========================================================================//
  
  function transparencyToHex(value){
      return (Math.ceil(value / 100 * 255)).toString(16).padStart(2, '0')
  }
  
  function hex(base, transparency=100){
      base = base.toString().toLowerCase().replace(/[^0-9a-f]/g, '')
      
      if(base.length !== 6) return '#000'
  
      base = '#' + base
      transparency = transparencyToHex(transparency)
      return base + transparency
  }