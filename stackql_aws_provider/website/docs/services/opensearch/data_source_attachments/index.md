--- 
title: data_source_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - data_source_attachments
  - opensearch
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

Creates, updates, deletes, gets or lists a <code>data_source_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_source_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearch.data_source_attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_source_attachment"
    values={[
        { label: 'describe_data_source_attachment', value: 'describe_data_source_attachment' },
        { label: 'list_data_source_attachments', value: 'list_data_source_attachments' }
    ]}
>
<TabItem value="describe_data_source_attachment">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the OpenSearch application. (pattern: &lt;code&gt;&#91;a-z0-9&#93;&#123;3,30&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the domain. See Identifiers for IAM Entities in Using Amazon Web Services Identity and Access Management for more information. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="attachment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier assigned to the data source attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="data_source_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the domain. See Identifiers for IAM Entities in Using Amazon Web Services Identity and Access Management for more information. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the data source attachment. Valid values are PENDING, ATTACHED, and FAILED. (PENDING, ATTACHED, FAILED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_source_attachments">

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
    <td><CopyableCode code="attachments" /></td>
    <td><code>array</code></td>
    <td>A list of data source attachment summaries for the specified application.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token to use in a subsequent call to retrieve the next set of results.</td>
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
    <td><a href="#describe_data_source_attachment"><CopyableCode code="describe_data_source_attachment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current status and details of a specific data source attachment for an OpenSearch application. Throws a ResourceNotFoundException if no attachment record exists for the specified application and data source combination.</td>
</tr>
<tr>
    <td><a href="#list_data_source_attachments"><CopyableCode code="list_data_source_attachments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of all data source attachments for an OpenSearch application, including attachments in all states (PENDING, ATTACHED, and FAILED).</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier or name of the OpenSearch application to list attachments for.</td>
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
    defaultValue="describe_data_source_attachment"
    values={[
        { label: 'describe_data_source_attachment', value: 'describe_data_source_attachment' },
        { label: 'list_data_source_attachments', value: 'list_data_source_attachments' }
    ]}
>
<TabItem value="describe_data_source_attachment">

Returns the current status and details of a specific data source attachment for an OpenSearch application. Throws a ResourceNotFoundException if no attachment record exists for the specified application and data source combination.

```sql
SELECT
id,
arn,
attachment_id,
data_source_arn,
status
FROM aws.opensearch.data_source_attachments
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_source_attachments">

Returns a paginated list of all data source attachments for an OpenSearch application, including attachments in all states (PENDING, ATTACHED, and FAILED).

```sql
SELECT
attachments,
next_token
FROM aws.opensearch.data_source_attachments
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
