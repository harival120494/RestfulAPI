import express from "express";
import Login from "../controllers/LoginControllers";

const router = express.Router();
router.get('/', Login.GetUser);
router.post('/', Login.Login);
router.post('/add', Login.AddUser);
router.put('/', Login.UpdateUser);
router.delete('/:user_id', Login.DeleteUser);

export = router;
