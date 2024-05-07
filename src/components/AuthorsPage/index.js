import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { BooksContainer, Card, Descriptions } from './style';
import Title from '../Title';


function AuthorsPage({ urlTemplate, dataId }) {
    const [data, setData] = useState(null);
    const apiUrl = urlTemplate.replace('{id}', dataId);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(apiUrl);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();

        // Cleanup function
        return () => {
            setData(null); // Reset data when unmounting
        };
    }, [apiUrl]);

    return (
        <BooksContainer>

            {data ? (
                <>
                    <Card>
                        <img src={data.img} alt={data.name}></img>
                        <Descriptions>
                            <Title
                                cor="#30261c"
                                tamanhoFonte='25px'
                            >{data.title}</Title>
                            <p><strong>{data.name}</strong></p>
                            <p><strong>Nacionalidade: </strong>{data.nationality}</p>
                            <p><strong>Idade:</strong> {data.age} anos.</p>

                        </Descriptions>

                    </Card>



                </>

            ) : (
                <p>Loading...</p>
            )}

        </BooksContainer>

    );
}

AuthorsPage.propTypes = {
    urlTemplate: PropTypes.string.isRequired,
    dataId: PropTypes.string.isRequired,
};

export default AuthorsPage;
