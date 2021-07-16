import React, {Component} from 'react'
import classes from './MainPage.module.scss'
import { motion } from 'framer-motion'
import {connect} from 'react-redux'


class MainPage extends Component {

    render() {
            return (
                <motion.div 
                        
                        exit={{opacity:0}}
                        animate={{opacity:1}}
                        initial={{opacity:0}}
                >


                    <div className={classes.mainPage}>
                        <div className={classes.mainPage_wrapper}>
                            <div className={classes.mainPage_inner}>
                                <div>
                                    <img src={this.props.userProps.picture} alt="Logo" />
                                </div>
                                <span className={classes.mainPage_text}>{this.props.userProps.name}</span>
                                <span className={classes.mainPage_text}>{this.props.userProps.lastName}</span>
                            </div>
                        </div>
                    </div>


                </motion.div>
            )
        }
    }

function mapStateToProps(state) {
    return {
        userProps: state.user
    }
}

export default connect(mapStateToProps)(MainPage)