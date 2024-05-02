import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import Title from '../Title';
const BooksContainer = styled.nav`
    margin-bottom:250px;
    background-image: linear-gradient(90deg, #1f5f61 55%, #0b8185);
    text-align: center;
    padding: 10% 0 25%;
    height: 270px;
    width: 100%;
    
`

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: auto;
    height: auto;
    max-width: 800px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%; 
    padding: 10px;
    gap: 20px;
`
const Descriptions = styled.div`
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-width: 500px; 
    flex-wrap: wrap; 
    word-break: break-word;
`
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
