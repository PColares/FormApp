import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import './Form.css'
import CheckBox from '../Checkbox/Checkbox'

function Form({ FormState }) {
    const [error, setError] = useState({})
    const [checked, setChecked] = useState(false)
    const [info, setInfo] = useState({
        name: "",
        email: "",
        phone: "",
        birthday: "",
    })
    const validName = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(info.name)
    const validEmail = /[a-z0-9]+\S+@\S+\.\S+/.test(info.email)
    const validPassword = /^\d{6,9}$/.test(info.password)
    const validPhone = /^\d{11}$/.test(info.phone)

    function handleChange(event) {
        const { name, value } = event.target;
        setInfo({ ...info, [name]: value });
    }

    function handleCheck() {
        setChecked(!checked);
    }

    function handleSubmit(event) {
        event.preventDefault();
        FormState(true)
    }

    function validateButton() {
        const hasError = JSON.stringify(error) !== "{}"
        const hasData = info.name.length !== 0 && info.email.length !== 0 && info.phone.length !== 0 && info.birthday.length !== 0

        return hasError || !hasData || !checked
    }


    return (
        <form onSubmit={handleSubmit} className="FormLayout">

            <FormInput
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                text="Full Name: *"
                error={error.name}
                value={info.name}
                onChange={handleChange}
                onBlur={() => {
                    if (!validName) {
                        setError({ name: 'Fullname Invalid' })
                    } else {
                        delete error.name
                    }
                }}
            />

            <div className="FormBodyContainer teste">
                <div className="FormBody">
                    <FormInput
                        text="Email: *"
                        placeholder="foo@bar.com"
                        error={error.email}
                        name="email"
                        id="email"
                        value={info.email}
                        type="email"
                        onChange={handleChange}
                        onBlur={() => {
                            if (!validEmail) {
                                setError({ email: 'Email Invalid' })
                            } else {
                                delete error.email
                            }
                        }}
                    />

                    <FormInput
                        text="Password: * "
                        error={error.password}
                        name="password"
                        id="password"
                        value={info.password}
                        type="password"
                        onChange={handleChange}
                        onBlur={() => {
                            if (!validPassword) {
                                setError({ password: 'Password Invalid' })
                            } else {
                                delete error.password
                            }
                        }}
                    />
                </div>

                <div className="FormBody2">
                    <FormInput
                        text="Phone:"
                        placeholder="(83) 00000-0000"
                        error={error.phone}
                        name="phone"
                        id="phone"
                        value={info.phone}
                        type="text"
                        onChange={handleChange}
                        variant="short"
                        onBlur={() => {
                            if (!validPhone) {
                                setError({ phone: 'Phone Invalid' })
                            } else {
                                delete error.phone
                            }
                        }}
                    />
                    <FormInput
                        text="Birthday: *"
                        error={error.birthday}
                        name="birthday"
                        id="birthday"
                        value={info.birthday}
                        type="date"
                        onChange={handleChange}
                        variant="short"
                        onBlur={() => {
                            if (!info.birthday) {
                                setError({ birthday: 'Age Invalid' })
                            } else {
                                delete error.birthday
                            }
                        }}
                    />
                </div>
            </div>
            <div className="Footer">
                <CheckBox
                    label="I accept the terms and privacy"
                    value={info.checked}
                    onChange={handleCheck}
                    required
                />

                <button
                    type="submit"
                    disabled={validateButton()}
                    value="Register"
                    className="RegisterButton"
                >
                    Register
                </button>
            </div>

        </form>)
}

export default Form;