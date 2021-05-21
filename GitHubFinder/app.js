//declaring variables
const input=document.querySelector('#searchUser');
//adding event-listeners to the variables
input.addEventListener('keyup',getAvatar);
//fnc getAvatar()
function getAvatar()
{
    const user=new GitHubUser();
    let UserInput=input.value;
    //fetching user details from github
   user.getUserProfile(UserInput,callback);
}
//fnc callback
function callback(err,avatar)
{
    if(err)
    {
        console.log(err);
    }
    else{
        
        //building ui for fetched details
   const uiBuild=new UiBuild(avatar);
   uiBuild.buildUi();
    }
    
}
