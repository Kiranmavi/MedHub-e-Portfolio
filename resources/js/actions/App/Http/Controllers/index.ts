import UserController from './UserController'
import StudentController from './StudentController'
import PlacementController from './PlacementController'
import FeedbackController from './FeedbackController'
import AbsenceController from './AbsenceController'
import Settings from './Settings'

const Controllers = {
    UserController: Object.assign(UserController, UserController),
    StudentController: Object.assign(StudentController, StudentController),
    PlacementController: Object.assign(PlacementController, PlacementController),
    FeedbackController: Object.assign(FeedbackController, FeedbackController),
    AbsenceController: Object.assign(AbsenceController, AbsenceController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers