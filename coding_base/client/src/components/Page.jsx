import React, {useState}  from "react";
import image from '../image/selfphoto.jpg';
import {BootstrapTable, TableHeaderColumn, InsertButton, ButtonGroup} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import axios from "axios";


function Page(){
    var keyValue = -1
    const [username, setUserName] = useState('')
    const [content, setContent] = useState({text: ''});
    const [res, setRes] = useState([]);
    const [resC, setResC] = useState([]);
    

    const handleInput = (event) => {
        event.persist();
        setContent((values) => ({
            ...values,
            text: event.target.value,
        }))
    };

    const handleSubmit = (e) => {
        //alert("Please wait a few seconds! The result is running..")
        e.preventDefault();
        const input = {
            sentence: content.text,
        }
        console.log("Test entered:", input);

        // Make a POST request to the page that adds data
        axios.post('http://localhost:8080/inputData/request', input)
        .then(response => {
            setRes(
                []
            );
            setResC(
                []
            );
            console.log("Response from page: ", response.data);
            var temp = response.data.split("\n");
            addItem(temp[0]);
            addItem(temp[1]);
            addItem(temp[2]);
            addItem(temp[3]);
            addItem(temp[4]);
            addItemForClass(temp[5]);
            addItemForClass(temp[6]);
            addItemForClass(temp[7]);
            addItemForClass(temp[8]);
            addItemForClass(temp[9]);
            // Update the right text area with the response content
            // document.getElementsByName("recommendation")[0].textContent = res[0];
        });
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
    
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
    
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
    
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
  
    const user_id = getCookie("user_id");
    
    function getUserName(user_id){
      axios.get('http://localhost:8080/users/' + user_id)
        .then(res => {
          // console.log(res.data);
          setUserName(res.data.username);
        })
      return username
    }
    
    function addItem(items) {
        setRes(prevItems => {
            return [...prevItems, items]
        });
    }

    function addItemForClass(items) {
        setResC(prevItems => {
            return [...prevItems, items]
        });
    }
    
    function handleInsertButtonClick() {
      if(keyValue == -1){
        alert("You need to select a sentence first!")
      }else{
        // console.log(keyValue)
        const currentNumber = keyValue
        // console.log(currentNumber)
        const input = {
            sentence_storage: res[currentNumber],
            sentence_class: resC[currentNumber]
        }
        console.log("Test entered:", input);
        axios.post('http://localhost:8080/users/update/' + user_id, input)
          .then(res => console.log(res.data));
        alert("This sentence is added to your database!")
      }
    }

    function createCustomInsertButton () {
      return (
        <InsertButton
          btnText='add'
          btnContextual='btn-warning'
          className='my-custom-class'
          btnGlyphicon='glyphicon-edit'
          onClick={handleInsertButtonClick}/>
       
      );
    }
    
    function expandclass(event){
      event.preventDefault();
      var storage = event.currentTarget.value
      const input = {
        sentence: event.currentTarget.value,
      }
      console.log("Test entered:", input);
      axios.post('http://localhost:8080/inputData/more', input)
      .then(response => {
        setRes(
          []
        );
        setResC(
          []
        );
        console.log("Response from page: ", response.data);
        var temp = response.data.split("\n");
        for(var i=0; i<temp.length-1; i++){
          addItem(temp[i]);
          addItemForClass(storage);
        }
      })
    }

    const createCustomButtonGroup = props => {
      return(
        <ButtonGroup>
        {props.insertBtn}
        <button value={res[keyValue]} onClick={(event) => {
              navigator.clipboard.writeText(event.currentTarget.value)
              alert("This sentence is copied to the clipboard!")
              }} type='button' className={ `btn btn-primary` }>
        copy
        </button>
        <button value={resC[keyValue]} type='button' className={ `btn btn-primary` } onClick={expandclass}>see more</button>
        </ButtonGroup>
      );
    }

    const options = {
      page: 1,
      prePage:  <i class="icofont-rounded-left"></i>,
      nextPage: <i class="icofont-rounded-right"></i>,
      firstPage: <i class="icofont-double-left"></i>,
      lastPage: <i class="icofont-double-right"></i>,
      // addToFav: {handleResult}
      // afterInsertRow: onInsertRow,
      // afterDeleteRow: onDeleteRow
      insertBtn: createCustomInsertButton,
      btnGroup: createCustomButtonGroup
    }

    function onRowSelect(row){
      keyValue = row.id
      console.log(row)
      console.log(keyValue)
    }

    const selectRowProp = {
      mode: 'radio',
      onSelect: onRowSelect
    }

    function getData() {
      var data = []
      for (var i = 0; i < res.length; ++i) {
        data[i] = {id: i, class: resC[i], sentence: res[i]}
      }
           
       return data
    }

    return  <div>
    <div className="suggestion1">
      <div className="container-suggestion1">
        <div className="dropdown col-lg-3 col-md-3">
          <button className="btn dropdown " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{WebkitAppearance: 'none'}}>
            <img src={image} className=" img-thumbnail rounded-circle" alt="" style={{width: '60px'}} />
          </button>
          <li><a className="dropdown-item">Hello {getUserName(user_id)}</a></li>
            <li><a className="dropdown-item" href='/'>Log Out</a></li>
            <li><a className="dropdown-item" href='/favpage'>Collection</a></li>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="index.html">Home</a></li>
            <li><a className="dropdown-item" href="#">Log Out</a></li>
          </ul>
        </div>
        <div className="col-lg-9 col-md-9">
          <form className="suggestion1-form validate-form" onSubmit={handleSubmit}>
            <span className="suggestion1-form-title">
              Input your sentences
            </span>
            <div className="wrap-input1 validate-input" data-validate="Message is required">
              <textarea className="input1" name="message" placeholder="Sentences" defaultValue={""} value={content.text} onChange={handleInput}/>
              <span className="shadow-input1" />
            </div>
            <div className="container-suggestion1-form-btn">
              <button className="suggestion1-form-btn" value="submit" >
                <span>
                  Submit
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                </span>
              </button>
            </div>
          </form>
        </div>
      
        <div className="container mt-2 mb-2 pageTable" style={{textAlign: 'center'}}>

          <BootstrapTable data={getData()}
                        // insertRow={true}
                        // deleteRow={true}
                          selectRow={selectRowProp}
                          pagination={true}
                          options={options}
                          insertRow
                          
          >
            <TableHeaderColumn isKey hidden dataField='id'
            >
              ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField='sentence'
            >
              Sentences
           </TableHeaderColumn>
            <TableHeaderColumn dataField='class'
            >
              Classification
            </TableHeaderColumn>
          
        </BootstrapTable>
        </div>
      </div>
    </div>
  </div>
}

export default Page;
