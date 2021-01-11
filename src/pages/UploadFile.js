import React, { useEffect, useState } from 'react';
import axios from 'axios'

const urlAdmin = 'http://localhost:3000/admin/m2m/graphql'

function UploadFile() {
  const [dataInput, setDataInput] = useState()
  const [listProjects, setListProjects] = useState([])
  const load = () => {
    axios.post(urlAdmin, {
      query: `
        query {
          projects(pageNumber: 0, pageSize: 100){
            externalId
            createdAt
            name
            status
          }
        }
      `
    }).then(result => {
      if (result && result.errors) {
        console.log(`Failed to get list project. ${result.errors[0].message}.`)
      } else {
        setListProjects(result.data.projects)
      }
    }).catch((thrown) => {
      console.log(`Failed to get list project. ${thrown.message}.`)
    })
  }
  useEffect(() => {
    load()
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("UploadFile -> dataInput", dataInput)
    let queryAddProject = {
      query: `
        mutation($input: CreateProjectInput!) {
          createProject(input: $input) {
            externalId
            sellerId
          }
        }
      `,
      variables: {
        input: {
          name: 'value.title',
          description: 'value.description',
          countryOfOrigin: 'value.country',
          energySource: 'SOLAR',
          facilityName: 'value.generation',
          certificationOrg: 'I-REC',
          vintageYear: '2020',
          isActive: true,
          file: null
          // file: value.fileImgUpload
        }
      }
    }
    let map = {
      '0': ['variables.input.file']
    }
  
    let fd = new FormData()
    fd.append('operations', JSON.stringify(queryAddProject))
    fd.append('map', JSON.stringify(map))
    fd.append('0', dataInput)
    
    let res = await axios.post(urlAdmin, fd, {
     
    })
    console.log("handleSubmit -> res", res)
  }
  const handleChange = (e) => {
    console.log("handleChange -> e.target.files[0]", e.target.files[0])
    setDataInput(e.target.files[0])
  }
  return (
    <div className="UploadFile">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name:
          <input type="file" onChange={e => handleChange(e)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        {console.log("UploadFile -> listProjects", listProjects)}
      </div>
    </div>
  );
}

export default UploadFile;
