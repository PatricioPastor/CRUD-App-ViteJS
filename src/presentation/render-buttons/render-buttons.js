
import userStore from "../../store/crud-store"
import { renderTable } from "../render-table/render-table"
import './render-buttons.css'


export const renderButtons = (element)=>{

    const nextButton = document.createElement('button')
    nextButton.id = 'next'
    nextButton.innerText = "Next 🡺"

    const prevButton = document.createElement('button')
    prevButton.id = 'prev'
    prevButton.innerText = "🡸 Prev"

    const currentValuePage = document.createElement('span')
    currentValuePage.id = 'current-page'
    currentValuePage.innerText = userStore.getCurrentPage()

    element.append(prevButton, currentValuePage, nextButton);

    nextButton.addEventListener('click', async() =>{ 
        await userStore.loadNextPage(element);
        currentValuePage.innerText = userStore.getCurrentPage()
        renderTable(element);
        console.log(userStore.getCurrentPage())
     });

    prevButton.addEventListener('click', async() =>{
         await userStore.loadPreviousPage(element); 
         currentValuePage.innerText = userStore.getCurrentPage()
         renderTable(element);
    })

}