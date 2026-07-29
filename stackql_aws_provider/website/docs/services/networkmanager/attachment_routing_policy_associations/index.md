--- 
title: attachment_routing_policy_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - attachment_routing_policy_associations
  - networkmanager
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

Creates, updates, deletes, gets or lists an <code>attachment_routing_policy_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attachment_routing_policy_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.attachment_routing_policy_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_attachment_routing_policy_associations"
    values={[
        { label: 'list_attachment_routing_policy_associations', value: 'list_attachment_routing_policy_associations' }
    ]}
>
<TabItem value="list_attachment_routing_policy_associations">

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
    <td><CopyableCode code="associated_routing_policies" /></td>
    <td><code>array</code></td>
    <td>The list of routing policies currently associated with the attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="attachment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment associated with the routing policy. (pattern: &lt;code&gt;^attachment-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pending_routing_policies" /></td>
    <td><code>array</code></td>
    <td>The list of routing policies that are pending association with the attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="routing_policy_label" /></td>
    <td><code>string</code></td>
    <td>The routing policy label associated with the attachment. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_attachment_routing_policy_associations"><CopyableCode code="list_attachment_routing_policy_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-core_network_id"><code>core_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-attachmentId"><code>attachmentId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the routing policy associations for attachments in a core network.</td>
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
<tr id="parameter-core_network_id">
    <td><CopyableCode code="core_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the core network to list attachment routing policy associations for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-attachmentId">
    <td><CopyableCode code="attachmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of a specific attachment to filter the routing policy associations.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_attachment_routing_policy_associations"
    values={[
        { label: 'list_attachment_routing_policy_associations', value: 'list_attachment_routing_policy_associations' }
    ]}
>
<TabItem value="list_attachment_routing_policy_associations">

Lists the routing policy associations for attachments in a core network.

```sql
SELECT
associated_routing_policies,
attachment_id,
pending_routing_policies,
routing_policy_label
FROM aws.networkmanager.attachment_routing_policy_associations
WHERE core_network_id = '{{ core_network_id }}' -- required
AND region = '{{ region }}' -- required
AND attachmentId = '{{ attachmentId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
