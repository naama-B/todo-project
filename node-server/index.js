import 'dotenv/config';
import express from 'express';
import renderApi from '@api/render-api';

const app = express();
renderApi.auth(process.env.RENDER_API_KEY);

app.get('/services', async (req, res) => {
  try {
    const { data } = await renderApi.listServices();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));