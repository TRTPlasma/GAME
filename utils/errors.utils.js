module.exports.signErrors = err => {
    let errors = {email: '', password: ''}
    if (err.message.includes('email')) errors.email = 'Incorrect email'
    if (err.message.includes('password')) errors.password = 'Incorrect password'
    return errors
}