import express from "express";
import object from "../controllers/StudentsController.js";


const router = express.Router();

router.get("/",function(req,res){
    res.send("Halaman Home by Sam0042 and Fredy Rambitan Simanungkalit")
});

const StudentController = object;

//StudentController.method ditaruh di tempat callbackfunct  karena callbackfunct auto dijalankan ketika kita mengakses parameter satu
router.get("/students",StudentController.index);
router.post("/students",StudentController.store);
router.put("/students/:id",StudentController.update);
router.delete("/students/:id",StudentController.destroy);
router.get("/students/:id",StudentController.show);

export default router;