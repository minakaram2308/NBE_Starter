export function range(start, end = start, step = 1)
{
    if (end === start) start = 0;
    if (step < 1) return [];

    const array = [];
    for (let i = start; i < end; i += step)
    {
        array.push(i);
    }

    return array;
}