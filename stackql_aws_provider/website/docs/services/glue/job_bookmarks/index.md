--- 
title: job_bookmarks
hide_title: false
hide_table_of_contents: false
keywords:
  - job_bookmarks
  - glue
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

Creates, updates, deletes, gets or lists a <code>job_bookmarks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_bookmarks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.glue.job_bookmarks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_job_bookmark"
    values={[
        { label: 'get_job_bookmark', value: 'get_job_bookmark' }
    ]}
>
<TabItem value="get_job_bookmark">

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
    <td><CopyableCode code="Attempt" /></td>
    <td><code>integer</code></td>
    <td>The attempt ID number.</td>
</tr>
<tr>
    <td><CopyableCode code="JobBookmark" /></td>
    <td><code>string</code></td>
    <td>The bookmark itself.</td>
</tr>
<tr>
    <td><CopyableCode code="JobName" /></td>
    <td><code>string</code></td>
    <td>The name of the job in question.</td>
</tr>
<tr>
    <td><CopyableCode code="PreviousRunId" /></td>
    <td><code>string</code></td>
    <td>The unique run identifier associated with the previous job run.</td>
</tr>
<tr>
    <td><CopyableCode code="Run" /></td>
    <td><code>integer</code></td>
    <td>The run ID number.</td>
</tr>
<tr>
    <td><CopyableCode code="RunId" /></td>
    <td><code>string</code></td>
    <td>The run ID number.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>integer</code></td>
    <td>The version of the job.</td>
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
    <td><a href="#get_job_bookmark"><CopyableCode code="get_job_bookmark" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information on a job bookmark entry. For more information about enabling and using job bookmarks, see: Tracking processed data using job bookmarks Job parameters used by Glue Job structure</td>
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
    defaultValue="get_job_bookmark"
    values={[
        { label: 'get_job_bookmark', value: 'get_job_bookmark' }
    ]}
>
<TabItem value="get_job_bookmark">

Returns information on a job bookmark entry. For more information about enabling and using job bookmarks, see: Tracking processed data using job bookmarks Job parameters used by Glue Job structure

```sql
SELECT
Attempt,
JobBookmark,
JobName,
PreviousRunId,
Run,
RunId,
Version
FROM aws.glue.job_bookmarks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
