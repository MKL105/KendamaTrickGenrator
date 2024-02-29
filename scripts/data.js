/* Copyright (C) [2024] [Markus Luethje <mklgamesapps@gmail.com>]

  This program is free software; you can redistribute it and/or modify it under
  the terms of the GNU General Public License as published by the Free Software
  Foundation; either version 3 of the License, or (at your option) any later
  version.

  This program is distributed in the hope that it will be useful, but WITHOUT
  ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
  FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

  You should have received a copy of the GNU General Public License along with
  this program; if not, see <https://www.gnu.org/licenses>.
 */

const transitions = [
  {
    from: 'juggle',
    via: [],
    to: 'spike',
    alias: null,
  },
  {
    from: 'juggle',
    via: [],
    to: 'lighthouse',
    alias: null,
  },
  {
    from: 'lighthouse',
    via: ['flip', 'double flip', 'triple flip', 'juggle', 'inward flip',
      'double inward flip', 'triple inward flip'],
    to: 'lighthouse',
    alias: null,
  },
  {
    from: 'lighthouse',
    via: ['', 'flip', 'double flip', 'inward flip', 'double inward flip'],
    to: 'in',
    alias: null,
  },
  {
    from: 'lighthouse',
    via: [],
    to: 'tradespike',
    alias: null,
  },
  {
    from: 'spike',
    via: ['whirlwind', 'double whirlwind', 'triple whirlwind'],
    to: '',
    alias: 'spike',
  },
  {
    from: 'spike',
    via: [],
    to: 'juggle',
    alias: null,
  },
  {
    from: 'big cup',
    via: [],
    to: 'juggle',
    alias: null,
  },
  {
    from: 'big cup',
    via: [],
    to: 'lighthouse',
    alias: null,
  },
  {
    from: 'lunar',
    via: ['', 'flip'],
    to: 'in',
    alias: null,
  },
  {
    from: 'lunar',
    via: ['flip', 'double flip', 'triple flip'],
    to: 'lunar',
    alias: null,
  },
  {
    from: 'lunar',
    via: [],
    to: 'juggle',
    alias: null,
  },
  {
    from: 'lunar',
    via: [],
    to: 'tradespike',
    alias: null,
  },
  {
    from: 'inward lunar',
    via: ['', 'flip'],
    to: 'in',
    alias: null,
  },
  {
    from: 'inward lunar',
    via: ['flip', 'double flip', 'triple flip'],
    to: 'inward lunar',
    alias: null,
  },
];

const starts = ['juggle', 'lighthouse', 'big cup', 'lunar', 'inward lunar'];
const ends = ['spike', 'in', 'tradespike'];
