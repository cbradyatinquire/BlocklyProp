/**
 * Visual Blocks Language
 *
 * Copyright 2014 Michel Lampo.
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Prop-C for basic blocks.
 * @author michel@creatingfuture.eu  (Michel Lampo)
 * @author valetolpegin@gmail.com   ( Vale Tolpegin )
 */
'use strict';

//define blocks
if (!Blockly.Language)
    Blockly.Language = {};

Blockly.Language.inout_digital_write = {
    category: 'In/Out',
    helpUrl: 'help/block-digitalpin.html#write',
    init: function() {
        this.setColour(230);
        this.appendDummyInput("")
                .appendTitle("DigitalWrite PIN#")
                .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN")
                .appendTitle("Stat")
                .appendTitle(new Blockly.FieldDropdown([["HIGH", "1"], ["LOW", "0"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Write digital value to a specific Port');
    }
};

Blockly.Language.inout_digital_read = {
    category: 'In/Out',
    helpUrl: 'help/block-digitalpin.html#read',
    init: function() {
        this.setColour(230);
        this.appendDummyInput("")
                .appendTitle("Input PIN#")
                .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
        this.setOutput(true, Boolean);
        this.setTooltip('');
    }
};

Blockly.Language.inout_digital_write_pin = {
    category: 'In/Out',
    helpUrl: 'help/block-digitalpin.html#write-pin',
    init: function() {
        this.setColour(230);
        this.appendDummyInput("").appendTitle("DigitalWrite PIN#");
        this.appendValueInput('PIN').setCheck(Number);
        this.appendDummyInput("").appendTitle("Stat")
                .appendTitle(new Blockly.FieldDropdown([["HIGH", "1"], ["LOW", "0"]]), "STAT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Write digital value to a specific Port');
        this.setInputsInline(true);
    }
};

Blockly.Language.inout_digital_read_pin = {
    category: 'In/Out',
    helpUrl: 'help/block-digitalpin.html#read-pin',
    init: function() {
        this.setColour(230);
        this.appendDummyInput("").appendTitle("DigitalRead PIN#");
        this.appendValueInput('PIN').setCheck(Number);
        this.setOutput(true, Boolean);
        this.setTooltip('');
        this.setInputsInline(true);
    }
};

Blockly.Language.base_delay = {
    category: 'Control',
    helpUrl: 'help/block-delay.html',
    init: function() {
        this.setColour(120);
        this.appendValueInput("DELAY_TIME", Number)
                .appendTitle("Pause (ms)")
                .setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Delay specific time');
    }
};

Blockly.Language.base_freqout = {
    category: 'Control',
    helpUrl: '',
    init: function() {
        this.setColour(120);
         this.appendDummyInput("")
                .appendTitle("Freq PIN#")
                .appendTitle(new Blockly.FieldDropdown(profile.default.digital), "PIN");
        this.appendValueInput("DURATION", Number)
                .appendTitle("Duration (ms)")
                .setCheck(Number);
        this.appendValueInput("FREQUENCY", Number)
                .appendTitle("frequecy (hz)")
                .setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Frequency output');
    }
};

Blockly.Language.pin_high = {
    category: 'Control',
    helpUrl: '',
    init: function() {
        this.setColour( 120 );
        this.appendDummyInput( "" )
            .appendTitle( "Set PIN# to high" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "PIN" );
        this.setPreviousStatement( true, null );
        this.setNextStatement( true, null );
    }
};

Blockly.Language.pin_low = {
    category: 'Control',
    helpUrl: '',
    init: function() {
        this.setColour( 120 );
        this.appendDummyInput( "" )
            .appendTitle( "Set PIN# to low" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "PIN" );
        this.setPreviousStatement( true, null );
        this.setNextStatement( true, null );
    }
};

Blockly.Language.pulse_in = {
    category: 'Control',
    helpUrl: '',
    init: function() {
        this.setColour( 120 );
        this.appendDummyInput( "" )
            .appendTitle( "Pulse in" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "PIN" );
        this.setPreviousStatement( true, null );
        this.setNextStatement( true, null );
    }
};

Blockly.Language.pulse_out = {
    category: 'Control',
    helpUrl: '',
    init: function() {
        this.setColour( 120 );
        this.appendDummyInput( "" )
            .appendTitle( "Pulse out" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "PIN" );
        this.setPreviousStatement( true, null );
        this.setNextStatement( true, null );
    }
};

Blockly.Language.simpletools_library_toggle_pin = {
    category: 'Control',
    helpUrl: '',
    init: function() {
        this.setColour( 120 );
        this.appendDummyInput( "" )
            .appendTitle( "Toggle Pin" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "PIN" );
        this.setPreviousStatement( true, null );
        this.setNextStatement( true, null );
    }
};

Blockly.Language.simpletools_library_reverse_pin = {
    category: 'Control',
    helpUrl: '',
    init: function() {
        this.setColour( 120 );
        this.appendDummyInput( "" )
            .appendTitle( "Reverse pin" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "PIN" );
        this.setPreviousStatement( true, null );
        this.setNextStatement( true, null );
    }
};

Blockly.Language.simpletools_library_get_pin_state = {
    category: 'Control',
    helpUrl: '',
    init: function() {
        this.setColour( 120 );
        this.appendDummyInput( "" )
            .appendTitle( "Get pin state" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "PIN" );
        this.setPreviousStatement( true, null );
        this.setNextStatement( true, null );
    }
};

Blockly.Language.simpletools_library_get_pin_output = {
    category: 'Control',
    helpUrl: '',
    init: function() {
        this.setColour( 120 );
        this.appendDummyInput( "" )
            .appendTitle( "Get pin output" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "PIN" );
        this.setPreviousStatement( true, null );
        this.setNextStatement( true, null );
    }
};

Blockly.Language.simpletools_library_set_pin_direction = {
    category: 'Control',
    helpUrl: '',
    init: function() {
        this.setColour( 120 );
        this.appendDummyInput( "" )
            .appendTitle( "Set pin direction" )
            .appendTitle( "Pin number" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "PIN" );
        this.appendDummyInput( "" )
            .appendTitle( "Direction" )
            .appendTitle( new Blockly.FieldDropdown( [["0", "0"], ["1", "1"]] ), "DIRECTION" );
        this.setPreviousStatement( true, null );
        this.setNextStatement( true, null );
    }
};

Blockly.Language.simpletools_library_set_pin_output = {
    category: 'Control',
    helpUrl: '',
    init: function() {
        this.setColour( 120 );
        this.appendDummyInput( "" )
            .appendTitle( "Set pin output" )
            .appendTitle( "Pin" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "PIN" );
        this.appendDummyInput( "" )
            .appendTitle( "State" )
            .appendTitle( new Blockly.FieldDropdown( [["0", "0"], ["1", "1"]] ), "STATE" );
        this.setPreviousStatement( true, null );
        this.setNextStatement( true, null );
    }
};

Blockly.Language.simpletools_library_get_pin_group_states = {
    //TO DO: Add the correct code for this
    //need to figure out how to get results, do I store them into variables?
    category: 'Control',
    helpUrl: '',
    init: function() {
        this.setColour( 120 );
        this.appendDummyInput( "" )
            .appendTitle( "Get pin group states" )
            .appendTitle( "Start Pin" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "START_PIN" );
        this.appendDummyInput( "" )
            .appendTitle( "End Pin" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "END_PIN" );
        this.setPreviousStatement( true, null );
        this.setNextStatement( true, null );
    }
};

Blockly.Language.simpletools_library_get_pin_group_directions = {
    //TO DO: Add the correct code for this
    //need to figure out how to get results, do I store them into variables?
    category: 'Control',
    helpUrl: '',
    init: function() {
        this.setColour( 120 );
        this.appendDummyInput( "" )
            .appendTitle( "Get pin group directions" )
            .appendTitle( "Start Pin" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "START_PIN" );
        this.appendDummyInput( "" )
            .appendTitle( "End pin" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "END_PIN" );
        this.setPreviousStatement( true, null );
        this.setNextStatement( true, null );
    }
};

Blockly.Language.simpletools_library_get_pin_group_outputs = {
    //TO DO: Add the correct code for this
    //need to figure out how to get results, do I store them into variables?
    category: 'Control',
    helpUrl: '',
    init: function() {
        this.setColour( 120 );
        this.appendDummyInput( "" )
            .appendTitle( "Get pin group outputs" )
            .appendTitle( "Start pin" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "START_PIN" );
        this.appendDummyInput( "" )
            .appendTitle( "End Pin" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "END_PIN" );
        this.setPreviousStatement( true, null );
        this.setNextStatement( true, null );
    }
};

Blockly.Language.simpletools_library_set_pin_group_directions = {
    category: 'Control',
    helpUrl: '',
    init: function() {
        this.setColour( 120 );
        this.appendDummyInput( "" )
            .appendTitle( "Set pin group directions" )
            .appendTitle( "Start Pin" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "START_PIN" );
        this.appendDummyInput( "" )
            .appendTitle( "End Pin" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "END_PIN" );
        this.appendDummyInput( "" )
            .appendTitle( "Patter/Direction" )
            .appendTitle( new Blockly.FieldDropdown( [["0", "0"], ["1", "1"]] ), "PATTERN" );
        this.setPreviousStatement( true, null );
        this.setNextStatement( true, null );
    }
};

Blockly.Language.simpletools_library_set_pin_group_outputs = {
    category: 'Control',
    helpUrl: '',
    init: function() {
        this.setColour( 120 );
        this.appendDummyInput( "" )
            .appendTitle( "Set pin group outputs" )
            .appendTitle( "Start Pin" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "START_PIN" );
        this.appendDummyInput( "" )
            .appendTitle( "End Pin" )
            .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "END_PIN" );
        this.appendDummyInput( "" )
            .appendTitle( "Output/Pattern" )
            .appendTitle( new Blockly.FieldDropdown( [["0", "0"], ["1", "1"]] ), "PATTERN" );
        this.setPreviousStatement( true, null );
        this.setNextStatement( true, null );
    }
};

// define generators
Blockly.propc = Blockly.Generator.get('propc');

//generate code for the compiler
Blockly.propc.inout_digital_write = function() {
    var dropdown_pin = this.getTitleValue('PIN');
    var dropdown_stat = this.getTitleValue('STAT');
    if (dropdown_stat == 1) {
        return 'high(' + dropdown_pin + ');\n';
    } else {
        return 'low(' + dropdown_pin + ');\n';
    }
};

Blockly.propc.inout_digital_read = function() {
    var dropdown_pin = this.getTitleValue('PIN');
    //  Blockly.Spin.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'input(' + dropdown_pin + ')';
    return [code, Blockly.propc.ORDER_ATOMIC];
};

Blockly.propc.inout_digital_write_pin = function() {
    var dropdown_pin = Blockly.propc.valueToCode(this, 'PIN', Blockly.propc.ORDER_UNARY_PREFIX) || '0';
    var dropdown_stat = this.getTitleValue('STAT');
    if (dropdown_stat == 1) {
        return 'high(' + dropdown_pin + ');\n';
    } else {
        return 'low(' + dropdown_pin + ');\n';
    }
};

Blockly.propc.inout_digital_read_pin = function() {
    var dropdown_pin = Blockly.propc.valueToCode(this, 'PIN', Blockly.propc.ORDER_UNARY_PREFIX) || '0';
    //  Blockly.Spin.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
    var code = 'input(' + dropdown_pin + ')';
    return [code, Blockly.propc.ORDER_ATOMIC];
};

Blockly.propc.base_delay = function() {
    var delay_time = Blockly.propc.valueToCode(this, 'DELAY_TIME', Blockly.propc.ORDER_ATOMIC) || '1000';
    var code = 'pause(' + delay_time + ');\n';
    return code;
};

Blockly.propc.base_freqout = function() {
    var dropdown_pin = this.getTitleValue( 'PIN' );
    var duration = Blockly.propc.valueToCode(this, 'DURATION', Blockly.propc.ORDER_ATOMIC) || 1000;
    var frequency = Blockly.propc.valueToCode(this, 'FREQUENCY', Blockly.propc.ORDER_ATOMIC) || 3000;
    
    var code = 'freqout( ' + dropdown_pin + ', ' + duration + ', ' + frequency + ' );\n';
    
    return code;
};

Blockly.propc.pin_high = function() {
    var dropdown_pin = this.getTitleValue( 'PIN' );
    
    var code = 'high( ' + dropdown_pin + ' )';
    return code;
};

Blockly.propc.pin_low = function() {
    var dropdown_pin = this.getTitleValue( 'PIN' );
    
    var code = 'low( ' + dropdown_pin + ' )';
    return code;
};

Blockly.propc.pulse_in = function() {
    var dropdown_pin = this.getTitleValue( 'PIN' );
    
    var code = '';
    return code;
};

Blockly.propc.pulse_out = function() {
    var dropdown_pin = this.getTitleValue( 'PIN' );
    
    var code = '';
    return code;
};

Blockly.propc.simpletools_library_toggle_pin = function() {
    var dropdown_pin = this.getTitleValue( 'PIN' );
    
    var code = 'toggle( ' + dropdown_pin + ' )';
    return code;
};

Blockly.propc.simpletools_library_reverse_pin = function() {
    var dropdown_pin = this.getTitleValue( 'PIN' );
    
    var code = 'reverse( ' + dropdown_pin + ' )';
    return code;
};

Blockly.propc.simpletools_library_get_pin_state = function() {
    var dropdown_pin = this.getTitleValue( 'PIN' );
    
    var code = 'get_state( ' + dropdown_pin + ' )';
    return code;
};

Blockly.propc.simpletools_library_get_pin_output = function() {
    var dropdown_pin = this.getTitleValue( 'PIN' );
    
    var code = 'get_output( ' + dropdown_pin + ' )';
    return code;
};

Blockly.propc.simpletools_library_set_pin_direction = function() {
    var dropdown_pin = this.getTitleValue( 'PIN' );
    var direction = this.getTitleValue( 'DIRECTION' );
    
    var code = 'set_direction( ' + dropdown_pin + ', ' + direction + ' )';
    return code;
};

Blockly.propc.simpletools_library_set_pin_output = function() {
    var dropdown_pin = this.getTitleValue( 'PIN' );
    var state = this.getTitleValue( 'STATE' );
    
    var code = 'set_output( ' + dropdown_pin + ', ' + state + ' )';
    return code;
};

Blockly.propc.simpletools_library_get_pin_group_states = function() {
    var start_pin = this.getTitleValue( 'START_PIN' );
    var end_pin = this.getTitleValue( 'END_PIN' );
    
    var code = 'get_states( ' + start_pin + ', ' + end_pin + ' )';
    return code;
};

Blockly.propc.simpletools_library_get_pin_group_directions = function() {
    var start_pin = this.getTitleValue( 'START_PIN' );
    var end_pin = this.getTitleValue( 'END_PIN' );
    
    var code = 'get_directions( ' + start_pin + ', ' + end_pin + ' )';
    return code;
};

Blockly.propc.simpletools_library_get_pin_group_outputs = function() {
    var start_pin = this.getTitleValue( 'START_PIN' );
    var end_pin = this.getTitleValue( 'END_PIN' );
    
    var code = 'get_outputs( ' + start_pin + ', ' + end_pin + ' )';
    return code;
};

Blockly.propc.simpletools_library_set_pin_group_Directions = function() {
    var start_pin = this.getTitleValue( 'START_PIN' );
    var end_pin = this.getTitleValue( 'END_PIN' );
    var direction = this.getTitleValue( 'PATTERN' );
    
    var code = 'set_directions( ' + start_pin + ', ' + end_pin + ', ' + direction + ' )';
    return code;
};

Blockly.propc.simpletools_library_set_pin_group_outputs = function() {
    var start_pin = this.getTitleValue( 'START_PIN' );
    var end_pin = this.getTitleValue( 'END_PIN' );
    var direction = this.getTitleValue( 'PATTERN' );
    
    var code = 'set_outputs( ' + start_pin + ', ' + end_pin + ', ' + direction + ' )';
    return code;
};
