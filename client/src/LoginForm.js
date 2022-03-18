function LoginForm() {
    

    return(
        <div>
        <h4>Login to your account:</h4>
        <form>
        <label>Username and Password</label>
        <input
           type="text"
           id="username"
         //    value={username}
         //    onChange={e => setUsername(e.target.value)}
                
            />
        <input
         type="text"
         id="password"
        //  value={password}
        //  onChange={e => setPassword(e.target.value)}
         />
         <button type="submit">Submit</button>
        </form>
        <h4>want to sign up?</h4>
        </div>
    )
}

export default LoginForm;