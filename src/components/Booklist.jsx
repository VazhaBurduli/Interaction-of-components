import Book from './Book'

import BookImage from '../assets/arch-of-triumph.jpg'

function myAction() {
    console.log('Arch of Triumph')
    console.log('Ravik')
    console.log('Joan Madou')
    console.log('Boris Morosow')
    console.log('Ruth Goldberg')
    console.log('Haake')
}

const Booklist = () => {
    return (
        <div>
            <Book name={"Arch of Triumph"} image={BookImage} description={"Arch of Triumph (German: Arc de Triomphe) is a 1945 novel by Erich Maria Remarque about stateless refugees in Paris before World War II. Written during his exile in the United States (1939-1948), it was his second worldwide bestseller, after All Quiet on the Western Front. It was made into a feature film starring Ingrid Bergman and Charles Boyer in 1948 and into a television film starring Anthony Hopkins and Lesley-Anne Down in 1984."} action={myAction} character1={"Ravik,"} character2={"Joan Madou,"} character3={"Boris Morosow"} /> 
        </div>
    )
}

export default Booklist; 




