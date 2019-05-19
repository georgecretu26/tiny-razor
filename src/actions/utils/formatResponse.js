const formatResponse = (array) =>{
    const formatedArray = [];
    let id = 0;
    array.map((item) => {
        const { title, thumbnail, created } = item.data;
        let { url: imgSrc } = item.data;
        const imgFormat = imgSrc.slice(imgSrc.length - 4);

        // in perfect world all urls for pictures will end with a proper format
        // not the case here
        if(imgFormat !== '.png' && imgFormat !== '.jpg'){
            imgSrc.concat('.png');
            const newImageSrc = `${imgSrc}.png`
            imgSrc = newImageSrc;            
        }
        //end of formating the picture url
        id += 1;
        const itemPretty = {id, title, imgSrc, thumbnail, created};

        // not all the articles on the subreddit are pictures
        if(thumbnail !== 'self'){
            formatedArray.push(itemPretty);
        } 
        return null;
    })
    return formatedArray
}

export default formatResponse;