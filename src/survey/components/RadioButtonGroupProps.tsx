import "./Components.css";

interface RadioButtonGroupProps {
    label: string;
    name: string;
    min: number;
    max: number;
}

export function RadioButtonGroup({ label, name, min, max }: RadioButtonGroupProps) {
    return (
        <div className="base__container">
            <div className="label__container">
                <label>{label}</label>
            </div>

            <div className={`radio__button ${max === 3 ? 'center__items' : ''}`}>
                {Array.from({ length: max - min + 1 }, (_, i) => min + i).map((num) => (
                    <div key={num} className="radio__item">
                        <span className="radio__number">{num}</span>
                        <input type="radio" name={name} value={num} />
                    </div>
                ))}
            </div>
        </div>
    );
}