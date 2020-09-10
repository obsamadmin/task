package org.exoplatform.task.dto;

import lombok.Data;
import org.exoplatform.services.security.Identity;
import org.exoplatform.services.security.MembershipEntry;
import org.exoplatform.task.domain.Project;
import org.exoplatform.task.domain.Status;
import org.exoplatform.task.domain.UserSetting;

import java.io.Serializable;
import java.util.*;


@Data
public class ProjectDto implements Serializable {
    private long      id;

    private String    name;

    private String    description;

    private String    color;

    private boolean calendarIntegrated = false;

    private Set<Status> status ;

    private Set<String> manager;

    private Set<String> participator;

    private Date dueDate;

    private Project parent;

    private List<Project> children;

    private Set<UserSetting> hiddenOn;



    public ProjectDto clone(boolean cloneTask) {
        ProjectDto project = new ProjectDto();
        project.setId(getId());
        project.setColor(this.getColor());
        project.setDueDate(this.getDueDate());
        if (this.getParent() != null) {
            project.setParent(getParent().clone(false));
        }
        project.setCalendarIntegrated(isCalendarIntegrated());
        project.status = new HashSet<Status>();
        project.children = new LinkedList<Project>();

        return project;
    }

    public boolean canView(Identity user) {
        Set<String> permissions = new HashSet<String>(getParticipator());
        permissions.addAll(getManager());

        return hasPermission(user, permissions);
    }

    public boolean canEdit(Identity user) {
        return hasPermission(user, getManager());
    }

    private boolean hasPermission(Identity user, Set<String> permissions) {
        if (permissions.contains(user.getUserId())) {
            return true;
        } else {
            Set<MembershipEntry> memberships = new HashSet<MembershipEntry>();
            for (String per : permissions) {
                MembershipEntry entry = MembershipEntry.parse(per);
                if (entry != null) {
                    memberships.add(entry);
                }
            }

            for (MembershipEntry entry :  user.getMemberships()) {
                if (memberships.contains(entry)) {
                    return true;
                }
            }
        }

        return false;
    }


}
