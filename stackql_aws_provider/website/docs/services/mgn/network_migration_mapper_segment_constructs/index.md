--- 
title: network_migration_mapper_segment_constructs
hide_title: false
hide_table_of_contents: false
keywords:
  - network_migration_mapper_segment_constructs
  - mgn
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

Creates, updates, deletes, gets or lists a <code>network_migration_mapper_segment_constructs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="network_migration_mapper_segment_constructs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.network_migration_mapper_segment_constructs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_network_migration_mapper_segment_construct"
    values={[
        { label: 'get_network_migration_mapper_segment_construct', value: 'get_network_migration_mapper_segment_construct' },
        { label: 'list_network_migration_mapper_segment_constructs', value: 'list_network_migration_mapper_segment_constructs' }
    ]}
>
<TabItem value="get_network_migration_mapper_segment_construct">

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
    <td>The name of the construct. (pattern: &lt;code&gt;&#91;^\s\x00&#93;( *&#91;^\s\x00&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="construct_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the construct. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="construct_type" /></td>
    <td><code>string</code></td>
    <td>The type of the construct, such as VPC, subnet, security group, or route table. (pattern: &lt;code&gt;AWS::(&#91;A-Z\d&#93;)&#123;2,10&#125;::&#91;a-zA-Z\d&#93;&#123;2,30&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the construct was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the construct. (pattern: &lt;code&gt;&#91;^\x00&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="excluded" /></td>
    <td><code>boolean</code></td>
    <td>Whether this construct is excluded from the migration.</td>
</tr>
<tr>
    <td><CopyableCode code="logical_id" /></td>
    <td><code>string</code></td>
    <td>The logical identifier for the construct in the infrastructure code. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="properties_" /></td>
    <td><code>object</code></td>
    <td>The properties and configuration of the construct.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the construct was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_network_migration_mapper_segment_constructs">

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
    <td>The name of the construct. (pattern: &lt;code&gt;&#91;^\s\x00&#93;( *&#91;^\s\x00&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="construct_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the construct. (pattern: &lt;code&gt;&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="construct_type" /></td>
    <td><code>string</code></td>
    <td>The type of the construct, such as VPC, subnet, security group, or route table. (pattern: &lt;code&gt;AWS::(&#91;A-Z\d&#93;)&#123;2,10&#125;::&#91;a-zA-Z\d&#93;&#123;2,30&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the construct was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the construct. (pattern: &lt;code&gt;&#91;^\x00&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="excluded" /></td>
    <td><code>boolean</code></td>
    <td>Whether this construct is excluded from the migration.</td>
</tr>
<tr>
    <td><CopyableCode code="logical_id" /></td>
    <td><code>string</code></td>
    <td>The logical identifier for the construct in the infrastructure code. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="properties_" /></td>
    <td><code>object</code></td>
    <td>The properties and configuration of the construct.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the construct was last updated.</td>
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
    <td><a href="#get_network_migration_mapper_segment_construct"><CopyableCode code="get_network_migration_mapper_segment_construct" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific construct within a mapper segment, including its properties and configuration data.</td>
</tr>
<tr>
    <td><a href="#list_network_migration_mapper_segment_constructs"><CopyableCode code="list_network_migration_mapper_segment_constructs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists constructs within a mapper segment, representing individual infrastructure components like VPCs, subnets, or security groups.</td>
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
    defaultValue="get_network_migration_mapper_segment_construct"
    values={[
        { label: 'get_network_migration_mapper_segment_construct', value: 'get_network_migration_mapper_segment_construct' },
        { label: 'list_network_migration_mapper_segment_constructs', value: 'list_network_migration_mapper_segment_constructs' }
    ]}
>
<TabItem value="get_network_migration_mapper_segment_construct">

Retrieves detailed information about a specific construct within a mapper segment, including its properties and configuration data.

```sql
SELECT
name,
construct_id,
construct_type,
created_at,
description,
excluded,
logical_id,
properties_,
updated_at
FROM aws.mgn.network_migration_mapper_segment_constructs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_network_migration_mapper_segment_constructs">

Lists constructs within a mapper segment, representing individual infrastructure components like VPCs, subnets, or security groups.

```sql
SELECT
name,
construct_id,
construct_type,
created_at,
description,
excluded,
logical_id,
properties_,
updated_at
FROM aws.mgn.network_migration_mapper_segment_constructs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
