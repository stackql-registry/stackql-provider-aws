--- 
title: discoverable_registry_records
hide_title: false
hide_table_of_contents: false
keywords:
  - discoverable_registry_records
  - agent_registry
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

Creates, updates, deletes, gets or lists a <code>discoverable_registry_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="discoverable_registry_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.agent_registry.discoverable_registry_records" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="search_discoverable_registry_records"
    values={[
        { label: 'search_discoverable_registry_records', value: 'search_discoverable_registry_records' },
        { label: 'batch_get_discoverable_registry_record', value: 'batch_get_discoverable_registry_record' },
        { label: 'list_discoverable_registry_records', value: 'list_discoverable_registry_records' }
    ]}
>
<TabItem value="search_discoverable_registry_records">

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
    <td><CopyableCode code="registry_records" /></td>
    <td><code>array</code></td>
    <td>The registry records that match the search query, ordered by relevance.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="batch_get_discoverable_registry_record">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>The per-record errors for records that could not be retrieved. This list is empty when all requested records were returned.</td>
</tr>
<tr>
    <td><CopyableCode code="registry_records" /></td>
    <td><code>array</code></td>
    <td>The records that were successfully retrieved. Each record correlates to the request by its recordId.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_discoverable_registry_records">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Registry Record name (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_\-\.\/&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp in ISO 8601 date-time format</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the Resource</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Display name for a registry record</td>
</tr>
<tr>
    <td><CopyableCode code="record_arn" /></td>
    <td><code>string</code></td>
    <td>Registry Record Amazon Resource Name (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:agent-registry:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:registry/&#91;a-zA-Z0-9&#93;&#123;12,16&#125;/record/&#91;a-zA-Z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="record_id" /></td>
    <td><code>string</code></td>
    <td>Registry Record unique identifier - 12-character alphanumeric string (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="record_type" /></td>
    <td><code>string</code></td>
    <td>Record type enum for registry record classification (MCP, AGENT, CUSTOM, SKILL)</td>
</tr>
<tr>
    <td><CopyableCode code="record_version" /></td>
    <td><code>string</code></td>
    <td>Version of the registry record (pattern: &lt;code&gt;&#91;a-zA-Z0-9.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registry_arn" /></td>
    <td><code>string</code></td>
    <td>Registry Amazon Resource Name (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:agent-registry:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:registry/&#91;a-zA-Z0-9&#93;&#123;12,16&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Registry record status (DRAFT, PENDING_APPROVAL, APPROVED, REJECTED, DEPRECATED, CREATING, UPDATING, CREATE_FAILED, UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp in ISO 8601 date-time format</td>
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
    <td><a href="#search_discoverable_registry_records"><CopyableCode code="search_discoverable_registry_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches the discoverable registry records in a registry using a natural language query. Returns metadata for the matching records ordered by relevance.</td>
</tr>
<tr>
    <td><a href="#batch_get_discoverable_registry_record"><CopyableCode code="batch_get_discoverable_registry_record" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves multiple discoverable registry records by ID from a single registry. Records that cannot be retrieved are reported individually in the errors list rather than failing the entire request.</td>
</tr>
<tr>
    <td><a href="#list_discoverable_registry_records"><CopyableCode code="list_discoverable_registry_records" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the discoverable registry records in a registry. You can optionally filter and paginate the results.</td>
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
<tr id="parameter-registry_id">
    <td><CopyableCode code="registry_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="search_discoverable_registry_records"
    values={[
        { label: 'search_discoverable_registry_records', value: 'search_discoverable_registry_records' },
        { label: 'batch_get_discoverable_registry_record', value: 'batch_get_discoverable_registry_record' },
        { label: 'list_discoverable_registry_records', value: 'list_discoverable_registry_records' }
    ]}
>
<TabItem value="search_discoverable_registry_records">

Searches the discoverable registry records in a registry using a natural language query. Returns metadata for the matching records ordered by relevance.

```sql
SELECT
registry_records
FROM aws.agent_registry.discoverable_registry_records
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="batch_get_discoverable_registry_record">

Retrieves multiple discoverable registry records by ID from a single registry. Records that cannot be retrieved are reported individually in the errors list rather than failing the entire request.

```sql
SELECT
errors,
registry_records
FROM aws.agent_registry.discoverable_registry_records
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_discoverable_registry_records">

Lists the discoverable registry records in a registry. You can optionally filter and paginate the results.

```sql
SELECT
name,
created_at,
description,
display_name,
record_arn,
record_id,
record_type,
record_version,
registry_arn,
status,
updated_at
FROM aws.agent_registry.discoverable_registry_records
WHERE registry_id = '{{ registry_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
