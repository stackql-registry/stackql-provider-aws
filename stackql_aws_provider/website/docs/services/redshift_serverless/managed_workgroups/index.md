--- 
title: managed_workgroups
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_workgroups
  - redshift_serverless
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

Creates, updates, deletes, gets or lists a <code>managed_workgroups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_workgroups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_serverless.managed_workgroups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_managed_workgroups"
    values={[
        { label: 'list_managed_workgroups', value: 'list_managed_workgroups' }
    ]}
>
<TabItem value="list_managed_workgroups">

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
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date of the managed workgroup.</td>
</tr>
<tr>
    <td><CopyableCode code="managedWorkgroupId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the managed workgroup.</td>
</tr>
<tr>
    <td><CopyableCode code="managedWorkgroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the managed workgroup. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_:\-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sourceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the managed workgroup in the Glue Data Catalog. (pattern: &lt;code&gt;^arn:aws&#91;a-z-&#93;*:glue:&#91;a-z0-9-&#93;+:\d+:(database|catalog)&#91;a-z0-9-:&#93;*(?:/&#91;A-Za-z0-9-_&#93;&#123;1,255&#125;)*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the managed workgroup. (CREATING, DELETING, MODIFYING, AVAILABLE, NOT_AVAILABLE)</td>
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
    <td><a href="#list_managed_workgroups"><CopyableCode code="list_managed_workgroups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a list of specified managed workgroups in your account.</td>
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
    defaultValue="list_managed_workgroups"
    values={[
        { label: 'list_managed_workgroups', value: 'list_managed_workgroups' }
    ]}
>
<TabItem value="list_managed_workgroups">

Returns information about a list of specified managed workgroups in your account.

```sql
SELECT
creationDate,
managedWorkgroupId,
managedWorkgroupName,
sourceArn,
status
FROM aws.redshift_serverless.managed_workgroups
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
