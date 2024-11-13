// App.jsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
  Search as SearchIcon,
  Home as HomeIcon,
  Bookmark as BookmarkIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            OpenHands
          </Typography>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Search Bar */}
      <div className="search-bar">
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          InputProps={{
            startAdornment: <SearchIcon sx={{ marginRight: 1, color: 'gray' }} />,
          }}
          sx={{ flex: 1 }}
        />
        <Button variant="contained" color="primary" sx={{ marginLeft: 1 }}>
          Recommend
        </Button>
      </div>

      {/* Organization Cards */}
      <div className="organization-cards">
        <Card className="organization-card">
          <CardContent>
            <Typography variant="h6">Youth Theater Company</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Evanston, IL
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
              We are a local non-profit that provides opportunities in theater to children ages
              8-16. Help us provide a foundational experience in the arts.
            </Typography>
            <Typography variant="subtitle1" sx={{ marginTop: 2, fontWeight: 'bold' }}>
              Current Needs
            </Typography>
            <FormControlLabel control={<Checkbox />} label="1930s costumes" />
            <FormControlLabel control={<Checkbox />} label="Typewriter" />
            <div className="action-buttons">
              <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>
                Loan
              </Button>
              <Button variant="contained" color="secondary">
                Donate
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="organization-card">
          <CardContent>
            <Typography variant="h6">Community Food Pantry</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Evanston, IL
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
              Working against hunger in the community since 1988.
            </Typography>
            <Typography variant="subtitle1" sx={{ marginTop: 2, fontWeight: 'bold' }}>
              Current Needs
            </Typography>
            <FormControlLabel control={<Checkbox />} label="Bread" />
            <FormControlLabel control={<Checkbox />} label="Canned soup" />
            <FormControlLabel control={<Checkbox />} label="Boxed pasta" />
            <FormControlLabel control={<Checkbox />} label="Fresh vegetables" />
            <div className="action-buttons">
              <Button variant="contained" color="secondary">
                Donate
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Navigation */}
      <BottomNavigation showLabels className="footer-nav">
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Saved" icon={<BookmarkIcon />} />
        <BottomNavigationAction label="Alerts" icon={<NotificationsIcon />} />
      </BottomNavigation>
    </div>
  );
}

export default App;