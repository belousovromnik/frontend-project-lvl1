#!/usr/bin/env node
import run from '../engine';
import { greeting, mainAction } from '../games/gcd';

run(greeting, mainAction);
