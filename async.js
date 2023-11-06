const registerData = () =>
{
    setTimeout(() => {console.log('pozycja 1')}, 3000) 
}


const registerUser = () =>
{
    setTimeout(() => {console.log('pozycja 2')}, 1000)
}

const sendEmail = () =>
{
    setTimeout(() => {console.log('send email')}, 500)
}



    async function someAsyncFunction()
        {
            await registerData()
            await registerUser()
            await sendEmail()
            console.log('end')
        }

    someAsyncFunction()