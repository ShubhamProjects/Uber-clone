const deg2rad = (deg) =>
{
    return deg * (Math.PI / 180)
};

export const distanceCalculator = (origin, destination) =>
{
    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(destination.lat - origin.lat);  // deg2rad 
    let dLon = deg2rad(destination.lng - origin.lng);
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(origin.lat)) * Math.cos(deg2rad(destination.lat)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return parseFloat(R * c).toFixed(2); // Distance in km
};

export const fareCalculator = (item, origin, destination) =>
{
    var count = 0;
        
    if (distanceCalculator(origin, destination) <= 4)
    {
        if (item.id === 'Uber-X')
        {
            count = 100;
        } else if (item.id === 'Uber-XL')
        {
            count = 120;
        } else if (item.id === 'Uber-LUX')
        {
            count = 150;
        }
    } else
    {
        if (item.id === 'Uber-X')
        {
            count = ((distanceCalculator(origin, destination) - 4) * 42) + 100;
        } else if (item.id === 'Uber-XL')
        {
            count = ((distanceCalculator(origin, destination) - 4) * 48) + 120;
        } else if (item.id === 'Uber-LUX')
        {
            count = ((distanceCalculator(origin, destination) - 4) * 54) + 150;
        }
    }

    return parseFloat(18 * distanceCalculator(origin, destination) * item.multiplier + count).toFixed(2);
};

export const amountBalanceFormat = (amount) =>
{
    try
    {
        let result;
        amount = amount.toString();
        let afterPoint = '';
        if (amount.indexOf('.') > 0)
        {
            afterPoint = amount.substring(amount.indexOf('.'), amount.length);
        }
        amount = Math.floor(amount);
        amount = amount.toString();
        var lastThree = amount.substring(amount.length - 3);
        var otherNumbers = amount.substring(0, amount.length - 3);
        if (otherNumbers !== '')
        {
            lastThree = ',' + lastThree;
        }
        result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree + afterPoint;
        return result
    } catch (error)
    {
        return '0';
        }
};