import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { FilterCard } from '../../components/FilterCard';
import { TaskCard } from '../../components/TaskCard';
import * as S from './styles';

import api from '../../services/api';

const tasks = [
    {
        "done": false,
        "created": "2021-10-23T20:05:31.643Z",
        "_id": "101",
        "macaddress": "9191",
        "type": 5,
        "title": "Futebol Com a Galera",
        "description": "Jogar Futebol",
        "when": "10/05/2021", "__v": 0
    },
    {
        "done": false,
        "created": "2021-10-23T20:05:31.643Z",
        "_id": "102",
        "macaddress": "6666",
        "type": 2,
        "title": "Comprar Café",
        "description": "Café é Vida",
        "when": "11/05/2021",
        "__v": 0
    }
]


function Home() {
    const taskCard = tasks.map((t, index) => <TaskCard key={index} type={t.type} title={t.title} when={t.when} done={t.done} />)


    const [filterActived, setFilterActived] = useState('all');
    const [tasksApi, setTasksApi] = useState([]);

    async function loadTasks() {
        await api.get(`/tasks/filter/${filterActived}/321654`)
            .then(response => {
                setTasksApi(response.data)
            })
    }

    useEffect(() => {
        loadTasks();
    }, [filterActived])



    return (
        <S.Container>
            <Header />
            <S.Content>

                <S.FilterArea>
                    <button type="button" onClick={() => setFilterActived("Hoje")}><FilterCard title="Hoje" actived={filterActived == "Hoje"} /></button>

                </S.FilterArea>

                <S.FilterArea>
                    <FilterCard title="Todos" actived={false} />
                </S.FilterArea>

                <S.FilterArea>
                    <FilterCard title="Semana" actived={false} />
                </S.FilterArea>

                <S.FilterArea>
                    <FilterCard title="Ano" actived={false} />
                </S.FilterArea>
            </S.Content>

            <S.Title>
                <h3>TAREFAS</h3>
            </S.Title>
            <S.Content>
                {taskCard}
            </S.Content>
            <Footer />
        </S.Container>
    )
}

export default Home;
