import { TYPE_LOG, TYPE_ERROR, TYPE_WARN } from '../constaint.js'

function logger(log, type = TYPE_LOG) {
    console[type](log);
}

export default logger;