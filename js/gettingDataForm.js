const getData = document.getElementsByClassName('section1__item');
const article = document.getElementsByClassName('article');// через Dom обращаемся к элементу 'добавить статью'
const img = document.getElementsByTagName('img');// находим элемент по названию тега


//шаблон статьи
const articleSave =  `<section class="section1__item">
         <figure class="image-container">
             <section class="img-gradient"></section>
             <img src="${article.pic}" alt="image" class="pic" />
            
         </figure>
         <article class="section1__item-content">
             <h2>${article.title}</h2>
             <p>${article.content}</p>
              <a href="../Article.htm" target="_blank" rel="noopener noreferrer">Читать далее</a> 
             <section class="section1__item-number">
                <section class="number">300</section>
                <section class="plus"></section>
                <section class="minus"></section>
            </section>
         </article>
     </section>`;

//пишем функцию что бы достать элементы шаблона
function retrieveFormDataValue(event) { 
    event.preventDefault();

    const pic = addData.querySelector('[pic = "pic"]'),//находим картинку
        title = addData.querySelector('[title = "h2"]'),//находим заголовок статьи
        content = addData.querySelector('[content = "p"]');// находим содержание

    const values = {
        pic: pic.value,
        title: title.value,
        content: content.value
    }

}

article.addEventListener('click', retrieveFormDataValue);// по событию клика вытаскиваем картинку,заголовок и содержание

//преобразовываем файлы в data-url, с base64 строкой, для отправки файла в json 
function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
 
  getBase64(img).then(
    data => console.log(data)
  );