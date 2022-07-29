export default function Switch(props) {
    return (
        <label className="switch-btn">
            <input type="checkbox" {...props} />
            <span></span>
        </label>
    );
}
