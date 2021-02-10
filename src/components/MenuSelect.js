import React from 'react'
import '../screen/typo.css';
import '../screen/screen.css';



const MenuSelect = () => {
    return(
        <div>
            
                <label for="pet-select">Choisi ton entréé</label>
                <select name="pets" id="pet-select">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
                </select>

        </div>
    )
}

export default MenuSelect