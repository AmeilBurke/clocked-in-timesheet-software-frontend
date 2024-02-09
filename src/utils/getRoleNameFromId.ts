import { Role } from "../types/typeIndex";

const getRoleNameFromId = (allRoles: Role[], roleId: number) => {
  return allRoles.map((role: Role) => {
    if (role.role_id === roleId) {
      return role.role_name;
    }
  });
};

export default getRoleNameFromId;
