const xlsx = require('xlsx');
const express = require('express')
const app = express()
const port = 300

app.get('/data', (req, res) => {
	try {
		res.send(parseExcel('E:/project/oktober/public/peserta.xlsx'))
	} catch (err) {
		res.status(500).json({msg:err.message})
	}
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

const parseExcel = (filename) => {

    const excelData = xlsx.readFile(filename);

    try {
	    return Object.keys(excelData.Sheets).map(name => ({
	        name,
	        data: xlsx.utils.sheet_to_json(excelData.Sheets[name]),
	    }));
} catch (error) {
	console.log(error);
}
};