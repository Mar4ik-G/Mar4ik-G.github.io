import React, {useEffect, useState} from 'react';
import Tab from "./Tab";
import {addInfo, deleteInfo, getInfo} from "../../firebase/firebaseAction";
import ButtonSignUp from "../mainPage/button/Button";
import As from "./AdminStyle.module.css"

const AdminPage = () => {

    const [info, setInfo] = useState({});

    useEffect(() => {
        getInfo(setInfo, "profileInfo");
    }, []);

    const contactInfo =
        info?.contacts &&
        info.contacts.map((e, index) => {
            return (
                <Tab text={e.main} data={e.data} onChange={(data) => {
                         let contactInfo = [...info.contacts];
                    contactInfo.splice(index, 1, { main: e.main, data })
                        setInfo({...info, contacts: [...contactInfo],});}
                }
                />
            );
        });



    return (
        <div>

            <div className={As.mainBlock}>
                <h3>Редегувати данні рез'юме</h3>
                <div>
                    <Tab data={info.name} text={"Ім'я"} onChange={(e) => {
                        setInfo({...info, name:e});
                    }}/>
                </div>

                <div>
                    <Tab data={info.surname} text={"Прізвище"} onChange={(e) => {
                        setInfo({...info, surname:e});
                    }}/>
                </div>

                <div>
                    <Tab data={info.dateofbirth} text={"Дата народження"} onChange={(e) => {
                        setInfo({...info, dateofbirth:e});
                    }}/>
                </div>

                <div>
                    <Tab data={info.experiance} text={"Досвід в IT"} onChange={(e) => {
                        setInfo({...info, experiance:e});
                    }}/>
                </div>

                {contactInfo}

                <ButtonSignUp
                    func={() => {
                        const addInfo1 = addInfo(info, "profileInfo");
                        const deleteInfo1 = deleteInfo("profileInfo", info.id);
                    }}
                    text="Save Changes"
                    path="/"
                />
            </div>


        </div>
    );
};

export default AdminPage;