function Profile(props){
    const   {name, lastname} = props

    return (
        <div>
            <h1>Hello {name} {lastname}</h1>
        </div>
    )

}

export default Profile;
