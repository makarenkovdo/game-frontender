import React from 'react'
import styles from './Layout.module.scss'

class Layout extends React.Component {
    render() {
        return (
            <main>{this.props.children}</main>       
             )
    }
}

export default Layout