export default function UserProfile({ user }) {
  const {
    avatar_url,
    public_repos,
    name,
    login,
    followers,
    following,
    created_at,
  } = user;

  const createDate = new Date(created_at);
  return (
    <div className="user-information">
      <div className="image-box">
        <img src={avatar_url} alt={name} />
      </div>
      <h3>
        <a href={`https://github.com/${login}`}>UserName: {login}</a>
      </h3>
      <h3>Name: {name}</h3>
      <h3>Followers: {followers}</h3>
      <h3>Following: {following}</h3>
      <h3>Public-Repos: {public_repos}</h3>
      <h3>
        Account Created:{" "}
        {`${createDate.getDate()} ${createDate.toLocaleString("en-us", {
          month: "short",
        })} ${createDate.getFullYear()}`}
      </h3>
    </div>
  );
}
