--- 
title: schema_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - schema_versions
  - schemas
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

Creates, updates, deletes, gets or lists a <code>schema_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="schema_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.schemas.schema_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_schema_versions"
    values={[
        { label: 'list_schema_versions', value: 'list_schema_versions' }
    ]}
>
<TabItem value="list_schema_versions">

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
    <td><CopyableCode code="SchemaArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the schema version.</td>
</tr>
<tr>
    <td><CopyableCode code="SchemaName" /></td>
    <td><code>string</code></td>
    <td>The name of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="SchemaVersion" /></td>
    <td><code>string</code></td>
    <td>The version number of the schema.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type of schema. (OpenApi3, JSONSchemaDraft4)</td>
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
    <td><a href="#list_schema_versions"><CopyableCode code="list_schema_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-schema_name"><code>schema_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Provides a list of the schema versions and related information.</td>
</tr>
<tr>
    <td><a href="#delete_schema_version"><CopyableCode code="delete_schema_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-registry_name"><code>registry_name</code></a>, <a href="#parameter-schema_name"><code>schema_name</code></a>, <a href="#parameter-schema_version"><code>schema_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the schema version definition</td>
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
<tr id="parameter-registry_name">
    <td><CopyableCode code="registry_name" /></td>
    <td><code>string</code></td>
    <td>The name of the registry.</td>
</tr>
<tr id="parameter-schema_name">
    <td><CopyableCode code="schema_name" /></td>
    <td><code>string</code></td>
    <td>The name of the schema.</td>
</tr>
<tr id="parameter-schema_version">
    <td><CopyableCode code="schema_version" /></td>
    <td><code>string</code></td>
    <td>The version number of the schema</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that specifies the next page of results to return. To request the first page, leave NextToken empty. The token will expire in 24 hours, and cannot be shared with other accounts.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_schema_versions"
    values={[
        { label: 'list_schema_versions', value: 'list_schema_versions' }
    ]}
>
<TabItem value="list_schema_versions">

Provides a list of the schema versions and related information.

```sql
SELECT
SchemaArn,
SchemaName,
SchemaVersion,
Type
FROM aws.schemas.schema_versions
WHERE registry_name = '{{ registry_name }}' -- required
AND schema_name = '{{ schema_name }}' -- required
AND region = '{{ region }}' -- required
AND limit = '{{ limit }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_schema_version"
    values={[
        { label: 'delete_schema_version', value: 'delete_schema_version' }
    ]}
>
<TabItem value="delete_schema_version">

Delete the schema version definition

```sql
DELETE FROM aws.schemas.schema_versions
WHERE registry_name = '{{ registry_name }}' --required
AND schema_name = '{{ schema_name }}' --required
AND schema_version = '{{ schema_version }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
