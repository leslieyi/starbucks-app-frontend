import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
function EditProfile({ user, setUser }) {
  // const [email, setEmail] = useState(user.email)
  const [avatar, setAvatar] = useState(user.avatar);
  // const [password, setPassword] = useState(user.password)

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user.id);
    fetch(`http://localhost:9292/update-avatar/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: avatar,
      }),
    })
      .then((r) => r.json())
      .then((user) => setUser(user));
  }
  //const handleSubmit = (e) => e.preventDefault
  console.log("afte patch", user.id);
  return (
    <div id="login-form-wrapper" style={{ width: "40%", float: "left" }}>
      <Form onSubmit={handleSubmit} floated="right">
        <h1 style={{ marginLeft: "290px" }}>Edit Avatar</h1>
        <img src={user.avatar} style={{ marginLeft: "200px" }} />
        <br />
        <Form.Field>
          <label>
            Update Avatar:
            <input
              name="avatar"
              type="text"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              placeholder="Avatar"
            />
          </label>
        </Form.Field>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default EditProfile;
