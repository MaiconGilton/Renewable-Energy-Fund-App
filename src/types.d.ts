import { StackScreenProps } from "@react-navigation/stack";

declare global {
  interface RouterProps extends StackScreenProps<Record<string, any>> {}
}