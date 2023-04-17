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

export default function Expertise() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedTech, setSelectedTech] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
  })
  
  const showFilterMenu = () => {
    setShowFilter(!showFilter);
    setSelectedTags([]);
    setSelectedTech([]);
  };
    
  const filterByTags = (checked, tag) => {
    if (checked) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    }
  };

  const filterByTech = (checked, tech) => {
    if (checked) {
      setSelectedTech([...selectedTech, tech]);
    } else {
      setSelectedTech(selectedTech.filter((t) => t !== tech));
    }
  };  

  const filteredItems = expertiseItems.filter((item) => {
    if (selectedTags.length === 0 && selectedTech.length === 0) {
      return true;
    }
    return (
      selectedTags.every(
        (tag) => item.tags && item.tags.includes(tag)
      ) &&
      selectedTech.every(
        (tech) => item.tech && item.tech.includes(tech)
      )
    );
  });  
  
  return (
     <div className='StandalonePageParent d-flex justify-content-center'>
      <div className='Expertise'>
        <div className="TagFilter">
          <div className="FilterButton" onClick={showFilterMenu}>Filter options {showFilter ? '▲' : '▼'}</div>
          <div className="TagOptionsContainer" style={{ display: showFilter ? 'flex' : 'none' }}>
            <div>
              <h4>Tags</h4>
              {Object.keys(tagColors).map((tag) => (
                <label key={tag}>
                  <input
                    type="checkbox"
                    value={tag}
                    checked={selectedTags.includes(tag)}
                    onChange={(e) =>
                      filterByTags(e.target.checked, e.target.value)
                    }
                  />
                  <span
                    className="checkmark"
                    style={{ background: tagColors[tag] ?? 'grey' }}
                  ></span>
                  {tag}
                </label>
              ))}
            </div>
            <div>
              <h4>Tech</h4>
                {expertiseItems.reduce((acc, item) => {
                  if (item.tech) {
                    item.tech.forEach((tech) => {
                      if (!acc.includes(tech)) {
                        acc.push(tech);
                      }});
                  }
                  return acc;
                }, []).map((tech) => (
                  <label key={tech}>
                    <input
                      type="checkbox"
                      value={tech}
                      checked={selectedTech.includes(tech)}
                      onChange={(e) =>
                        filterByTech(e.target.checked, e.target.value)
                      }
                    />
                  {tech}
                </label>
              ))}
            </div>
          </div>
        </div>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Client</TableCell>
                <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Tech Stack</TableCell>
                <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Description</TableCell>
                <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Tags</TableCell>
                <TableCell className="text-center" sx={{ color: 'inherit', fontSize: 'inherit', fontWeight: 'bold' }}>Dates</TableCell>
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
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Description" dangerouslySetInnerHTML={{ __html: row.description }}>
                  </TableCell>
                  <TableCell sx={{ color: 'inherit', fontSize: 'inherit' }} label="Tags" className="text-center justify-content-center">
                    <div className='d-flex justify-content-center' style={{ flexWrap: 'wrap', maxWidth: '200px' }}>
                      {row.tags ? row.tags.map((tag) => (<span key={tag} className='pill' style={{ background: tagColors[tag]?? 'grey' }}>{tag}</span>)) : '-'}
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