--- 
title: schema_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - schema_versions
  - iot_managed_integrations
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.schema_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_schema_version"
    values={[
        { label: 'get_schema_version', value: 'get_schema_version' },
        { label: 'list_schema_versions', value: 'list_schema_versions' }
    ]}
>
<TabItem value="get_schema_version">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the schema version. (pattern: &lt;code&gt;&#91;a-zA-Z0-9.,/ -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The name of the schema version. (pattern: &lt;code&gt;&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td>The schema of the schema version.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_id" /></td>
    <td><code>string</code></td>
    <td>The id of the schema version. (pattern: &lt;code&gt;&#91;a-zA-Z0-9.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="semantic_version" /></td>
    <td><code>string</code></td>
    <td>The schema version. If this is left blank, it defaults to the latest version. (pattern: &lt;code&gt;(\d+\.\d+(\.\d+)?|\$latest)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of schema version. (capability, definition)</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>The visibility of the schema version. (PUBLIC, PRIVATE)</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the schema version. (pattern: &lt;code&gt;&#91;a-zA-Z0-9.,/ -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The name of the schema version. (pattern: &lt;code&gt;&#91;a-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the schema version. (pattern: &lt;code&gt;&#91;a-zA-Z0-9.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="semantic_version" /></td>
    <td><code>string</code></td>
    <td>The schema version. If this is left blank, it defaults to the latest version. (pattern: &lt;code&gt;(\d+\.\d+(\.\d+)?|\$latest)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of schema version. (capability, definition)</td>
</tr>
<tr>
    <td><CopyableCode code="visibility" /></td>
    <td><code>string</code></td>
    <td>The visibility of the schema version. (PUBLIC, PRIVATE)</td>
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
    <td><a href="#get_schema_version"><CopyableCode code="get_schema_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-schema_versioned_id"><code>schema_versioned_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Format"><code>Format</code></a></td>
    <td>Gets a schema version with the provided information.</td>
</tr>
<tr>
    <td><a href="#list_schema_versions"><CopyableCode code="list_schema_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-SchemaIdFilter"><code>SchemaIdFilter</code></a>, <a href="#parameter-NamespaceFilter"><code>NamespaceFilter</code></a>, <a href="#parameter-VisibilityFilter"><code>VisibilityFilter</code></a>, <a href="#parameter-SemanticVersionFilter"><code>SemanticVersionFilter</code></a></td>
    <td>Lists schema versions with the provided information.</td>
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
<tr id="parameter-schema_versioned_id">
    <td><CopyableCode code="schema_versioned_id" /></td>
    <td><code>string</code></td>
    <td>Schema id with a version specified. If the version is missing, it defaults to latest version.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Filter on the type of schema version.</td>
</tr>
<tr id="parameter-Format">
    <td><CopyableCode code="Format" /></td>
    <td><code>string</code></td>
    <td>The format of the schema version.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time.</td>
</tr>
<tr id="parameter-NamespaceFilter">
    <td><CopyableCode code="NamespaceFilter" /></td>
    <td><code>string</code></td>
    <td>Filter on the name of the schema version.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token that can be used to retrieve the next set of results.</td>
</tr>
<tr id="parameter-SchemaIdFilter">
    <td><CopyableCode code="SchemaIdFilter" /></td>
    <td><code>string</code></td>
    <td>Filter on the id of the schema version.</td>
</tr>
<tr id="parameter-SemanticVersionFilter">
    <td><CopyableCode code="SemanticVersionFilter" /></td>
    <td><code>string</code></td>
    <td>The schema version. If this is left blank, it defaults to the latest version.</td>
</tr>
<tr id="parameter-VisibilityFilter">
    <td><CopyableCode code="VisibilityFilter" /></td>
    <td><code>string</code></td>
    <td>The visibility of the schema version.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_schema_version"
    values={[
        { label: 'get_schema_version', value: 'get_schema_version' },
        { label: 'list_schema_versions', value: 'list_schema_versions' }
    ]}
>
<TabItem value="get_schema_version">

Gets a schema version with the provided information.

```sql
SELECT
description,
namespace,
schema,
schema_id,
semantic_version,
type,
visibility
FROM aws.iot_managed_integrations.schema_versions
WHERE type = '{{ type }}' -- required
AND schema_versioned_id = '{{ schema_versioned_id }}' -- required
AND region = '{{ region }}' -- required
AND Format = '{{ Format }}'
;
```
</TabItem>
<TabItem value="list_schema_versions">

Lists schema versions with the provided information.

```sql
SELECT
description,
namespace,
schema_id,
semantic_version,
type,
visibility
FROM aws.iot_managed_integrations.schema_versions
WHERE type = '{{ type }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
AND SchemaIdFilter = '{{ SchemaIdFilter }}'
AND NamespaceFilter = '{{ NamespaceFilter }}'
AND VisibilityFilter = '{{ VisibilityFilter }}'
AND SemanticVersionFilter = '{{ SemanticVersionFilter }}'
;
```
</TabItem>
</Tabs>
