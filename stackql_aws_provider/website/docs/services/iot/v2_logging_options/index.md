--- 
title: v2_logging_options
hide_title: false
hide_table_of_contents: false
keywords:
  - v2_logging_options
  - iot
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

Creates, updates, deletes, gets or lists a <code>v2_logging_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="v2_logging_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.v2_logging_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_v2_logging_options"
    values={[
        { label: 'get_v2_logging_options', value: 'get_v2_logging_options' }
    ]}
>
<TabItem value="get_v2_logging_options">

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
    <td><CopyableCode code="defaultLogLevel" /></td>
    <td><code>string</code></td>
    <td>The default log level. (DEBUG, INFO, ERROR, WARN, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="disableAllLogs" /></td>
    <td><code>boolean</code></td>
    <td>Disables all logs.</td>
</tr>
<tr>
    <td><CopyableCode code="eventConfigurations" /></td>
    <td><code>array</code></td>
    <td>The list of event configurations that override account-level logging.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The IAM role ARN IoT uses to write to your CloudWatch logs.</td>
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
    <td><a href="#get_v2_logging_options"><CopyableCode code="get_v2_logging_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-verbose"><code>verbose</code></a></td>
    <td>Gets the fine grained logging options. Requires permission to access the GetV2LoggingOptions action.</td>
</tr>
<tr>
    <td><a href="#set_v2_logging_options"><CopyableCode code="set_v2_logging_options" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sets the logging options for the V2 logging service. Requires permission to access the SetV2LoggingOptions action.</td>
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
<tr id="parameter-verbose">
    <td><CopyableCode code="verbose" /></td>
    <td><code>boolean</code></td>
    <td>The flag is used to get all the event types and their respective configuration that event-based logging supports.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_v2_logging_options"
    values={[
        { label: 'get_v2_logging_options', value: 'get_v2_logging_options' }
    ]}
>
<TabItem value="get_v2_logging_options">

Gets the fine grained logging options. Requires permission to access the GetV2LoggingOptions action.

```sql
SELECT
defaultLogLevel,
disableAllLogs,
eventConfigurations,
roleArn
FROM aws.iot.v2_logging_options
WHERE region = '{{ region }}' -- required
AND verbose = '{{ verbose }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_v2_logging_options"
    values={[
        { label: 'set_v2_logging_options', value: 'set_v2_logging_options' }
    ]}
>
<TabItem value="set_v2_logging_options">

Sets the logging options for the V2 logging service. Requires permission to access the SetV2LoggingOptions action.

```sql
UPDATE aws.iot.v2_logging_options
SET 
roleArn = '{{ roleArn }}',
defaultLogLevel = '{{ defaultLogLevel }}',
disableAllLogs = {{ disableAllLogs }},
eventConfigurations = '{{ eventConfigurations }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
