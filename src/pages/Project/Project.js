import React from 'react'
import { Card } from 'react-bootstrap'
import { CardBody, CardLink, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import iceandfire from '../../Assets/Image/Iceandfire.png'
import portfolio from '../../Assets/Image/Portfolio.png'
import student from '../../Assets/Image/Student-admin.png'
import test from '../../Assets/Image/test.png'
import './Project.css'
function Project() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card className='card'
                            style={{
                                width: '20rem', backgroundColor: '#BCF5D1'
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h5">
                                    ICE AND FIRE
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Related to the books of ice and fire
                                </CardSubtitle>
                            </CardBody>
                            <img
                                alt="Card cap"
                                src={iceandfire}
                                width="100%"
                            />
                            <CardBody>
                                <CardText>
                                    A front end build of books of game of thores series commenly known as <h6>Ice and Fire.</h6>
                                </CardText>
                                <CardLink href="https://github.com/Aravindhthamizh0203/webcode" className='link'>
                                    Scorce code
                                </CardLink>
                                <CardLink href="https://radiant-biscuit-5f29e4.netlify.app/" className='link'>
                                    Website
                                </CardLink>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='card'
                            style={{
                                width: '20rem',
                                backgroundColor: '#BCF5D1'
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h5">
                                    PORTFOLIO
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Portfolio build with reactjs and reactstrap.
                                </CardSubtitle>
                            </CardBody>
                            <img
                                alt="Card cap"
                                src={portfolio}
                                width="100%"
                            />
                            <CardBody>
                                <CardText>
                                    Industry standard of makking a perfect portfolio with use of <h6>react-js and react-strap.</h6>
                                </CardText>
                                <CardLink href="https://github.com/Aravindhthamizh0203/portfolio_aravindh" className='link'>
                                    Scorce code
                                </CardLink>
                                <CardLink href="https://portfolio-aravindh.vercel.app/" className='link'>
                                    Website
                                </CardLink>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-md-4'>
                        <Card className='card'
                            style={{
                                width: '20rem', backgroundColor: '#BCF5D1'
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h5">
                                    BULK EMAILER
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Full stack app of bulk email tool with MERN.
                                </CardSubtitle>
                            </CardBody>
                            <img
                                alt="Card cap"
                                src={test}
                                width="100%"
                            />
                            <CardBody>
                                <CardText>
                                    A app made for bulk emailing in not make in cc and bcc and it's made up of <h6>MERN.</h6>
                                </CardText>
                                <CardLink href="#" className='link'>
                                    Scorce code
                                </CardLink>
                                <CardLink href="#" className='link'>
                                    Website
                                </CardLink>
                            </CardBody>
                        </Card>
                    </div>
                    <div className='col-md-6'>
                        <Card className='card'
                            style={{
                                width: '20rem', backgroundColor: '#BCF5D1'
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h5">
                                    STUDENT-ADMIN
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    React page for student admin block for a school
                                </CardSubtitle>
                            </CardBody>
                            <img
                                alt="Card cap"
                                src={student}
                                width="100%"
                            />
                            <CardBody>
                                <CardText>
                                    A front end build for school student adminstarction block and made in <h6>React-js and minified CSS.</h6>
                                </CardText>
                                <CardLink href="https://github.com/Aravindhthamizh0203/student-admin" className='link'>
                                    Scorce code
                                </CardLink>
                                <CardLink href="https://student-admin-login.netlify.app/" className='link'>
                                    Website
                                </CardLink>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project