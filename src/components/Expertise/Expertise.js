import { items as expertiseItems, tagColors } from './expertise-items';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './Expertise.css';
import { useEffect, useState } from 'react';
import TableSortLabel from '@mui/material/TableSortLabel';
import { Row, Col, Container } from 'react-bootstrap'
import { MdKeyboardArrowLeft } from "react-icons/md";
import checkmark from "../../assets/tick.png";
import upArrow from "../../assets/angle-up-solid.svg";
import downArrow from "../../assets/angle-down-solid.svg";
import person from "../../assets/person-outline.png";
import techIcon from "../../assets/programming-language.png";

const clients = [
  "Chick-fil-A Eaton Center", "Kitty's Co.", "TechNuCom", "Digital Rise", "Midstride Technologies", "Minebright", "Proximy" 
];

const techStacks= [
  "Laravel", "Python", "MySQL", "SQLite", "Webflow", "PHP", "Docker", "GitHub Actions", "AWS IAM", "AWS S3", "AWS CLI", "AWS SES",
  "Bash", "Vue", "JS", "npm", "SASS", "Markdown", "Cloud Firestore", "Flutter", "Google Cloud Functions", "Shopify", "BigQuery"
];

export default function Expertise() {  

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('');

  const handleSortRequest = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedItems = [...expertiseItems].sort((a, b) => {
    if (orderBy === 'client') {
      return order === 'asc'
        ? a.client.localeCompare(b.client)
        : b.client.localeCompare(a.client);
    } else if (orderBy === 'dates') {
      const getDateValue = (dateStr) => {
        const [month, year] = dateStr.split(' ');
        const monthValue = {
          'January': 0, 'February': 1, 'March': 2,
          'April': 3, 'May': 4, 'June': 5,
          'July': 6, 'August': 7, 'September': 8,
          'October': 9, 'November': 10, 'December': 11
        }[month];
        return new Date(year, monthValue, 1).getTime();
      };
      const dateValueA = getDateValue(a.dates);
      const dateValueB = getDateValue(b.dates);
      return order === 'asc' ? dateValueA - dateValueB : dateValueB - dateValueA;
    } else if (orderBy === 'tags') {
      const tagStrA = a.tags ? a.tags.sort().join('') : '';
      const tagStrB = b.tags ? b.tags.sort().join('') : '';
      return order === 'asc'
        ? tagStrA.localeCompare(tagStrB)
        : tagStrB.localeCompare(tagStrA);
    } else if (orderBy === 'tech') {
      const techStrA = a.tech ? a.tech.sort().join('') : '';
      const techStrB = b.tech ? b.tech.sort().join('') : '';
      return order === 'asc'
        ? techStrA.localeCompare(techStrB)
        : techStrB.localeCompare(techStrA);
    }
    return 0;
  });


  const [showFilterCategories, setShowFilterCategories] = useState(false);
  const [selectedTech, setSelectedTech] = useState([]);
  const [showTechMenu, setShowTechMenu] = useState(false);
  const [selectedClient, setSelectedClient] = useState([]);
  const [showClientMenu, setShowClientMenu] = useState(false);
  const [filteredItems, setFilteredItems] = useState([...expertiseItems]);
  const [isFadingOut, setIsFadingOut] = useState(true);

  function filterClick() {
    setShowFilterCategories(!showFilterCategories);
  }

  function filterClientClick() {
    setShowTechMenu(false);
    setShowClientMenu(!showClientMenu);
  }

  function handleClientSelection(client) {
    if (selectedClient.includes(client)) {
      setSelectedClient(selectedClient.filter((item) => item !== client));
    }
    else {
      setSelectedClient([...selectedClient, client]);
    }
    setFilteredItems(showProjects(sortedItems, true));
    setIsFadingOut(false);
  }

  function filterTechClick() {
    setShowTechMenu(!showTechMenu);
  }

  function handleTechSelection(tech) {
    if (selectedTech.includes(tech)) {
      setSelectedTech(selectedTech.filter((item) => item !== tech));
    }
    else {
      setSelectedTech([...selectedTech, tech]);
    }
    setFilteredItems(showProjects(sortedItems, true));
    setIsFadingOut(false);
  }
  
  function showProjects(rows) {
    if (selectedTech.length === 0 && selectedClient.length === 0)
      return rows;
    else {
      return rows.filter((row) => {
        const hasSelectedClient = selectedClient.length === 0 || selectedClient.includes(row.client);
        const hasSelectedTech = selectedTech.length === 0 || (row.tech && row.tech.some((tech) => selectedTech.includes(tech)));
        return hasSelectedClient && hasSelectedTech;
      });
    }
  }
  
  useEffect(() => {
    setTimeout(() => {
      setIsFadingOut(true);
    });

    const expertiseElement = document.querySelector('.Expertise');

    if (isFadingOut)
      expertiseElement.classList.add('fade-in');
    else
      setFilteredItems(showProjects(sortedItems, false));
    
    const fadeOutTimeout = setTimeout(() => {
      expertiseElement.classList.remove('fade-in');
    }, 300);

    return () => {
      clearTimeout(fadeOutTimeout);
    };
  }, [isFadingOut]);

  return (
    <div>
      <Container fluid className='p-0'>
        <Row className='px-0 py-5 d-flex justify-content-center' style={{ background: '#302E3A', color: 'white' }}>
          <Col style={{ maxWidth: '1700px', paddingTop: '60px' }}>
            <div className='ps-1'>
              <div className='PageTitle'>Expertise</div>
              <div className='PageSubtitle'>Successful projects and experiences</div>
            </div>
          </Col>
        </Row>
        <Row className='d-flex justify-content-center'>
          <Col style={{ maxWidth: '1700px' }}>
            <div className='d-flex'>
              <a href="/" style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: 'black', fontSize: '22px' }} className='my-3'><MdKeyboardArrowLeft color="red" className='me-4' />About us</a>
            </div>
              <div style={{marginLeft: 38, marginTop: 10, marginBottom: 10, maxWidth: '1200px'}}>
                <button class='filter-button' onClick={() => filterClick()} style={{backgroundColor: 'transparent', border: 0, fontSize: 18, fontWeight: 'bold', marginBottom: '3px'}}>
                  Filter
                  {showFilterCategories ? (
                    <img src={upArrow} alt="up arrow" style={{width: '20px', marginLeft: '8px'}}/>
                  ) : (
                    <img src={downArrow} alt="down arrow" style={{width: '20px', marginLeft: '8px'}}/>
                  )}
                </button>
                {showFilterCategories && (
                  <div>
                    <div>
                      <button class='filter-button' onClick={() => filterClientClick()} style={{backgroundColor: 'transparent', border: 0, fontSize: 18}}>
                      <img src={person} alt='person icon' style={{width: '20px', marginRight: '10px'}}/>
                      Client
                      {showClientMenu ? (
                        <img src={upArrow} alt="up arrow" style={{width: '20px', marginLeft: '8px'}}/>
                      ) : (
                        <img src={downArrow} alt="down arrow" style={{width: '20px', marginLeft: '8px'}}/>
                      )}
                      </button>
                      {showClientMenu && (
                        <div>
                          {clients.map((client) => (
                            <button 
                              className={`client ${selectedClient.includes(client) ? 'selected-button' : 'unselected-button'}`} 
                              onClick={() => handleClientSelection(client)}
                            >
                              {selectedClient.includes(client) && (
                              <img src={checkmark} alt="checkmark" style={{marginRight: '8px'}}/> )}
                              {client}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    
                  <div>
                    <button class='filter-button' onClick={() => filterTechClick()} style={{backgroundColor: 'transparent', border: 0, fontSize: 18}}>
                      <img src={techIcon} alt='tech language icon' style={{width: '25px', marginRight: '7px'}}/>
                      Tech Stack
                      {showTechMenu ? (
                        <img src={upArrow} alt="up arrow" style={{width: '20px', marginLeft: '8px'}}/>
                      ) : (
                        <img src={downArrow} alt="down arrow" style={{width: '20px', marginLeft: '8px'}}/>
                      )}
                      </button>
                    {showTechMenu && (
                      <div>
                        {techStacks.map((techStack) => (
                          <button 
                            className={`techStackButton ${selectedTech.includes(techStack) ? 'selected-button' : 'unselected-button'}`} 
                            onClick={() => handleTechSelection(techStack)}
                          >
                            {selectedTech.includes(techStack) && (
                            <img src={checkmark} alt="checkmark" style={{marginRight: '8px'}}/> )}
                            {techStack}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}              
            </div>
          </Col>
          <hr style={{ color: 'lightgrey' }} className='p-0 m-0' />
        </Row>
      </Container>
      <div className='d-flex justify-content-center'>
        <div className='Expertise'>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow >
                  <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>
                    <TableSortLabel
                      active={orderBy === 'client'}
                      direction={orderBy === 'client' ? order : 'asc'}
                      onClick={() => handleSortRequest('client')}
                    >
                      Client
                    </TableSortLabel>
                  </TableCell>
                  <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>
                    <TableSortLabel
                      active={orderBy === 'tech'}
                      direction={orderBy === 'tech' ? order : 'asc'}
                      onClick={() => handleSortRequest('tech')}
                    >
                      Tech Stack
                    </TableSortLabel>
                  </TableCell>
                  <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Description</TableCell>
                  <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>
                    <TableSortLabel
                      active={orderBy === 'tags'}
                      direction={orderBy === 'tags' ? order : 'asc'}
                      onClick={() => handleSortRequest('tags')}
                    >
                      Tags
                    </TableSortLabel>
                  </TableCell>
                  <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>
                    <TableSortLabel
                      active={orderBy === 'dates'}
                      direction={orderBy === 'dates' ? order : 'asc'}
                      onClick={() => handleSortRequest('dates')}
                    >
                      Dates
                    </TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredItems.map((row) => (
                  <TableRow key={row.description} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Client" className="text-center justify-content-center ClientNameCell">
                      {row.client}
                      {/* <Link to={`/clients/${row['client-id']}`}>{row.client}</Link> */}
                    </TableCell>
                    <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Tech Stack" className="text-center justify-content-center">
                      <div className='d-flex justify-content-center' style={{ flexWrap: 'wrap', maxWidth: '400px' }}>
                        {row.tech ? row.tech.map((tech) => (<span key={tech} className='pill darkpill'>{tech}</span>)) : '-'}
                      </div>
                    </TableCell>
                    <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Description" dangerouslySetInnerHTML={{ __html: `<div>${row.description}</div>` }}>
                    </TableCell>
                    <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Tags" className="text-center justify-content-center">
                      <div className='d-flex justify-content-center' style={{ flexWrap: 'wrap', maxWidth: '200px' }}>
                        {row.tags ? row.tags.map((tag) => (<span key={tag} className='pill' style={{ background: tagColors[tag] ?? 'grey' }}>{tag}</span>)) : '-'}
                      </div>
                    </TableCell>
                    <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Dates" className="text-center justify-content-center">
                      <div className='d-flex justify-content-center' style={{ flexWrap: 'wrap', maxWidth: '400px' }}>
                        {row.dates}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
