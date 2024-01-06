import Student from "../models/Student.js";


class StudentController{
    //INDEX
    async index(req,res){
        const students = await Student.findAll();

        const data = {
            message:"Menampilkan data students",
            data: students,
        };
        res.json(data)
    }

    async store(req,res){
        const {nama,nim,email,jurusan} = req.body;

        const students = await Student.create({
            nama: nama,
            nim: nim,
            email: email,
            jurusan: jurusan,
        });

        const data = {
            message:`Menambahkan data student`,
            data: students,
        };
        res.status(201).json(data)
    }

    async update(req,res){
        const {id} = req.params;
        const {nama,nim,email,jurusan} = req.body;
        // dataStudents[id] = nama;
        const students = await Student.findOne({
            where:{
                id:id,
            }
        });
        if(students){
            const input = [
                students.nama =  nama ?? students.nama,
                students.nim = nim ?? students.nim,
                students.email = email ?? students.email,
                students.jurusan = jurusan ?? students.jurusan
            ]
            await students.update(input);
            await students.save();

            const data = {
                message:`Mengedit data student dengan id ${id}`,
                data:students
            };
            res.status(200).json(data)
        }
        else{
            const students = await Student.findOne({
                where:{
                    id:id,
                }
            });

            await students.destroy();

            const data = {
                message:"Student tidak ditemukan",
            };
            res.status(404).json(data)
        }

        
    }

    async destroy(req,res){
        const {id} = req.params;
        const students = await Student.findOne({
            where:{
                id:id,
            }
        });

        if(students){

            students.destroy();

            const data = {
                message:`Student dengan id ${id} telah dihapus`,
            };
            res.status(200).json(data)
        }
        else{
            const data = {
                message:`Student tidak ditemukan`,
            };
            res.status(404).json(data)
        }
    }

    async show(req,res){
        const {id} = req.params;
        const students = await Student.findOne({
            where:{
                id:id,
            }
        });

        if(students){
            const students = await Student.findOne();

            const data = {
                message:`Menampilkan data student dengan id ${id}`,
                data: students,
            };
            res.status(200).json(data)
        }
        else{
            const data = {
                message:"Student tidak ditemukan",
            };
            res.status(404).json(data)
        }
    }
}

const object = new StudentController();

export default object;