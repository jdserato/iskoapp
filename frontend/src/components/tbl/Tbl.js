import React, { Component } from 'react'
import './datatables.css'

const $ = require('jquery')
$.DataTable = require('datatables.net')

class Tbl extends Component {
    componentDidMount(){
        console.log(this.props.data)
        this.$el = $(this.el)
        this.$el.DataTable({
            data: this.props.data,
            columns:[
                { title: "Learning Object ID" },
                { title: "Learning Object Name" },
                { title: "Actions" }
            ]
        })
    }
    componentWillUnmount(){

    }
    render() {
        return (
            <div>
                <table id="example" className="display" width="100%" ref = {el => this.el = el}>


                </table>
            </div>
        )
    }
}

export default Tbl
