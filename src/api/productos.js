import { google } from 'googleapis';

export default async function handler(req, res) {
  try {
    // Configuración para acceder a Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        // Tus credenciales de servicio aquí
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // ID del Spreadsheet y rango de datos
    const spreadsheetId = '1G3Xfwn-_luFnupMz2BKJL5vDQteD4JfuzOqwzsTdacg';
    const range = 'Productos!A2:H';

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      return res.status(200).json([]);
    }

    // Convertir las filas a objetos de producto
    const products = rows.map((row) => ({
      id: row[0],
      image: row[1],
      name: row[2],
      description: row[3],
      price: row[5],
      stock: row[6],
      seller: row[7],
    }));

    res.status(200).json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error al obtener productos' });
  }
}
