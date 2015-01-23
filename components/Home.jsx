/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');
var NavLink = require('flux-router-component').NavLink;

var Component = React.createClass({
    render: function () {

        return (
            <section id="home">
                <div className="splash-container">
                    <div className="splash">
                        <h1 className="splash-head">Fluxible</h1>
                        <p className="splash-subhead">
                            Build isomorphic Flux applications
                        </p>
                        <p>
                            <NavLink className="pure-button pure-button-primary" routeName="getting_started" context={this.props.context}>Get Started</NavLink>
                        </p>
                    </div>
                </div>
                <div className="content">
                    <div className="speakerdeck-container">
                        <script async className="speakerdeck-embed" data-id="87ecaa3048750132f42542ffc18c6fcf" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Component;