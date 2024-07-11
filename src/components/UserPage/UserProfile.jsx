import React from 'react';
import { Box, Avatar, Typography, Button, IconButton } from '@mui/material';
import { FaCheckCircle, FaEllipsisH, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function UserProfile() {
  return (
    <Box sx={{ bgcolor: '#000000', color: '#ffffff',borderBottom: '1px solid #2f3336' }}>
      {/* ヘッダー画像 */}
      <Box sx={{ height: 200, width: 600, backgroundImage: 'url(/path-to-header-image.jpg)', backgroundSize: 'cover' }} />

      {/* プロフィール情報 */}
      <Box sx={{ padding: 2, position: 'relative' }}>
        <Avatar
          sx={{ width: 120, height: 120, border: '4px solid #121212', position: 'absolute', top: -60, left: 16 }}
          src="/path-to-profile-image.jpg"
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <IconButton sx={{ color: '#ffffff', mr: 1 }}><FaEllipsisH /></IconButton>
          <IconButton sx={{ color: '#ffffff', mr: 1 }}><FaEnvelope /></IconButton>
          <Button variant="outlined" sx={{ color: '#ffffff', borderColor: '#ffffff', borderRadius: 20 }}>
            Follow
          </Button>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 5, color: '#ffffff' }}>
          てとらαSI <FaCheckCircle sx={{ color: '#1DA1F2', fontSize: 'small' }} />
        </Typography>
        <Typography sx={{ color: '#b0b0b0' }}>@TETRA_IT</Typography>
        <Typography sx={{ my: 2, color: '#e0e0e0' }}>
          SIerの人/ITIL Expert/SIerや情シスあるあるとかネタツイ多め。雑多に呟きます。
          threadsとBlue Skyは飽きました。重要な情報を見たい方はさらに表示を押してみて
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', color: '#b0b0b0', mb: 1 }}>
          <FaMapMarkerAlt fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">日本 東京</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', color: '#b0b0b0', mb: 2 }}>
          <FaCalendarAlt fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">Joined February 2020</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, color: '#e0e0e0' }}>
          <Typography><strong>6,822</strong> Following</Typography>
          <Typography><strong>20.7K</strong> Followers</Typography>
        </Box>
      </Box>

      {/* ここにタブやツイート一覧を追加 */}
    </Box>
  );
}

export default UserProfile;
