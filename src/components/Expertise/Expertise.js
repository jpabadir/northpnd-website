import { items as expertiseItems, tagColors } from './expertise-items';
import * as React from 'react';
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './Expertise.css';
import { useEffect, useState } from 'react';
import TableSortLabel from '@mui/material/TableSortLabel';

export default function Expertise() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

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

  return (
    <div className='StandalonePageParent d-flex justify-content-center'>
      <div className='Expertise'>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
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
              {sortedItems.map((row) => (
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
  );
}
