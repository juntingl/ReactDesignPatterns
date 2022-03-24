import React from 'react'
// import withEditableUser from './withEditableUser';
import withEditableResource from './withEditableResource'

const UserInfoForm = withEditableResource(({ user, onChangeUser, onSaveUser, onResetUser }) => {
  const { name, age, hairColor } = user || {}

  return user ? (
    <form>
      <label>
        Name:
        <input type="text" value={name} onChange={e => onChangeUser({ name: e.target.value })}/>
      </label>
      <label>
        age:
        <input type="number" value={age} onChange={e => onChangeUser({ age: e.target.value })}/>
      </label>
      <label>
        Hair Color:
        <input type="text" value={hairColor} onChange={e => onChangeUser({ hairColor: e.target.value })}/>
      </label>
      <button onClick={onSaveUser}>Save</button>
      <button onClick={onResetUser}>Reset</button>
    </form>
  ) : <p>loading...</p>

}, '/users/123', 'user')

export default UserInfoForm