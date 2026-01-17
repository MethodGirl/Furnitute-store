import {
    toggleFilter
} from './toggleFilter.js'
import{
    checkMediaQuery
} from '../indexJs/index.js'

let filterButton = document.querySelector('.setting__filtration-button');
filterButton.addEventListener('click', toggleFilter);

checkMediaQuery()