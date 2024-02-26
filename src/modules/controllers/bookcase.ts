import { BookcaseDTO } from "../models/dto-bookcase";
import { Request, Response } from "express";
import { create_bookcase, select_bookcase } from "../services/bookcase";

export class ctr_create_bookcase {
    async create(req: Request, res: Response) {
        const data: BookcaseDTO = req.body;

        const newBookcase = new create_bookcase();

        const result = await newBookcase.create(data);

        return res.status(201).json(result);
    }
}

export class ctr_select_bookcase {
    async students_bookcase(req: Request, res: Response) {
        const student = req.params.student;
        const selectBookcase = new select_bookcase();

        try {
            let result;

            if (student) {
                result = await selectBookcase.student_bookcases(student);
                if (!result) {
                    return res
                        .status(404)
                        .json({ message: "Cursos não localizadas" });
                }
            } else {
                return res
                    .status(404)
                    .json({ message: "Parâmetro não informado" });
            }

            return res.status(200).json(result);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Erro ao buscar cursos" });
        }
    }
}
