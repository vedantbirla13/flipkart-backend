import User from "../model/userSchema.js";



export const signUp = async(req, res) => {
    try {

       const userExist = await User.findOne({ username: req.body.username })

       if(userExist) {
        return res.status(401).json({ message: "Username already exists" })
       }

        const user = req.body
        const newUser = new User(user);
        await newUser.save()

        res.status(200).json({ message: user })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const Login = async(req, res) => {
    try {

       const username = req.body.username;
       const password = req.body.password

       let user = await User.findOne({ username: username, password: password })

       if(user){
            return res.status(200).json({ data: user })
       }else{
            return res.status(401).json(`Invalid login` )
       }    

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}