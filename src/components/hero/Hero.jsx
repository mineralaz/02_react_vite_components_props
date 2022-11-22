function Hero(props) {
  const { title, subtitle, color } = props;
  return (
    <div className={color}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}
export default Hero;
