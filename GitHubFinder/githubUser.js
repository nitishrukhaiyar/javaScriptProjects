//utility class to fetch git hub user details using AJAX
class GitHubUser
{
    constructor()
    {
        this.http=new XMLHttpRequest();
    }
    getUserProfile(name,callback)
    {
        this.http.open('GET','https://api.github.com/users/'+name+'?client_id='+'78039981499e76a47922'+'&client_secret='+'d0135e60d54e441c89a3ad83492f9bca6d86b7b5',true); 
        let self=this;
        this.http.onload=function()
        {
            if(self.http.status===200)
            {
                const o=self.http.responseText;
                const p=o.json;
                callback(null,p);
            }
          else 
        {
              callback(err,null);
          }
        }
        this.http.send();
    }
    
}