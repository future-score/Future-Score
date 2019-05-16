import React, { Component } from 'react'
import './cssContents/Profile.css'
import NavBar from './NavBar'
import Dropzone from 'react-dropzone';
import request from 'superagent';


const CLOUDINARY_UPLOAD_PRESET = 'maeo0tmd';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/polo/image/upload';

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uploadedFileCloudinaryUrl: '',
    }
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  render() {
    return (
     <div className="FileUpload">
       <NavBar></NavBar>
        <div  className="profile-title">
          <h2>Profile</h2>
        </div>
        <div id="personal-image"><img id="user-user" src={this.state.uploadedFileCloudinaryUrl} width= "200px" alt="" /></div>
        <Dropzone
    onDrop={this.onImageDrop.bind(this)}
    accept="image/*"
    multiple={false}>
      {({getRootProps, getInputProps}) => {
        return (
          <div className="upload"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {
            <button className="upload-button">Upload Image</button>
            }
          </div>
        )
    }}
    </Dropzone>
        <div id="personal-view">
        <div className="personalItems">
            <div className="bot-1"></div>
     <div id="username-div" className="bot-1">Polo</div>
  </div>
    <div className="personalItems">
        <div className="bot-1"></div>
        <div id="email-div" className="bot-1">Correo</div>
    </div>
  
    <div className="personalItems">
        <div className="bot-1"></div>
        <a href="/forecasts"><div id="birth-div" className="bot-1">Mis predicciones</div></a>
    </div>

    <div className="theButtons">
      <button type="button" id="editButton">Edit</button>
      <button id="deleteButton"><a className="a-remove-button">Delete</a></button>
    </div>
        {/* <Dropzone
    onDrop={this.onImageDrop.bind(this)}
    accept="image/*"
    multiple={false}>
      {({getRootProps, getInputProps}) => {
        return (
          <div
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {
            <p>Upload Image</p>
            }
          </div>
        )
    }}
    </Dropzone>
     */}
      {/* <div>
          <div>
      <div className="FileUpload">
        ...
      </div>

      <div className="FileUpload">
        {this.state.uploadedFileCloudinaryUrl === '' ? null :
        <div>
          <p>{this.state.uploadedFile.name}</p>
          <img width= "40px" src={this.state.uploadedFileCloudinaryUrl} />
        </div>}
      </div>
    </div>
    </div> */}
    </div>
    </div>
    )
  }
}
        /* <NavBar></NavBar>
        {/* <div  className="profile-title">
          <h2>Profile</h2>
        </div>
        
          <div id="personal-image"><img id="user-user" src="https://images.pexels.com/photos/20787/pexels-photo.jpg?cs=srgb&dl=adorable-animal-cat-20787.jpg&fm=jpg" width= "200px" alt="" /></div>

<div id="personal-view">
  <div className="personalItems">
    <div className="bot-1"></div>
    <div id="username-div" className="bot-1">Polo</div>
  </div>
    <div className="personalItems">
        <div className="bot-1"></div>
        <div id="email-div" className="bot-1">Correo</div>
    </div>
  
    <div className="personalItems">
        <div className="bot-1"></div>
        <a href="/apuestas"><div id="birth-div" className="bot-1">Mis predicciones</div></a>
    </div>

    <div className="theButtons">
      <button type="button" id="editButton">Edit</button>
      <button id="deleteButton"><a className="a-remove-button">Delete</a></button>
    </div>

    </div> */
    

