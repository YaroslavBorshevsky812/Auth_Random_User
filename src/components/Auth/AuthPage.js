import React, {Component} from 'react'
import axios from 'axios';
import classes from './AuthPage.module.scss'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'


class AuthPage extends Component {

    state = {   
        isPasValid: false,
        isEmailValid: false,
        noValid: false,
        allValid: false
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/')
            .then(res => {
                const persons = res.data.results[0];
                this.props.onAdd(
                                    persons.email, 
                                    persons.login.password,
                                    persons.picture.large,
                                    persons.name.first, 
                                    persons.name.last,
                                    persons.cell
                                    
                    )
            })
    }

    handelClick(e) {
        if(this.state.isEmailValid && this.state.isPasValid) {
            this.setState({
                allValid: true
            })
        } else {
            this.setState({
                noValid: true
            })
            e.preventDefault()
        }
    }

    emailControl(event) {
        if (event.target.value === this.props.userProps.email) {
            this.setState({
                isEmailValid: true
            })
        }
    }

    passwordControl(event) {
        if (event.target.value === this.props.userProps.password) {
            this.setState({
                isPasValid: true
            })
        }
    }

    render() {
        const inputClasses = [classes.input_inner]
        if(this.state.noValid === true) {
            inputClasses.push(classes['error'])
        }
        return (
            <div className={classes.authPage}>
                
                <div className={classes.user_wrapper}>
                    <div className={classes.user_inner}>
                        <span className={classes.user_text}>Email: {this.props.userProps.email}</span>
                        <span className={classes.user_text}>Пароль: {this.props.userProps.password}</span>
                    </div>
                </div>
                <div className={classes.auth_wrapper}>
                    <div className={classes.auth_inner}>
                        <div className={classes.title_wrapper}>
                            <span className={classes.title}>Авторизация</span>
                        </div>

                        <div className={classes.inputField}>
                            <label htmlFor='email'>Email</label>
                            <input
                                placeholder= 'Введие Email'
                                id='email'
                                type='text'
                                className={inputClasses.join(' ')}
                                onChange={event => this.emailControl(event)}
                            />
                        </div>

                        <div className={classes.inputField}>
                            <label htmlFor='email'>Пароль</label>
                            <input
                                placeholder='Введие пароль'
                                id='password'
                                type='password'
                                className={inputClasses.join(' ')}
                                onChange={event => this.passwordControl(event)}
                            />
                        </div>

                        <div className={classes.btns}>
                            <NavLink className={classes.btns_item} onClick={this.handelClick.bind(this)}  to='/user'>
                                    Войти
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: (email, password, picture, name, lastName, phone) => dispatch(
            {
                type: 'ADD', 
                addEmail: email, 
                addPassword: password,
                addPicture: picture,
                addName: name,
                addLastName: lastName,
                AddPhone: phone
            }),
    }
}

function mapStateToProps(state) {
    return {
        userProps: state.user
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)
