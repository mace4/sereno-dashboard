module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const GENVIRAL_TOKEN = 'gva_live_c780bea0a6.e4b3f4320c725b6f1222ffe38b1ec4cbcebda9968c0e9404';
  
  try {
    const response = await fetch('https://www.genviral.io/api/partner/v1/accounts', {
      headers: { 
        'Authorization': `Bearer ${GENVIRAL_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ 
      ok: false, 
      error: err.message,
      fallback: [
        { handle: '@sarahsabelli', niche: 'TikTok Account', emoji: '📱', status: 'active', accountId: '458a6a73-99e1-4e12-b910-36369bdcd377' },
        { handle: '@madeline_malone', niche: 'TikTok Account', emoji: '📱', status: 'active', accountId: 'beadcb53-85f3-448c-b01c-dc209cb1a896' }
      ]
    });
  }
};
