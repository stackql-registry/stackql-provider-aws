--- 
title: router_input_source_metadatas
hide_title: false
hide_table_of_contents: false
keywords:
  - router_input_source_metadatas
  - mediaconnect
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

Creates, updates, deletes, gets or lists a <code>router_input_source_metadatas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="router_input_source_metadatas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediaconnect.router_input_source_metadatas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_router_input_source_metadata"
    values={[
        { label: 'get_router_input_source_metadata', value: 'get_router_input_source_metadata' }
    ]}
>
<TabItem value="get_router_input_source_metadata">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the router input. (pattern: &lt;code&gt;arn:(aws&#91;a-zA-Z-&#93;*):mediaconnect:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:routerInput:&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the router input.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceMetadataDetails" /></td>
    <td><code>object</code></td>
    <td>Detailed metadata information about the router input source, including connection state, timestamps, and stream configuration.</td>
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
    <td><a href="#get_router_input_source_metadata"><CopyableCode code="get_router_input_source_metadata" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed metadata information about a specific router input source, including stream details and connection state.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the router input to retrieve metadata for.</td>
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
    defaultValue="get_router_input_source_metadata"
    values={[
        { label: 'get_router_input_source_metadata', value: 'get_router_input_source_metadata' }
    ]}
>
<TabItem value="get_router_input_source_metadata">

Retrieves detailed metadata information about a specific router input source, including stream details and connection state.

```sql
SELECT
Arn,
Name,
SourceMetadataDetails
FROM aws.mediaconnect.router_input_source_metadatas
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
