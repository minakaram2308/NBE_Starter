export const colors = 
{
    textDark: hex('1C2347'),
    primary: hex('007236'),
    bgLight: hex('F1F3FB'),
    btnRippleBase: hex('3B3B3B', 0),
    textMuted: hex('6B839E')
}

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