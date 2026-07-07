--- 
title: archive_exports
hide_title: false
hide_table_of_contents: false
keywords:
  - archive_exports
  - mailmanager
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

Creates, updates, deletes, gets or lists an <code>archive_exports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="archive_exports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mailmanager.archive_exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_archive_export"
    values={[
        { label: 'get_archive_export', value: 'get_archive_export' },
        { label: 'list_archive_exports', value: 'list_archive_exports' }
    ]}
>
<TabItem value="get_archive_export">

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
    <td><CopyableCode code="ArchiveId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the archive the email export was performed from. (pattern: &lt;code&gt;a-&#91;\w&#93;&#123;1,64&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ExportDestinationConfiguration" /></td>
    <td><code>object</code></td>
    <td>Where the exported emails are being delivered.</td>
</tr>
<tr>
    <td><CopyableCode code="Filters" /></td>
    <td><code>object</code></td>
    <td>The criteria used to filter emails included in the export.</td>
</tr>
<tr>
    <td><CopyableCode code="FromTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start of the timestamp range the exported emails cover.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of email items included in the export.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>object</code></td>
    <td>The current status of the export job.</td>
</tr>
<tr>
    <td><CopyableCode code="ToTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end of the date range the exported emails cover.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_archive_exports">

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
    <td><CopyableCode code="ExportId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the export job.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>object</code></td>
    <td>The current status of the export job.</td>
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
    <td><a href="#get_archive_export"><CopyableCode code="get_archive_export" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details and current status of a specific email archive export job.</td>
</tr>
<tr>
    <td><a href="#list_archive_exports"><CopyableCode code="list_archive_exports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of email archive export jobs.</td>
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
    defaultValue="get_archive_export"
    values={[
        { label: 'get_archive_export', value: 'get_archive_export' },
        { label: 'list_archive_exports', value: 'list_archive_exports' }
    ]}
>
<TabItem value="get_archive_export">

Retrieves the details and current status of a specific email archive export job.

```sql
SELECT
ArchiveId,
ExportDestinationConfiguration,
Filters,
FromTimestamp,
MaxResults,
Status,
ToTimestamp
FROM aws.mailmanager.archive_exports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_archive_exports">

Returns a list of email archive export jobs.

```sql
SELECT
ExportId,
Status
FROM aws.mailmanager.archive_exports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
