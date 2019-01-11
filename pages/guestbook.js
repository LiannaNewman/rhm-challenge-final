import React, { Component } from 'react'
import Link from 'next/link'
import { Table } from 'semantic-ui-react'
import '../style.css';

class GuestBook extends React.Component {
  render() {
    return (
      <div>
        <h1> Welcome to the Guest Book! </h1>
        <Table
        style={{
           ui: 'table',
           width: '50%',
           background: '#fff',
           margin: '1em 0',
           border: '1px solid rgba(34,36,38,.15)',
           WebkitBoxShadow: 'none',
           boxShadow: 'none',
           borderRadius: '.28571429rem',
           textAlign: 'left',
           color: 'rgba(0,0,0,.87)',
           borderCollapse: 'separate',
           borderSpacing: '0'
         }}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell> Name </Table.HeaderCell>
              <Table.HeaderCell> Message </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell> Harry Potter </Table.Cell>
              <Table.Cell> The Boy Who Lived. </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell> Cedric Diggory </Table.Cell>
              <Table.Cell> The HufflePuff Who Died. </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell> Heromine Granger </Table.Cell>
              <Table.Cell> The Smart MuggleBorn. </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Link href="/index">
          <a>Back to Home</a>
        </Link>
      </div>
    )
  }
}

export default GuestBook
