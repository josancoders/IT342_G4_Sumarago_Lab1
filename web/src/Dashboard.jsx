import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  // Function to handle profile click
  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <div style={containerStyle}>
      {/* --- SIDEBAR NAV --- */}
      <aside style={sidebarStyle}>
        <div style={logoSection}>
          <div style={logoIcon}></div>
          <span style={logoText}>MedLink</span>
        </div>
        
        <nav style={navContainer}>
          <div style={navActive}>Dashboard</div>
          <div style={navItem}>Appointments</div>
          <div style={navItem}>Medical History</div>
          <div style={navItem}>Prescriptions</div>
          <div style={navItem}>Settings</div>
        </nav>

        <div onClick={handleLogout} style={logoutStyle}>Logout</div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main style={mainArea}>
        
        {/* HEADER WITH PROFILE CIRCLE */}
        <header style={headerWrapper}>
          <div style={headerText}>
            <h2 style={welcomeText}>Welcome, Josan</h2>
            <p style={subText}>You have got no appointments for today</p>
          </div>

          {/* BLUE PROFILE CIRCLE */}
          <div 
            onClick={goToProfile} 
            style={profileCircle}
            title="View Profile"
          >
            J
          </div>
        </header>

        {/* UPCOMING SCHEDULES SECTION */}
        <section style={sectionCard}>
          <div style={sectionHeader}>
            <h3 style={sectionTitle}>Upcoming Schedules</h3>
            <span style={viewAll}>View all</span>
          </div>

          <div style={appointmentRow}>
            <div style={dateBlock}>
              <span style={monthLabel}>FEB</span>
              <span style={dayLabel}>24</span>
            </div>
            <div style={infoBlock}>
              <h4 style={apptTitle}>General Consultation</h4>
              <p style={apptSub}>Dr. Maria Santos • 09:00 AM - 10:00 AM</p>
            </div>
            <div style={actionGroup}>
              <button style={rescheduleBtn}>Reschedule</button>
              <button style={joinBtn}>Join Session</button>
            </div>
          </div>
        </section>

        {/* BOTTOM MODULES */}
        <div style={gridContainer}>
          <div style={smallCard}>
            <h4 style={cardHeading}>Medical Records</h4>
            <p style={cardDesc}>Access your clinical documents and test results.</p>
          </div>
          <div style={smallCard}>
            <h4 style={cardHeading}>Digital Prescriptions</h4>
            <p style={cardDesc}>View medications issued by your doctors.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

/* --- STYLE DEFINITIONS --- */

const containerStyle = { display: 'flex', height: '100vh', width: '100vw', backgroundColor: '#f9fbff', overflow: 'hidden' };

const sidebarStyle = { width: '260px', backgroundColor: '#fff', borderRight: '1px solid #f1f4f9', padding: '40px 24px', display: 'flex', flexDirection: 'column', flexShrink: 0 };

const logoSection = { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' };
const logoIcon = { width: '32px', height: '32px', backgroundColor: '#4379EE', borderRadius: '8px' };
const logoText = { fontSize: '22px', fontWeight: 'bold', color: '#1A202C' };

const navContainer = { flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' };
const navItem = { padding: '12px 16px', color: '#718096', cursor: 'pointer', borderRadius: '12px', fontSize: '15px' };
const navActive = { ...navItem, backgroundColor: '#EBF2FF', color: '#4379EE', fontWeight: '600' };
const logoutStyle = { color: '#FF4D4D', cursor: 'pointer', padding: '12px 16px', fontWeight: '600', marginTop: 'auto' };

const mainArea = { flex: 1, padding: '60px 80px', overflowY: 'auto' };

// HEADER WRAPPER TO POSITION PROFILE TO THE RIGHT
const headerWrapper = { 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'flex-start', 
  marginBottom: '48px' 
};

const headerText = { display: 'flex', flexDirection: 'column' };
const welcomeText = { fontSize: '32px', fontWeight: '800', color: '#1A202C', margin: 0 };
const subText = { color: '#718096', marginTop: '10px', fontSize: '16px' };

// BLUE PROFILE CIRCLE STYLE
const profileCircle = { 
  width: '50px', 
  height: '50px', 
  backgroundColor: '#4379EE', 
  borderRadius: '50%', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  color: 'white', 
  fontWeight: 'bold', 
  fontSize: '18px', 
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(67, 121, 238, 0.3)',
  transition: 'transform 0.2s ease'
};

const sectionCard = { backgroundColor: '#fff', borderRadius: '20px', padding: '32px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid #f1f4f9', maxWidth: '1000px' };
const sectionHeader = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' };
const sectionTitle = { fontSize: '20px', fontWeight: '700', color: '#1A202C' };
const viewAll = { color: '#4379EE', cursor: 'pointer', fontSize: '14px', fontWeight: '600' };

const appointmentRow = { display: 'flex', alignItems: 'center', padding: '24px', backgroundColor: '#fff', border: '1px solid #F1F4F9', borderRadius: '16px' };
const dateBlock = { width: '64px', height: '64px', borderRadius: '14px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginRight: '24px' };
const monthLabel = { fontSize: '11px', color: '#4379EE', fontWeight: '800' };
const dayLabel = { fontSize: '22px', fontWeight: '800', color: '#1A202C' };

const infoBlock = { flex: 1 };
const apptTitle = { margin: '0 0 4px 0', fontSize: '18px', fontWeight: '600', color: '#1A202C' };
const apptSub = { margin: 0, color: '#718096', fontSize: '15px' };

const actionGroup = { display: 'flex', gap: '12px' };
const rescheduleBtn = { padding: '12px 20px', borderRadius: '10px', border: '1px solid #E2E8F0', background: '#fff', cursor: 'pointer', fontWeight: '600', color: '#718096' };
const joinBtn = { padding: '12px 24px', borderRadius: '10px', border: 'none', background: '#4379EE', color: '#fff', cursor: 'pointer', fontWeight: '600' };

const gridContainer = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px', maxWidth: '1000px' };
const smallCard = { backgroundColor: '#fff', borderRadius: '20px', padding: '28px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid #f1f4f9' };
const cardHeading = { margin: '0 0 12px 0', fontSize: '18px', fontWeight: '700', color: '#1A202C' };
const cardDesc = { margin: 0, color: '#718096', fontSize: '14px', lineHeight: '1.5' };

export default Dashboard;