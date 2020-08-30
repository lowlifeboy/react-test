import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  Button,
  Modal,
} from '@material-ui/core'
import Row from './Row'

const DummyTable = (): JSX.Element => {
  const [tableElements, setTableElements] = useState<{ id: string; title: string }[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [deleteId, setDeleteId] = useState<string>()
  const [deleteTitle, setDeleteTitle] = useState<string>()

  useEffect(() => {
    // make an api request for an http://localhost:3000/api/table endpoint
    fetch('http://localhost:3000/api/table', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data && data.error) {
          localStorage.setItem('err', data.error)
        }
        if (data) {
          setTableElements(data.rows)
        }
      })
  }, [])

  useEffect(() => {
    if (loaded) {
      setLoading((prev) => !prev)
      setLoaded((prev) => !prev)
    }
  }, [tableElements])

  const deleteTableItem = () => {
    if (deleteId) {
      setTableElements(tableElements.filter((item) => item.id !== deleteId))
      setModalIsOpen(!modalIsOpen)
      setDeleteId('')
    } else if (deleteTitle) {
      setTableElements(tableElements.filter((item) => item.title !== deleteTitle))
      setModalIsOpen((prevState) => !prevState)
      setDeleteTitle('')
    }
  }

  return (
    <>
      {loading ? (
        <>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Title</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableElements.length > 0 &&
                  tableElements.map((item) => {
                    return (
                      <Row
                        row={item}
                        action={() => {
                          setModalIsOpen(!modalIsOpen)
                        }}
                        actionImg="https://img.icons8.com/color/72/delete-sign.png"
                        key={item.id + item.title}
                      />
                    )
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <Modal
            open={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <div style={{ backgroundColor: 'white', padding: 30 }}>
              <h3>Are you really want to delete this item?</h3>
              <p>Enter item title or id</p>
              <div>
                <TextField
                  value={deleteId}
                  onChange={(event) => setDeleteId(event.target.value)}
                  placeholder="Item id"
                />
                <Button
                  type="button"
                  variant="outlined"
                  color="primary"
                  style={{ textTransform: 'none' }}
                  onClick={() => deleteTableItem()}
                >
                  Delete
                </Button>
              </div>
              <div>
                <TextField
                  value={deleteTitle}
                  onChange={(event) => setDeleteTitle(event.target.value)}
                  placeholder="Item title"
                />
                <Button
                  type="button"
                  variant="outlined"
                  color="primary"
                  style={{ textTransform: 'none' }}
                  onClick={() => deleteTableItem()}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Modal>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default DummyTable
