import { Scheduler } from './jenlynizer/scheduler';
import { Jenlynizer } from './jenlynizer/index';

const scheduler = new Scheduler();
const jenlynizer = new Jenlynizer();
scheduler.setJenlynizer(jenlynizer);
