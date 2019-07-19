import { Router, Response } from 'express';
import { verificaToken } from '../middlewares/autenticacion';
import { Post } from '../models/post.model';

const postRoutes = Router();

postRoutes.post('/', [ verificaToken ], (req: any, res: Response) => {

    const body = req.body;

    body.usuario = req.usuario._id;

    Post.create( body ).then( async postDB => {

        await postDB.populate('usuario', '-password').execPopulate();

        res.json({
            ok: true,
            post: postDB
        });

    }).catch( err => {

        res.json({
            ok: false,
            err
        })

    });

});

export default postRoutes;
