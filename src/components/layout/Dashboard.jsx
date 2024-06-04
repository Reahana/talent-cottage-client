import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom';
import { FaChalkboard, FaCreditCard,  FaHouse,  FaBookOpenReader,  FaUsers ,FaLaptopCode} from 'react-icons/fa6';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div>
        
            <Helmet>
                <title>Talent Cottage | Dashboard</title>
            </Helmet>
            <Header></Header>
            <Container fluid>
                <Row>
                    { isAdmin?
                      
                        <Col xs={2} className=" border-right bg-secondary  " style={{minHeight: '50vh'}}>
                            <Nav className="flex-column pt-5" >
                                <Link style={{textDecoration: 'none'}} className='text-white  ' to='/dashboard/adminHome' ><FaHouse /> Dashboard</Link> <br/>
                                <Link style={{textDecoration: 'none'}} className='text-white  ' to='/dashboard/manageClass' > <FaChalkboard /> Manage Classes</Link><br/>
                                <Link style={{textDecoration: 'none'}} className='text-white ' to='/dashboard/manageUser' ><FaUsers/> Manage Users</Link>

                            </Nav>
                        </Col> : isInstructor?
                        
                       <Col xs={2}  className="bg-light border-right" style={{minHeight: '50vh'}}>
                            <Nav className="flex-column  pt-5">
                                <Link style={{textDecoration: 'none'}} className='text-dark  ' to='/dashboard/instructorHome' ><FaHouse /> Dashboard</Link> <br />
                                <Link style={{textDecoration: 'none'}} className='text-dark  ' to='/dashboard/addClass' ><FaChalkboard /> Add a Class</Link> <br />
                                <Link style={{textDecoration: 'none'}} className='text-dark ' to='/dashboard/myClass' ><FaBookOpenReader />  My Classes</Link>
                                
                            </Nav>
                        </Col> :
                        <Col xs={2}  className="bg-light border-right" style={{minHeight: '50vh'}}>
                        <Nav className="flex-column  pt-5">
                          <Link style={{textDecoration: 'none'}} className='text-dark  ' to='/dashboard/studentHome' ><FaHouse /> Dashboard</Link><br/>
                          <Link style={{textDecoration: 'none'}} className='text-dark  ' to='/dashboard/selectedClass' > <FaChalkboard /> My Selected Classes</Link><br/>
                          <Link style={{textDecoration: 'none'}} className='text-dark ' to='/' ><FaLaptopCode /> My Enrolled Classes</Link><br/>
                          <Link style={{textDecoration: 'none'}} className='text-dark  ' to='/' ><FaCreditCard /> Payment History</Link>
                        </Nav>
                      </Col> 
                    }
                    <Col xs={10}>  
                        <Outlet></Outlet>
                     </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;