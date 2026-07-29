--- 
title: blueprint_optimization_status
hide_title: false
hide_table_of_contents: false
keywords:
  - blueprint_optimization_status
  - bedrock_data_automation
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

Creates, updates, deletes, gets or lists a <code>blueprint_optimization_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="blueprint_optimization_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_data_automation.blueprint_optimization_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_blueprint_optimization_status"
    values={[
        { label: 'get_blueprint_optimization_status', value: 'get_blueprint_optimization_status' }
    ]}
>
<TabItem value="get_blueprint_optimization_status">

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
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Error Message.</td>
</tr>
<tr>
    <td><CopyableCode code="error_type" /></td>
    <td><code>string</code></td>
    <td>Error Type.</td>
</tr>
<tr>
    <td><CopyableCode code="output_configuration" /></td>
    <td><code>object</code></td>
    <td>Output configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Job Status. (Created, InProgress, Success, ServiceError, ClientError)</td>
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
    <td><a href="#get_blueprint_optimization_status"><CopyableCode code="get_blueprint_optimization_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-invocation_arn"><code>invocation_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>API used to get blueprint optimization status.</td>
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
<tr id="parameter-invocation_arn">
    <td><CopyableCode code="invocation_arn" /></td>
    <td><code>string</code></td>
    <td>Invocation arn.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_blueprint_optimization_status"
    values={[
        { label: 'get_blueprint_optimization_status', value: 'get_blueprint_optimization_status' }
    ]}
>
<TabItem value="get_blueprint_optimization_status">

API used to get blueprint optimization status.

```sql
SELECT
error_message,
error_type,
output_configuration,
status
FROM aws.bedrock_data_automation.blueprint_optimization_status
WHERE invocation_arn = '{{ invocation_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
