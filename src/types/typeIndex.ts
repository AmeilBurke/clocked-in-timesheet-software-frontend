
export type Trade = {
  trade_id: number;
  trade_name: string;
};

export type Role = {
  role_id: number;
  role_name: string;
};

export type Establishment = {
  establishment_id: number;
  establishment_name: string;
};

export type Account = {
  account_id: number;
  account_email: string;
  account_password: string;
  account_name: string;
  account_establishment_id: number | null;
  account_role_id: number;
  account_trade_id: number | null;
  account_hourly_rate: number | null;
  account_hourly_overtime_rate: number | null;
};

export type Timesheet = {
  timesheet_id: number;
  timesheet_name: string;
  timesheet_account_id: number;
  timesheet_start_date: string;
  timesheet_end_date: string | null;
  timesheetJob: Jobs[];
};

export type Jobs = {
  job_id: number;
  job_display_name: string;
  job_location: number;
  job_start_time: string;
  job_end_time: string | null;
  job_notes: string | null;
  job_standard_hours_worked: number | null;
  job_overtime_hours_worked: number | null;
  job_timesheet_id: number | null;
};
