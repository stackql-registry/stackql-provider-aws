--- 
title: environment_status
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_status
  - cloud9
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

Creates, updates, deletes, gets or lists an <code>environment_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloud9.environment_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_environment_status"
    values={[
        { label: 'describe_environment_status', value: 'describe_environment_status' }
    ]}
>
<TabItem value="describe_environment_status">

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
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Any informational message about the status of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the environment. Available values include: connecting: The environment is connecting. creating: The environment is being created. deleting: The environment is being deleted. error: The environment is in an error state. ready: The environment is ready. stopped: The environment is stopped. stopping: The environment is stopping. (error, creating, connecting, ready, stopping, stopped, deleting)</td>
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
    <td><a href="#describe_environment_status"><CopyableCode code="describe_environment_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets status information for an Cloud9 development environment. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"</td>
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
    defaultValue="describe_environment_status"
    values={[
        { label: 'describe_environment_status', value: 'describe_environment_status' }
    ]}
>
<TabItem value="describe_environment_status">

Gets status information for an Cloud9 development environment. Cloud9 is no longer available to new customers. Existing customers of Cloud9 can continue to use the service as normal. Learn more"

```sql
SELECT
message,
status
FROM aws.cloud9.environment_status
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
