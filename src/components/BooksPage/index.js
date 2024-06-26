import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { BooksContainer, Card, Descriptions } from './style';
import Title from '../Title';

function BooksPage({ urlTemplate, dataId }) {
    const [data, setData] = useState(null);
    const apiUrl = urlTemplate.replace('{id}', dataId);
    console.log(dataId)
    console.log(urlTemplate)
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
                        <img src={data.src} alt={data.title}></img>
                        <Descriptions>
                            <Title
                            cor="#30261c"
                            tamanhoFonte='25px'
                            >{data.title}</Title>
                            <p><strong>Livro escrito por: </strong> {data.author.name}</p>
                            <p><strong>Livro publicado por: </strong>{data.publisher}</p>
                            <p><strong>Páginas: </strong>{data.pages} páginas.</p>
                            <p><strong>Valor:</strong> R${data.price}</p>
                            <p><strong>Descrição: </strong>
                                Descrição genérica.
                            </p>
                        </Descriptions>

                    </Card>
              


                </>

            ) : (
                <p>Loading...</p>
            )}

        </BooksContainer>

    );
}

BooksPage.propTypes = {
    urlTemplate: PropTypes.string.isRequired,
    dataId: PropTypes.string.isRequired,
};

export default BooksPage;
