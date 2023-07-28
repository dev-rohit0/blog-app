import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Possimus quo voluptatum, ullam quam perspiciatis deleniti obcaecati architecto,
            sed minus culpa autem suscipit rem vero voluptas alias animi. Iure, eaque dicta!
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +123 456 789</span>
          <span>YouTube: Mohit</span>
          <span>GitHub: _mohit@123</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Country: India</span>
          <span>Current Location: Jodhpur</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer