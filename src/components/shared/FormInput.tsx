import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Control } from "react-hook-form";
const FormInputDemo = ({
  name,
  control,
  label,
  placeholder,
  type,
}: {
  name: string;

  control: Control<any>;
  label: string;
  placeholder: string;
  type?: string;
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base">{label}</FormLabel>
          <FormControl>
            <Input
              type={type ? type : "text"}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
export default FormInputDemo;
