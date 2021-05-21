class UiBuild
{
    constructor(avatar)
    {
        this.avatar=avatar;
        this.profile=document.querySelector('#profile');
    }
   buildUi()
  {
    console.log(this.avatar);
    const self=this.avatar;
      this.profile.innerHTML=`
      <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${self.avatar_url}"></img>
          <a href="${self.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${self.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${self.public_gists}</span>
          <span class="badge badge-success">Followers: ${self.followers}</span>
          <span class="badge badge-info">Following: ${self.following}</span>
          <br></br><br></br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${self.company}</li>
            <li class="list-group-item">Website/Blog: ${self.blog}</li>
            <li class="list-group-item">Location: ${self.location}</li>
            <li class="list-group-item">Member Since: ${self.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    `;
  }
    
}