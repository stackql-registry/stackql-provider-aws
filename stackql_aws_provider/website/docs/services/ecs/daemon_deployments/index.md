--- 
title: daemon_deployments
hide_title: false
hide_table_of_contents: false
keywords:
  - daemon_deployments
  - ecs
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

Creates, updates, deletes, gets or lists a <code>daemon_deployments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="daemon_deployments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.daemon_deployments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_daemon_deployments"
    values={[
        { label: 'describe_daemon_deployments', value: 'describe_daemon_deployments' },
        { label: 'list_daemon_deployments', value: 'list_daemon_deployments' }
    ]}
>
<TabItem value="describe_daemon_deployments">

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
    <td><CopyableCode code="daemonDeployments" /></td>
    <td><code>array</code></td>
    <td>The list of daemon deployments.</td>
</tr>
<tr>
    <td><CopyableCode code="failures" /></td>
    <td><code>array</code></td>
    <td>Any failures associated with the call.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_daemon_deployments">

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
    <td><CopyableCode code="daemonDeployments" /></td>
    <td><code>array</code></td>
    <td>The list of daemon deployment summaries.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value to include in a future ListDaemonDeployments request. When the results of a ListDaemonDeployments request exceed maxResults, this value can be used to retrieve the next page of results.</td>
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
    <td><a href="#describe_daemon_deployments"><CopyableCode code="describe_daemon_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes one or more of your daemon deployments. A daemon deployment orchestrates the progressive rollout of daemon task updates across container instances managed by the daemon's capacity providers. Each deployment includes circuit breaker and alarm-based rollback capabilities.</td>
</tr>
<tr>
    <td><a href="#list_daemon_deployments"><CopyableCode code="list_daemon_deployments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of daemon deployments for a specified daemon. You can filter the results by status or creation time.</td>
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
    defaultValue="describe_daemon_deployments"
    values={[
        { label: 'describe_daemon_deployments', value: 'describe_daemon_deployments' },
        { label: 'list_daemon_deployments', value: 'list_daemon_deployments' }
    ]}
>
<TabItem value="describe_daemon_deployments">

Describes one or more of your daemon deployments. A daemon deployment orchestrates the progressive rollout of daemon task updates across container instances managed by the daemon's capacity providers. Each deployment includes circuit breaker and alarm-based rollback capabilities.

```sql
SELECT
daemonDeployments,
failures
FROM aws.ecs.daemon_deployments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_daemon_deployments">

Returns a list of daemon deployments for a specified daemon. You can filter the results by status or creation time.

```sql
SELECT
daemonDeployments,
nextToken
FROM aws.ecs.daemon_deployments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
