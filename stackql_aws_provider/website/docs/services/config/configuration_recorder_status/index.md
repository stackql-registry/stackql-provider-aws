--- 
title: configuration_recorder_status
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_recorder_status
  - config
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

Creates, updates, deletes, gets or lists a <code>configuration_recorder_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_recorder_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.config.configuration_recorder_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_configuration_recorder_status"
    values={[
        { label: 'describe_configuration_recorder_status', value: 'describe_configuration_recorder_status' }
    ]}
>
<TabItem value="describe_configuration_recorder_status">

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
    <td><CopyableCode code="ConfigurationRecordersStatus" /></td>
    <td><code>array</code></td>
    <td>A list that contains status of the specified recorders.</td>
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
    <td><a href="#describe_configuration_recorder_status"><CopyableCode code="describe_configuration_recorder_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current status of the configuration recorder you specify as well as the status of the last recording event for the configuration recorders. For a detailed status of recording events over time, add your Config events to Amazon CloudWatch metrics and use CloudWatch metrics. If a configuration recorder is not specified, this operation returns the status for the customer managed configuration recorder configured for the account, if applicable. When making a request to this operation, you can only specify one configuration recorder.</td>
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
    defaultValue="describe_configuration_recorder_status"
    values={[
        { label: 'describe_configuration_recorder_status', value: 'describe_configuration_recorder_status' }
    ]}
>
<TabItem value="describe_configuration_recorder_status">

Returns the current status of the configuration recorder you specify as well as the status of the last recording event for the configuration recorders. For a detailed status of recording events over time, add your Config events to Amazon CloudWatch metrics and use CloudWatch metrics. If a configuration recorder is not specified, this operation returns the status for the customer managed configuration recorder configured for the account, if applicable. When making a request to this operation, you can only specify one configuration recorder.

```sql
SELECT
ConfigurationRecordersStatus
FROM aws.config.configuration_recorder_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
