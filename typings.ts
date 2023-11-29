import { ColumnDef } from "@tanstack/react-table";

export type FileType = {
  id: string;
  filename: string;
  fullName: string;
  timestamp: Date;
  downloadURL: string;
  type: string;
  size: number;
};

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
