function OrdenaData(arr=[], field, direction='asc') {
    
    if (direction == 'desc'){
        return (
            arr.sort((a, b) => {
                return new Date(a[field]) - new Date(b[field]); // descending
            })  
        )  
    }
    else {
        return (
            arr.sort((a, b) => {
                return new Date(b[field]) - new Date(a[field]); // descending
            })
        )
    }
}
export default OrdenaData;