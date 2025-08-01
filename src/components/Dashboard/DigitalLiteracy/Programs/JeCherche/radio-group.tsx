// "use client";

// import { ReactNode } from "react";

// type RadioGroupProps = {
//   value: string;
//   onValueChange: (value: string) => void;
//   children: ReactNode;
//   className?: string;
// };

// export function RadioGroup({ value, onValueChange, children, className = "" }: RadioGroupProps) {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     onValueChange(e.target.value);
//   };

//   return (
//     <div className={className} onChange={handleChange}>
//       {children}
//     </div>
//   );
// }

// type RadioGroupItemProps = {
//   value: string;
//   id: string;
//   label: ReactNode;
//   checked?: boolean;
// };

// export function RadioGroupItem({ value, id, label, checked }: RadioGroupItemProps) {
//   return (
//     <label htmlFor={id} className="inline-flex items-center gap-2 cursor-pointer">
//       <input
//         type="radio"
//         id={id}
//         value={value}
//         checked={checked}
//         className="accent-blue-500"
//       />
//       <span>{label}</span>
//     </label>
//   );
// }

"use client";

import { ReactNode } from "react";

type RadioGroupProps = {
  value: string;
  onValueChange: (value: string) => void;
  children: ReactNode;
  className?: string;
};

export function RadioGroup({ value, onValueChange, children, className = "" }: RadioGroupProps) {
  return (
    <div className={className} role="radiogroup">
      {children}
    </div>
  );
}

type RadioGroupItemProps = {
  value: string;
  id: string;
  label: ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function RadioGroupItem({ value, id, label, checked, onChange }: RadioGroupItemProps) {
  return (
    <label htmlFor={id} className="inline-flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        id={id}
        name="search-engine"  // All radios in group should have same name
        value={value}
        checked={checked}
        onChange={onChange}
        className="accent-blue-500"
      />
      <span>{label}</span>
    </label>
  );
}