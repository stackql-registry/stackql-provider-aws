--- 
title: document_paths
hide_title: false
hide_table_of_contents: false
keywords:
  - document_paths
  - workdocs
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

Creates, updates, deletes, gets or lists a <code>document_paths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="document_paths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workdocs.document_paths" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_document_path"
    values={[
        { label: 'get_document_path', value: 'get_document_path' }
    ]}
>
<TabItem value="get_document_path">

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
    <td><CopyableCode code="Components" /></td>
    <td><code>array</code></td>
    <td>The components of the resource path.</td>
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
    <td><a href="#get_document_path"><CopyableCode code="get_document_path" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Authentication"><code>Authentication</code></a>, <a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-fields"><code>fields</code></a>, <a href="#parameter-marker"><code>marker</code></a></td>
    <td>Retrieves the path information (the hierarchy from the root folder) for the requested document. By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested document and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the names of the parent folders.</td>
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
<tr id="parameter-document_id">
    <td><CopyableCode code="document_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the document.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Authentication">
    <td><CopyableCode code="Authentication" /></td>
    <td><code>string</code></td>
    <td>Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API.</td>
</tr>
<tr id="parameter-fields">
    <td><CopyableCode code="fields" /></td>
    <td><code>string</code></td>
    <td>A comma-separated list of values. Specify NAME to include the names of the parent folders.</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of levels in the hierarchy to return.</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>This value is not supported.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_document_path"
    values={[
        { label: 'get_document_path', value: 'get_document_path' }
    ]}
>
<TabItem value="get_document_path">

Retrieves the path information (the hierarchy from the root folder) for the requested document. By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested document and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the names of the parent folders.

```sql
SELECT
Components
FROM aws.workdocs.document_paths
WHERE document_id = '{{ document_id }}' -- required
AND region = '{{ region }}' -- required
AND Authentication = '{{ Authentication }}'
AND limit = '{{ limit }}'
AND fields = '{{ fields }}'
AND marker = '{{ marker }}'
;
```
</TabItem>
</Tabs>
