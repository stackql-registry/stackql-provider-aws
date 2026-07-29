--- 
title: logging_options
hide_title: false
hide_table_of_contents: false
keywords:
  - logging_options
  - iotevents
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotevents.logging_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_logging_options"
    values={[
        { label: 'describe_logging_options', value: 'describe_logging_options' }
    ]}
>
<TabItem value="describe_logging_options">

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
    <td><CopyableCode code="detector_debug_options" /></td>
    <td><code>array</code></td>
    <td>Information that identifies those detector models and their detectors (instances) for which the logging level is given.</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>If TRUE, logging is enabled for AWS IoT Events.</td>
</tr>
<tr>
    <td><CopyableCode code="level" /></td>
    <td><code>string</code></td>
    <td>The logging level. (ERROR, INFO, DEBUG)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the role that grants permission to AWS IoT Events to perform logging.</td>
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
    <td><a href="#describe_logging_options"><CopyableCode code="describe_logging_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current settings of the AWS IoT Events logging options.</td>
</tr>
<tr>
    <td><a href="#put_logging_options"><CopyableCode code="put_logging_options" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-loggingOptions"><code>loggingOptions</code></a></td>
    <td></td>
    <td>Sets or updates the AWS IoT Events logging options. If you update the value of any loggingOptions field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the roleArn field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</td>
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
    defaultValue="describe_logging_options"
    values={[
        { label: 'describe_logging_options', value: 'describe_logging_options' }
    ]}
>
<TabItem value="describe_logging_options">

Retrieves the current settings of the AWS IoT Events logging options.

```sql
SELECT
detector_debug_options,
enabled,
level,
role_arn
FROM aws.iotevents.logging_options
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_logging_options"
    values={[
        { label: 'put_logging_options', value: 'put_logging_options' }
    ]}
>
<TabItem value="put_logging_options">

Sets or updates the AWS IoT Events logging options. If you update the value of any loggingOptions field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the roleArn field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.

```sql
REPLACE aws.iotevents.logging_options
SET 
loggingOptions = '{{ loggingOptions }}'
WHERE 
region = '{{ region }}' --required
AND loggingOptions = '{{ loggingOptions }}' --required;
```
</TabItem>
</Tabs>
