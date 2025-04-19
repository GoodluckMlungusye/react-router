export const careersLoader = async () => {
  const response =  await fetch('https://dummyjson.com/posts');
  if(!response.ok){
      throw Error("Could not fetch the careers")
  }
  return response.json();
}

