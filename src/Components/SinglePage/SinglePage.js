import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaStar } from 'react-icons/fa';
import { DataContext } from '../../Context/MovieContext';
import "./SinglePage.css"
import { Link } from 'react-router-dom'
import Pagination from '../Pagination/Pagination';
import Filter from '../Filter/Filter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SinglePage = ({ data }) => {

    const { handleModalId, loading, selectYear } = React.useContext(DataContext)
    return (
       
        <div className='movie-page'>
            <Container>
                <Row>
                    <Col sm={2} s>
                        <div tyle={{position:"fixed"}}>
                        <Filter />
                        </div>
                    
                    </Col>
                    <Col sm={10} className='movie-page'>
                    {

selectYear ? (
    data.filter((ele) => {
        return selectYear == parseInt(ele.release_date.slice(0, 4))
    }).map((ele) => {
        return (
            <div>

                <Link className='card-main-div' to="/movie-info">
                    <div className='card-div' onClick={() => { handleModalId(ele.id) }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${ele.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{ele.original_title}</Card.Title>
                            </Card.Body>
                            <div className="date-div">
                                <li>{ele.release_date}</li>
                                <li className='star'><FaStar /><span className='vote'>  {ele.vote_average}</span></li>
                            </div>
                        </Card>
                    </div>
                </Link>
            </div>
        )
    })
) : (

    data.map((ele) => {
        return (
            <div>

                <Link className='card-main-div' to="/movie-info">
                    <div className='card-div' onClick={() => { handleModalId(ele.id) }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${ele.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{ele.original_title}</Card.Title>
                            </Card.Body>
                            <div className="date-div">
                                <li>{ele.release_date}</li>
                                <li className='star'><FaStar /><span className='vote'>  {ele.vote_average}</span></li>
                            </div>
                        </Card>
                    </div>
                </Link>
            </div>

        )
    })
)
}
                    </Col>
                </Row>
                </Container>

            <div style={{ width: "100%", zIndex: "100" }}>
                {
                    loading ? <Pagination /> : "Loading......"
                }
            </div>

        </div>

    )
}

export default SinglePage


