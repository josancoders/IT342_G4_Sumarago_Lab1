import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
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
          <div style={navItem} onClick={() => navigate('/dashboard')}>Dashboard</div>
          <div style={navItem}>Appointments</div>
          <div style={navItem}>Medical History</div>
          <div style={navItem}>Prescriptions</div>
          <div style={navActive}>My Profile</div>
          <div style={navItem}>Settings</div>
        </nav>

        {/* --- BOXED LOGOUT BUTTON --- */}
        <div style={logoutBox}>
          <div onClick={handleLogout} style={logoutAction}>
            Logout
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main style={mainArea}>
        <header style={topHeader}>
          <div style={backLink} onClick={() => navigate('/dashboard')}>
            ← Back to Dashboard
          </div>
          <div style={headerDate}>Wednesday, 11 February 2026</div>
        </header>

        {/* PROFILE HERO SECTION */}
        <section style={profileHero}>
          <div style={avatarLarge}>J</div>
          <div style={heroText}>
            <h2 style={userName}>Josan B. Sumarago</h2>
            <p style={userLocation}>Cebu City, Philippines</p>
          </div>
        </section>

        {/* PERSONAL INFORMATION CARD */}
        <section style={infoCard}>
          <div style={cardHeader}>
            <h3 style={cardTitle}>Personal Information</h3>
            <button style={editBtn}>Edit</button>
          </div>
          
          <div style={infoGrid}>
            <div style={infoItem}>
              <label style={infoLabel}>Full Name</label>
              <p style={infoValue}>Josan B. Sumarago</p>
            </div>
            <div style={infoItem}>
              <label style={infoLabel}>Email Address</label>
              <p style={infoValue}>josan@example.com</p>
            </div>
          </div>
        </section>

        {/* ADDRESS CARD */}
        <section style={infoCard}>
          <div style={cardHeader}>
            <h3 style={cardTitle}>Address</h3>
            <button style={editBtn}>Edit</button>
          </div>
          <div style={infoGrid}>
            <div style={infoItem}>
              <label style={infoLabel}>Country</label>
              <p style={infoValue}>Philippines</p>
            </div>
            <div style={infoItem}>
              <label style={infoLabel}>City</label>
              <p style={infoValue}>Cebu City</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

/* --- STYLES --- */

const containerStyle = { display: 'flex', height: '100vh', width: '100vw', backgroundColor: '#f9fbff', overflow: 'hidden' };
const sidebarStyle = { width: '260px', backgroundColor: '#fff', borderRight: '1px solid #f1f4f9', padding: '40px 24px', display: 'flex', flexDirection: 'column', flexShrink: 0 };
const logoSection = { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' };
const logoIcon = { width: '32px', height: '32px', backgroundColor: '#4379EE', borderRadius: '8px' };
const logoText = { fontSize: '22px', fontWeight: 'bold', color: '#1A202C' };

const navContainer = { flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' };
const navItem = { padding: '12px 16px', color: '#718096', cursor: 'pointer', borderRadius: '12px', fontSize: '15px' };
const navActive = { ...navItem, backgroundColor: '#EBF2FF', color: '#4379EE', fontWeight: '600' };

/* --- LOGOUT BOX STYLING --- */
const logoutBox = {
  marginTop: 'auto',
  paddingTop: '20px',
  borderTop: '1px solid #f1f4f9'
};

const logoutAction = {
  padding: '12px 16px',
  backgroundColor: '#FFF5F5', // Soft red background
  color: '#FF4D4D',           // Bright red text from your image
  borderRadius: '12px',
  cursor: 'pointer',
  fontWeight: '600',
  fontSize: '15px',
  textAlign: 'center',
  transition: 'all 0.2s ease'
};

const mainArea = { flex: 1, padding: '30px 60px', overflowY: 'auto' };
const topHeader = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', backgroundColor: '#fff', padding: '15px 25px', borderRadius: '12px', border: '1px solid #f1f4f9' };
const backLink = { color: '#4379EE', cursor: 'pointer', fontWeight: '600', fontSize: '14px' };
const headerDate = { color: '#718096', fontSize: '14px', fontWeight: '500' };
const profileHero = { display: 'flex', alignItems: 'center', gap: '25px', backgroundColor: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f1f4f9', marginBottom: '24px' };
const avatarLarge = { width: '100px', height: '100px', backgroundColor: '#4379EE', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '40px', fontWeight: 'bold' };
const heroText = { display: 'flex', flexDirection: 'column', gap: '4px' };
const userName = { fontSize: '24px', fontWeight: 'bold', color: '#1A202C', margin: 0 };
const userLocation = { fontSize: '14px', color: '#A0AEC0', margin: 0 };
const infoCard = { backgroundColor: '#fff', padding: '30px', borderRadius: '20px', border: '1px solid #f1f4f9', marginBottom: '24px' };
const cardHeader = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', borderBottom: '1px solid #f1f4f9', paddingBottom: '15px' };
const cardTitle = { fontSize: '18px', fontWeight: '700', color: '#1A202C', margin: 0 };
const editBtn = { padding: '8px 20px', backgroundColor: '#FF8A00', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' };
const infoGrid = { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' };
const infoItem = { display: 'flex', flexDirection: 'column', gap: '8px' };
const infoLabel = { fontSize: '13px', color: '#A0AEC0', fontWeight: '500' };
const infoValue = { fontSize: '15px', color: '#1A202C', fontWeight: '600', margin: 0 };

export default Profile;