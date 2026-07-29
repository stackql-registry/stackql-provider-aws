--- 
title: workloads
hide_title: false
hide_table_of_contents: false
keywords:
  - workloads
  - launch_wizard
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

Creates, updates, deletes, gets or lists a <code>workloads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workloads" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.launch_wizard.workloads" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workload"
    values={[
        { label: 'get_workload', value: 'get_workload' },
        { label: 'list_workloads', value: 'list_workloads' }
    ]}
>
<TabItem value="get_workload">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of a workload.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of a workload.</td>
</tr>
<tr>
    <td><CopyableCode code="documentation_url" /></td>
    <td><code>string</code></td>
    <td>The URL of a workload document.</td>
</tr>
<tr>
    <td><CopyableCode code="icon_url" /></td>
    <td><code>string</code></td>
    <td>The URL of a workload icon.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a workload. You can list deployments in the DISABLED status. (ACTIVE, INACTIVE, DISABLED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The message about a workload's status.</td>
</tr>
<tr>
    <td><CopyableCode code="workload_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workload. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workloads">

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
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the workload data.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the workload. (ACTIVE, INACTIVE, DISABLED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="workload_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workload. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_workload"><CopyableCode code="get_workload" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a workload.</td>
</tr>
<tr>
    <td><a href="#list_workloads"><CopyableCode code="list_workloads" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the available workload names. You can use the ListWorkloadDeploymentPatterns operation to discover the available deployment patterns for a given workload.</td>
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
    defaultValue="get_workload"
    values={[
        { label: 'get_workload', value: 'get_workload' },
        { label: 'list_workloads', value: 'list_workloads' }
    ]}
>
<TabItem value="get_workload">

Returns information about a workload.

```sql
SELECT
description,
display_name,
documentation_url,
icon_url,
status,
status_message,
workload_name
FROM aws.launch_wizard.workloads
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workloads">

Lists the available workload names. You can use the ListWorkloadDeploymentPatterns operation to discover the available deployment patterns for a given workload.

```sql
SELECT
display_name,
status,
workload_name
FROM aws.launch_wizard.workloads
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
