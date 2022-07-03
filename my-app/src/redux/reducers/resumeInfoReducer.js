const initialState = {
    inforesume: {
        name: "Марк",
        surname: "Горбайчук",
        dateofbirth: "01.06.2002",
        placeOfResidence: "city.Lviv",
        contacts: [
            {main: "Номер телефону: ", info: "+380971195151"},
            {main: "Електронна пошта: ", info: "brainocswell@gmail.com"},
        ],
        hardAndSoftSkills: [
            {data: "вміння працювати в команді, критичне мислення, лідерство, креативність," +
                    " вміння дотримуватися дедлайни, відповідальність та дисциплінованість"},
            {data: "TypeScript, JS, HTML5, CSS3, bootstrap, React, Redux ect."}
        ],
        experiance: "Немає комерційного досвіду",
        education: [
            {data: "унівеситет: вища незакінчена освіта. Спеціальність:Компютерні науки"},
            {data: "Lgoos IT Academy"},
        ],
    }
}


const resumeInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setInfo":
            return {...state, inforesume:action.payload}
        default:
            return state;
    }
}

export default resumeInfoReducer;