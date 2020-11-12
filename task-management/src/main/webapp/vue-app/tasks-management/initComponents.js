import TasksManagement from './components/TasksManagement.vue';
import ProjectCardList from './components/Project/ProjectCardList.vue';
import ProjectDashboard from './components/Project/ProjectDashboard.vue';
import ProjectListToolbar from './components/Project/ProjectListToolbar.vue';
import ProjectCard from './components/Project/ProjectCard.vue';
import ProjectCardFront from './components/Project/ProjectCardFront.vue';
import ProjectCardReverse from './components/Project/ProjectCardReverse.vue';
import AddProjectDrawer from './components/Project/AddProjectDrawer.vue';
import ExoTaskEditor from "./components/Project/ExoTaskEditor.vue";
import ProjectManagersDrawer from "./components/Project/ProjectManagersDrawer.vue";
import ProjectAssigneeManager from "./components/Project/ProjectAssigneeManager.vue";
import ProjectEventFormAssigneeAndParticipatorItem from "./components/Project/ProjectEventFormAssigneeAndParticipatorItem.vue";
import ProjectAssigneeParticipator from "./components/Project/ProjectAssigneeParticipator.vue";

import TasksDashboard from './components/tasks/TasksDashboard.vue';
import TasksListToolbar from './components/tasks/TasksListToolbar.vue';
import TasksList from './components/tasks/TasksList.vue';
import TasksListItem from './components/tasks/TasksListItem.vue';
import TasksCardsList from './components/tasks/TasksCardsList.vue'
import TaskCard from './components/tasks/TaskCard.vue';
import TasksFilterDrawer from "./components/tasks/TasksFilterDrawer.vue";
import TasksAssigneeAndCoworkerDrawer from "./components/tasks/TasksAssigneeAndCoworkerDrawer.vue";

import TasksViewDashboard from "./components/ProjectTasks/TasksViewDashboard.vue";
import TasksViewToolbar from "./components/ProjectTasks/TasksViewToolbar.vue";
import TasksViewBoard from "./components/ProjectTasks/TasksViewBoard.vue";
import TasksViewList from './components/ProjectTasks/TasksViewList.vue';
import TaskViewGantt from './components/ProjectTasks/TasksViewGantt.vue';
import TasksViewHeader from "./components/ProjectTasks/TasksViewHeader.vue";
import TaskViewCard from "./components/ProjectTasks/TaskViewCard.vue";
import TaskViewListItem from "./components/ProjectTasks/TaskViewListItem.vue";

const components = {
  'tasks-management': TasksManagement,
  'project-dashboard': ProjectDashboard,
  'project-list-toolbar': ProjectListToolbar,
  'project-card-list': ProjectCardList,
  'project-card': ProjectCard,
  'project-card-front': ProjectCardFront,
  'project-card-Reverse': ProjectCardReverse,
  'add-project-drawer': AddProjectDrawer,
  'exo-task-editor': ExoTaskEditor,
  'project-manager-drawer': ProjectManagersDrawer,
  'project-assignee-manager': ProjectAssigneeManager,
  'project-event-form-assignee-and-participator-item': ProjectEventFormAssigneeAndParticipatorItem,
  'project-assignee-participator': ProjectAssigneeParticipator,

  'tasks-dashboard': TasksDashboard,
  'tasks-list-toolbar': TasksListToolbar,
  'tasks-list': TasksList,
  'tasks-list-item': TasksListItem,
  'tasks-cards-list': TasksCardsList,
  'task-card': TaskCard,
  'task-filter-drawer':TasksFilterDrawer,
  'tasks-assignee-coworker-drawer': TasksAssigneeAndCoworkerDrawer,


  'tasks-view-dashboard': TasksViewDashboard,
  'tasks-view-toolbar': TasksViewToolbar,
  'tasks-view-board': TasksViewBoard,
  'tasks-view-list': TasksViewList,
  'tasks-view-gantt': TaskViewGantt,
  'tasks-view-header': TasksViewHeader,
  'task-view-card': TaskViewCard,
  'task-view-list-item': TaskViewListItem

};

for (const key in components) {
  Vue.component(key, components[key]);
}

//get overrided components if exists
if (extensionRegistry) {
  const components = extensionRegistry.loadComponents('TasksManagement');
  if (components && components.length > 0) {
    components.forEach(cmp => {
      Vue.component(cmp.componentName, cmp.componentOptions);
    });
  }
}
