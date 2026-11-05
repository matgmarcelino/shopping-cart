import "../../styles/homepage/feature-card.css";

export default function FeatureCard({ title, text }) {
	return (
		<li className="feature-card">
			<h3 className="feature-card-title">{title}</h3>
			<p className="feature-card-text">{text}</p>
		</li>
	);
}
