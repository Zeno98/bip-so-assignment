import axios from 'axios'
import React from 'react'
import { DataContext } from '../../Context/MovieContext'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Modal.css";
import { FaStar } from 'react-icons/fa';



const Modal = () => {

    const { modalId, setModalData, modalData } = React.useContext(DataContext)


    const modalApi = async () => {
        const { data } = await axios.get(`https://movie-task.vercel.app/api/movie?movieId=${modalId}`)
        setModalData(data.data)
        console.log(modalData)
    }


    React.useEffect(() => {
        modalApi();
    }, [modalId])
    return (
        <div className='modal-main-div'>
            {
                modalData ? (
                    <div>
                        <Container>
                            <Row>
                                <Col sm={6} className="poster">

                                   {
                                    modalData.backdrop_path ? (
                                        <img
                                        className=" modalImage"
                                        src={`https://image.tmdb.org/t/p/original${modalData.backdrop_path}`}
                                        alt="First slide"
                                    />
                                    ):(
                                        <img
                                        className=" modalImage" style={{height:"50%"}}
                                        src={`http://www.movienewz.com/img/films/poster-holder.jpg`}
                                        alt="First slide"
                                    />
                                    )
                                   }
                                </Col>
                                <Col>
                                    <div>
                                        <h2 className='title'>{modalData.original_title}</h2>
                                    </div>

                                    <div>
                                        <h5 className='overview'>{modalData.overview}</h5>
                                    </div>

                                    {
                                        modalData.tagline ? (<div className="tagline">
                                            <span>"{modalData.tagline}"</span>
                                        </div>) : ""
                                    }


                                    <div><span className='duration'>Duration</span>
                                        <span >
                                            {
                                                `${Math.floor((modalData.runtime / 60))} hr : ${modalData.runtime % 60} min`
                                            }</span>
                                    </div>

                                    <div className="genre"><span className="genre-title">Genre</span> 
                                        {
                                            modalData.genres.map((ele) => {
                                                return (
                                                    <div className='genre-name'>
                                                        <span>{ele.name}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                    <div className="vote">
                                   <span  className='star'> <FaStar/></span> {modalData.vote_average.toFixed(1)}
                                    </div>

                                </Col>
                            </Row>
                        </Container>

                    </div>
                ) : "loading......"
            }


        </div>
    )
}

export default Modal

















