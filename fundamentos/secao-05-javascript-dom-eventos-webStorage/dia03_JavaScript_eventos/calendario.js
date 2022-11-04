const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  const decemberDay = () => {
      const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
      const weekDaysList = document.getElementById('days');
      for (let i = 0; i < decemberDaysList.length; i += 1) {
      const day = decemberDaysList[i];
      const dayList = document.createElement('li');
      dayList.innerHTML = day;

      weekDaysList.appendChild(dayList);
    }
  }
  
  decemberDay();

  const holiday = (feriado) => {
    const divButtonsContainer = document.getElementsByClassName('buttons-container')[0];
    const buttonFeriado = document.createElement('button');
    const idButtonFeriado = 'btn-holiday';
    buttonFeriado.innerHTML = feriado;
    buttonFeriado.id = idButtonFeriado;
    divButtonsContainer.appendChild(buttonFeriado);
  }
  holiday('Feriados');

const collorButton = () => {
  const buttunHoliday = document.querySelector('#btn-holiday');
  const getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white'; 

  buttunHoliday.addEventListener('click', () => {
    for (let i in getHolidays){
      if(getHolidays[i].style.backgroundColor === setNewColor) {
        getHolidays[i].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[i].style.backgroundColor = setNewColor;
      }
    }
  });
}
collorButton();
  