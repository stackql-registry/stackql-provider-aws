--- 
title: data_source_sync_jobs
hide_title: false
hide_table_of_contents: false
keywords:
  - data_source_sync_jobs
  - kendra
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

Creates, updates, deletes, gets or lists a <code>data_source_sync_jobs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_source_sync_jobs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kendra.data_source_sync_jobs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_data_source_sync_jobs"
    values={[
        { label: 'list_data_source_sync_jobs', value: 'list_data_source_sync_jobs' }
    ]}
>
<TabItem value="list_data_source_sync_jobs">

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
    <td><CopyableCode code="History" /></td>
    <td><code>array</code></td>
    <td>A history of synchronization jobs for the data source connector.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>If the response is truncated, Amazon Kendra returns this token that you can use in the subsequent request to retrieve the next set of jobs.</td>
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
    <td><a href="#list_data_source_sync_jobs"><CopyableCode code="list_data_source_sync_jobs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets statistics about synchronizing a data source connector.</td>
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
    defaultValue="list_data_source_sync_jobs"
    values={[
        { label: 'list_data_source_sync_jobs', value: 'list_data_source_sync_jobs' }
    ]}
>
<TabItem value="list_data_source_sync_jobs">

Gets statistics about synchronizing a data source connector.

```sql
SELECT
History,
NextToken
FROM aws.kendra.data_source_sync_jobs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
