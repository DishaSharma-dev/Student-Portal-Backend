const Student = require("../models/student")

const getAll = async(req, res) => {
    try{
        let students = await Student.find();
        res.status(200).json({students : students, totalRecords : students.length});
    }
    catch(error){
        console.log(error);
        res.status(500).json({'error' : 'Internal server error'});
    }
}

const add = async(req, res) => {
    try{
        let student = await Student.create(req.body);
        res.status(200).json({student});
    }
    catch(error){
        res.status(500).json({'error' : 'Internal server error'});
    }
}

const get = async(req, res) => {
    try{
        let student = await Student.findById({_id : req.params.id});
        res.status(200).json({student});
    }
    catch(error){
        res.status(500).json({'error' : 'Internal server error'});
    }
}

const update = async(req, res) => {
    try{
        let student = await Student.findOneAndUpdate({_id : req.params.id}, req.body);
        res.status(200).json({student});
    }
    catch(error){
        res.status(500).json({'error' : 'Internal server error'});
    }
}

const remove = async(req, res) => {
    try{
        let student = await Student.findOneAndDelete({_id : req.params.id});
        res.status(200).json({student});
    }
    catch(error){
        res.status(500).json({'error' : 'Internal server error'});
    }
}

const upload = async(req, res) => {
    try{
        console.log(req.body);
        let student = await Student.findOneAndUpdate({_id : req.params.id}, req.body);
        res.status(200).json({student});
    }
    catch(error){
        res.status(500).json({'error' : 'Internal server error'});
    }
}

module.exports = {
    get,
    getAll,
    add,
    remove,
    update,
    upload
}