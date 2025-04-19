
export const careerDetailsLoader = async ({params}) => {
     const {id} = params;
     const response = await fetch("https://dummyjson.com/posts/" + id);
     if(!response.ok){
        throw Error('Could not find that career')
     }
     return response.json();
}
