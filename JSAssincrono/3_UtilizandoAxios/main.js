axios.get('https://api.github.com/users/machadowma')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    });