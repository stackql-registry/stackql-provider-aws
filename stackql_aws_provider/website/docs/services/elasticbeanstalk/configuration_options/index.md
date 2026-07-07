--- 
title: configuration_options
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_options
  - elasticbeanstalk
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>configuration_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.configuration_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_configuration_options"
    values={[
        { label: 'describe_configuration_options', value: 'describe_configuration_options' }
    ]}
>
<TabItem value="describe_configuration_options">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="ChangeSeverity" /></td>
    <td><code>string</code></td>
    <td>An indication of which action is required if the value for this configuration option changes: NoInterruption : There is no interruption to the environment or application availability. RestartEnvironment : The environment is entirely restarted, all AWS resources are deleted and recreated, and the environment is unavailable during the process. RestartApplicationServer : The environment is available the entire time. However, a short application outage occurs when the application servers on the running Amazon EC2 instances are restarted.</td>
</tr>
<tr>
    <td><CopyableCode code="DefaultValue" /></td>
    <td><code>string</code></td>
    <td>The default value for this configuration option.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxLength" /></td>
    <td><code>integer</code></td>
    <td>If specified, the configuration option must be a string value no longer than this value.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxValue" /></td>
    <td><code>integer</code></td>
    <td>If specified, the configuration option must be a numeric value less than this value.</td>
</tr>
<tr>
    <td><CopyableCode code="MinValue" /></td>
    <td><code>integer</code></td>
    <td>If specified, the configuration option must be a numeric value greater than this value.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration option.</td>
</tr>
<tr>
    <td><CopyableCode code="Namespace" /></td>
    <td><code>string</code></td>
    <td>A unique namespace identifying the option's associated AWS resource.</td>
</tr>
<tr>
    <td><CopyableCode code="Regex" /></td>
    <td><code>string</code></td>
    <td>If specified, the configuration option must be a string value that satisfies this regular expression.</td>
</tr>
<tr>
    <td><CopyableCode code="UserDefined" /></td>
    <td><code>boolean</code></td>
    <td>An indication of whether the user defined this configuration option: true : This configuration option was defined by the user. It is a valid choice for specifying if this as an Option to Remove when updating configuration settings. false : This configuration was not defined by the user. Constraint: You can remove only UserDefined options from a configuration. Valid Values: true | false</td>
</tr>
<tr>
    <td><CopyableCode code="ValueOptions" /></td>
    <td><code>string</code></td>
    <td>If specified, values for the configuration option are selected from this list.</td>
</tr>
<tr>
    <td><CopyableCode code="ValueType" /></td>
    <td><code>string</code></td>
    <td>An indication of which type of values this option has and whether it is allowable to select one or more than one of the possible values: Scalar : Values for this option are a single selection from the possible values, or an unformatted string, or numeric value governed by the MIN/MAX/Regex constraints. List : Values for this option are multiple selections from the possible values. Boolean : Values for this option are either true or false . Json : Values for this option are a JSON representation of a ConfigDocument.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_configuration_options"><CopyableCode code="describe_configuration_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a>, <a href="#parameter-SolutionStackName"><code>SolutionStackName</code></a>, <a href="#parameter-PlatformArn"><code>PlatformArn</code></a>, <a href="#parameter-Options"><code>Options</code></a></td>
    <td>Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ApplicationName">
    <td><CopyableCode code="ApplicationName" /></td>
    <td><code>string</code></td>
    <td>The name of the application associated with the configuration template or environment. Only needed if you want to describe the configuration options associated with either the configuration template or environment.</td>
</tr>
<tr id="parameter-EnvironmentName">
    <td><CopyableCode code="EnvironmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the environment whose configuration options you want to describe.</td>
</tr>
<tr id="parameter-Options">
    <td><CopyableCode code="Options" /></td>
    <td><code>array</code></td>
    <td>If specified, restricts the descriptions to only the specified options.</td>
</tr>
<tr id="parameter-PlatformArn">
    <td><CopyableCode code="PlatformArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the custom platform.</td>
</tr>
<tr id="parameter-SolutionStackName">
    <td><CopyableCode code="SolutionStackName" /></td>
    <td><code>string</code></td>
    <td>The name of the solution stack whose configuration options you want to describe.</td>
</tr>
<tr id="parameter-TemplateName">
    <td><CopyableCode code="TemplateName" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration template whose configuration options you want to describe.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_configuration_options"
    values={[
        { label: 'describe_configuration_options', value: 'describe_configuration_options' }
    ]}
>
<TabItem value="describe_configuration_options">

Describes the configuration options that are used in a particular configuration template or environment, or that a specified solution stack defines. The description includes the values the options, their default values, and an indication of the required action on a running environment if an option value is changed.

```sql
SELECT
ChangeSeverity,
DefaultValue,
MaxLength,
MaxValue,
MinValue,
Name,
Namespace,
Regex,
UserDefined,
ValueOptions,
ValueType
FROM aws.elasticbeanstalk.configuration_options
WHERE region = '{{ region }}' -- required
AND ApplicationName = '{{ ApplicationName }}'
AND TemplateName = '{{ TemplateName }}'
AND EnvironmentName = '{{ EnvironmentName }}'
AND SolutionStackName = '{{ SolutionStackName }}'
AND PlatformArn = '{{ PlatformArn }}'
AND Options = '{{ Options }}'
;
```
</TabItem>
</Tabs>
