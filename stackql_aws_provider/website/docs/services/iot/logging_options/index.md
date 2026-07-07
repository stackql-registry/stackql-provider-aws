--- 
title: logging_options
hide_title: false
hide_table_of_contents: false
keywords:
  - logging_options
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

Creates, updates, deletes, gets or lists a <code>logging_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="logging_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.logging_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_logging_options"
    values={[
        { label: 'get_logging_options', value: 'get_logging_options' }
    ]}
>
<TabItem value="get_logging_options">

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
    <td><CopyableCode code="logLevel" /></td>
    <td><code>string</code></td>
    <td>The logging level. (DEBUG, INFO, ERROR, WARN, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that grants access.</td>
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
    <td><a href="#get_logging_options"><CopyableCode code="get_logging_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the logging options. NOTE: use of this command is not recommended. Use GetV2LoggingOptions instead. Requires permission to access the GetLoggingOptions action.</td>
</tr>
<tr>
    <td><a href="#set_logging_options"><CopyableCode code="set_logging_options" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-loggingOptionsPayload"><code>loggingOptionsPayload</code></a></td>
    <td></td>
    <td>Sets the logging options. NOTE: use of this command is not recommended. Use SetV2LoggingOptions instead. Requires permission to access the SetLoggingOptions action.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_logging_options"
    values={[
        { label: 'get_logging_options', value: 'get_logging_options' }
    ]}
>
<TabItem value="get_logging_options">

Gets the logging options. NOTE: use of this command is not recommended. Use GetV2LoggingOptions instead. Requires permission to access the GetLoggingOptions action.

```sql
SELECT
logLevel,
roleArn
FROM aws.iot.logging_options
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_logging_options"
    values={[
        { label: 'set_logging_options', value: 'set_logging_options' }
    ]}
>
<TabItem value="set_logging_options">

Sets the logging options. NOTE: use of this command is not recommended. Use SetV2LoggingOptions instead. Requires permission to access the SetLoggingOptions action.

```sql
UPDATE aws.iot.logging_options
SET 
loggingOptionsPayload = '{{ loggingOptionsPayload }}'
WHERE 
region = '{{ region }}' --required
AND loggingOptionsPayload = '{{ loggingOptionsPayload }}' --required;
```
</TabItem>
</Tabs>
