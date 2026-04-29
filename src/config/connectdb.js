// src/config/connectdb.js
// Module de connexion à MongoDB via Mongoose

const mongoose = require('mongoose');

/**
 * Établit la connexion à la base de données MongoDB.
 * Utilise la variable d'environnement MONGO_URI définie dans le fichier .env.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Options recommandées pour éviter les dépréciations
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB connecté : ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Erreur de connexion MongoDB : ${error.message}`);
    // Quitter le processus en cas d'échec de connexion
    process.exit(1);
  }
};

module.exports = connectDB;