import React from 'react'

function Form() {

    return (
        <form className="FormLayout">
            <label> Full Name: * </label>
            <input type="text" name="name" placeholder="Name" />

            <div>
                <label> Email: * </label>
                <input type="text" name="email" placeholder="foo@bar.com" />
                <label> Phone: </label>
                <input type="text" name="phone" placeholder="(83) 00000-0000" />
            </div>

            <div>
                <label> Password: * </label>
                <input type="text" name="password" placeholder="Name" />
                <label> Birthday: * </label>
                <input type="date" name="date" placeholder="Name" />
            </div>

            <div className="Footer">
                <label>
                    <input type="checkbox" className="Checkbox" />
                    I accept the terms and privacy
                </label>

                <button type="submit" value="Register" className="RegisterButton">
                    Register
                </button>
            </div>

        </form>)
}

export default Form;