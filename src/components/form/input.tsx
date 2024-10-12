interface InputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}   

const Input = ({ onChange }: InputProps) => {
    return (
        <div>
            <label htmlFor="search" className="block text-sm font-medium leading-6 text-gray-900 hidden">Search</label>
            <input type="text" name="search" id="search" className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search..." onChange={onChange} />
        </div>
    );
};

export default Input;   