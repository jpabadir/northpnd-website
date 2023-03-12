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
import { useEffect } from 'react';

export default function Expertise() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className='StandalonePageParent d-flex justify-content-center'>
      <div className='Expertise'>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Client</TableCell>
                <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Tech Used</TableCell>
                <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Description</TableCell>
                <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Tags</TableCell>
                <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Dates</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expertiseItems.map((row) => (
                <TableRow key={row.description} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Client" className="text-center justify-content-center ClientNameCell">
                    <Link to={`/clients/${row['client-id']}`}>{row.client}</Link>
                  </TableCell>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Tech Used" className="text-center justify-content-center">
                    {row.tech.map((tech) => (<span key={tech} className='pill darkpill'>{tech}</span>))}
                  </TableCell>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Description" className="">
                    {row.description}
                  </TableCell>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Tags" className="text-center justify-content-center">
                    {row.tags.map((tag) => (<span key={tag} className='pill' style={{ background: tagColors[tag] }}>{tag}</span>))}
                  </TableCell>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Dates" className="text-center justify-content-center">
                    {row.dates}
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
