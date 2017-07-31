const Display = ({ waveform_url, playPos = 40 }) => (
  <div
    className="ma2 h3 mw7 relative"
    style={{
      backgroundImage: `url("${waveform_url}")`,
      backgroundSize: '100% 100%'
    }}
  >
    <div
      className="h3 absolute bg-white-40"
      style={{
        width: `${playPos}%`,
        transition: 'all 0.25s ease-in'
      }}
    />
    <div
      className="h3 absolute bg-black"
      style={{
        width: '3px',
        left: `${playPos}%`,
        transition: 'all 0.25s ease-in'
      }}
    />
  </div>
);

export default Display;