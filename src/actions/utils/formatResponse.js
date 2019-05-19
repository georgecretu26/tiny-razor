const formatResponse = (array) =>{
    const formatedArray = [];
    array.map(item => {
        console.log(item);
        const { title, url: imgSrc, thumbnail, created } = item.data;
        const itemPretty = {title, imgSrc, thumbnail, created} ;
        if(thumbnail !== 'self'){
            formatedArray.push(itemPretty);
        }
    })
    return formatedArray
}

export default formatResponse;