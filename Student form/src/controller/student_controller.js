const {ObjectId}=require('mongodb');
const connectDB=require('../db/connection');

async function getAllStudents(req, res) {
    try {
        const db=await connectDB();
        const students=await db.collection('students').find().toArray();
        res.json({
            total: students.length,
            students,
        });
    }
    catch(error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}