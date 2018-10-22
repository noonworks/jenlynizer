import { Scheduler } from './jenlynizer/scheduler';
import { Jenlynizer } from './jenlynizer/basic_jenlynizer';

const scheduler = new Scheduler();
const jenlynizer = new Jenlynizer();
scheduler.setJenlynizer(jenlynizer);
