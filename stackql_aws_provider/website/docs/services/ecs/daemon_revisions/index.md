--- 
title: daemon_revisions
hide_title: false
hide_table_of_contents: false
keywords:
  - daemon_revisions
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

Creates, updates, deletes, gets or lists a <code>daemon_revisions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="daemon_revisions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.daemon_revisions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_daemon_revisions"
    values={[
        { label: 'describe_daemon_revisions', value: 'describe_daemon_revisions' }
    ]}
>
<TabItem value="describe_daemon_revisions">

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
    <td><CopyableCode code="daemonRevisions" /></td>
    <td><code>array</code></td>
    <td>The list of daemon revisions.</td>
</tr>
<tr>
    <td><CopyableCode code="failures" /></td>
    <td><code>array</code></td>
    <td>Any failures associated with the call.</td>
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
    <td><a href="#describe_daemon_revisions"><CopyableCode code="describe_daemon_revisions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes one or more of your daemon revisions. A daemon revision is a snapshot of a daemon's configuration at the time a deployment was initiated. It captures the daemon task definition, container images, tag propagation, and execute command settings. Daemon revisions are immutable.</td>
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
    defaultValue="describe_daemon_revisions"
    values={[
        { label: 'describe_daemon_revisions', value: 'describe_daemon_revisions' }
    ]}
>
<TabItem value="describe_daemon_revisions">

Describes one or more of your daemon revisions. A daemon revision is a snapshot of a daemon's configuration at the time a deployment was initiated. It captures the daemon task definition, container images, tag propagation, and execute command settings. Daemon revisions are immutable.

```sql
SELECT
daemonRevisions,
failures
FROM aws.ecs.daemon_revisions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
