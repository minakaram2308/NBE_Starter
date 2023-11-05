export function logObject(obj, header = '', align=true)
{
    console.log('\n')
    console.log(header);

    if (typeof obj !== 'object') return console.log('logObject: NOT AN OBJECT');

    let maxWidthKey = 0
    if(align)
    {
        for (let key in obj)
        {
            maxWidthKey = Math.max(maxWidthKey, key.length)
        }
    }

    for (let key in obj)
    {
        let padding = 0;
        if(align) padding = maxWidthKey - key.length + 1

        console.log(`|\t${key}${':'.padStart(padding, ' ')}${obj[key]}\n`);
    }
}
