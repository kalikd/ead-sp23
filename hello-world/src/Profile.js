/**
 * Two Types of Export & Import
 *  - Default Export & Import
 *  - Named Export & Export
 */


//  const PI = 3.14;

//  const name = "Ahmed";
import React from 'react'
import PropTypes from 'prop-types'
export default function Profile(props){

    const person = {
        src: 'https://randomuser.me/api/portraits/med/men/27.jpg',
        name: 'Aariz',
        size: 60
    }
    const person2 = {
        src: 'https://randomuser.me/api/portraits/med/women/48.jpg',
        name: 'Kate',
        size: 80
    }
    const person3 = {
        src: 'https://randomuser.me/api/portraits/med/men/35.jpg',
        name: 'Mike',
        size: 100
    }
    const person4 = undefined
    return <>
        <Avatar {...props} person={person}  />
        <Avatar {...props} person={person2}  />
        <Avatar {...props} person={person3}  />
        <Avatar {...props} person={person4} />
    </>
}
function Avatar({person:{src, alt, size}}){
    const element = <h1 className='myClass'>No image was found!</h1>
    const element2 = React.createElement('h1', {className:'myClass'}, 'No image was found!' )
    //Above code generated a following
    // const obj = {
    //     type:'h1',
    //     props: {
    //         className:'myClass',
    //         children: 'No image was found!'
    //     }
    // }
    const isFlag = false
    if(isFlag)
        return <img src={src} width={size} height={size} alt={alt}/>
    else
        return element2
   
}
Avatar.defaultProps = {
    person: {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLQlX8kHgCFYgNqXisB6cWENyTofgINwzUOG_u6zBbliVuY_n5EwFl0W4k1b43X9HcsII&usqp=CAU',
        name: 'Mike',
        size: 100
    }
}
Avatar.propTypes = {
    person: PropTypes.object.isRequired
}
// export { PI, name }

// const obj = {PI, name, Avatar};
// export default obj;

//something
//again something

