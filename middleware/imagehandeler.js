import multer from "multer";
import shortid from "shortid";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, (shortid.generate() + "-" + file.originalname));
    },
});

const fileFilter = (req, file, cb) => {
    if(
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg"
    ){
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({storage: storage, fileFilter: fileFilter});

const imageHandeler = upload.fields([{name : 'cover'}, {name : 'profile'}]);

export default imageHandeler;
