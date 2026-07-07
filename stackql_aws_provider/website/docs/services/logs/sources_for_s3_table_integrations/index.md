--- 
title: sources_for_s3_table_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - sources_for_s3_table_integrations
  - logs
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

Creates, updates, deletes, gets or lists a <code>sources_for_s3_table_integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sources_for_s3_table_integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.logs.sources_for_s3_table_integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_sources_for_s3_table_integration"
    values={[
        { label: 'list_sources_for_s3_table_integration', value: 'list_sources_for_s3_table_integration' }
    ]}
>
<TabItem value="list_sources_for_s3_table_integration">

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
    <td><CopyableCode code="createdTimeStamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the data source association was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataSource" /></td>
    <td><code>object</code></td>
    <td>The data source associated with the S3 Table Integration.</td>
</tr>
<tr>
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for this data source association.</td>
</tr>
<tr>
    <td><CopyableCode code="parentSourceIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the parent data source for this association.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the data source association. (ACTIVE, UNHEALTHY, FAILED, DATA_SOURCE_DELETE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the data source association.</td>
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
    <td><a href="#list_sources_for_s3_table_integration"><CopyableCode code="list_sources_for_s3_table_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of data source associations for a specified S3 Table Integration, showing which data sources are currently associated for query access.</td>
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
    defaultValue="list_sources_for_s3_table_integration"
    values={[
        { label: 'list_sources_for_s3_table_integration', value: 'list_sources_for_s3_table_integration' }
    ]}
>
<TabItem value="list_sources_for_s3_table_integration">

Returns a list of data source associations for a specified S3 Table Integration, showing which data sources are currently associated for query access.

```sql
SELECT
createdTimeStamp,
dataSource,
identifier,
parentSourceIdentifier,
status,
statusReason
FROM aws.logs.sources_for_s3_table_integrations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
