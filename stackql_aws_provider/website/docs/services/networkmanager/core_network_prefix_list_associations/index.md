--- 
title: core_network_prefix_list_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - core_network_prefix_list_associations
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

Creates, updates, deletes, gets or lists a <code>core_network_prefix_list_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="core_network_prefix_list_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.core_network_prefix_list_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_core_network_prefix_list_associations"
    values={[
        { label: 'list_core_network_prefix_list_associations', value: 'list_core_network_prefix_list_associations' }
    ]}
>
<TabItem value="list_core_network_prefix_list_associations">

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
    <td><CopyableCode code="core_network_id" /></td>
    <td><code>string</code></td>
    <td>The core network id in the association. (pattern: &lt;code&gt;^core-network-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="prefix_list_alias" /></td>
    <td><code>string</code></td>
    <td>The alias of the prefix list in the association. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="prefix_list_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the prefix list in the association. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_core_network_prefix_list_associations"><CopyableCode code="list_core_network_prefix_list_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-core_network_id"><code>core_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-prefixListArn"><code>prefixListArn</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the prefix list associations for a core network.</td>
</tr>
<tr>
    <td><a href="#create_core_network_prefix_list_association"><CopyableCode code="create_core_network_prefix_list_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CoreNetworkId"><code>CoreNetworkId</code></a>, <a href="#parameter-PrefixListArn"><code>PrefixListArn</code></a>, <a href="#parameter-PrefixListAlias"><code>PrefixListAlias</code></a></td>
    <td></td>
    <td>Creates an association between a core network and a prefix list for routing control.</td>
</tr>
<tr>
    <td><a href="#delete_core_network_prefix_list_association"><CopyableCode code="delete_core_network_prefix_list_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-core_network_id"><code>core_network_id</code></a>, <a href="#parameter-prefix_list_arn"><code>prefix_list_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an association between a core network and a prefix list.</td>
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
    <td>The ID of the core network from which to delete the prefix list association.</td>
</tr>
<tr id="parameter-prefix_list_arn">
    <td><CopyableCode code="prefix_list_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the prefix list to disassociate from the core network.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
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
<tr id="parameter-prefixListArn">
    <td><CopyableCode code="prefixListArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a specific prefix list to filter the associations.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_core_network_prefix_list_associations"
    values={[
        { label: 'list_core_network_prefix_list_associations', value: 'list_core_network_prefix_list_associations' }
    ]}
>
<TabItem value="list_core_network_prefix_list_associations">

Lists the prefix list associations for a core network.

```sql
SELECT
core_network_id,
prefix_list_alias,
prefix_list_arn
FROM aws.networkmanager.core_network_prefix_list_associations
WHERE core_network_id = '{{ core_network_id }}' -- required
AND region = '{{ region }}' -- required
AND prefixListArn = '{{ prefixListArn }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_core_network_prefix_list_association"
    values={[
        { label: 'create_core_network_prefix_list_association', value: 'create_core_network_prefix_list_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_core_network_prefix_list_association">

Creates an association between a core network and a prefix list for routing control.

```sql
INSERT INTO aws.networkmanager.core_network_prefix_list_associations (
CoreNetworkId,
PrefixListArn,
PrefixListAlias,
ClientToken,
region
)
SELECT 
'{{ CoreNetworkId }}' /* required */,
'{{ PrefixListArn }}' /* required */,
'{{ PrefixListAlias }}' /* required */,
'{{ ClientToken }}',
'{{ region }}'
RETURNING
core_network_id,
prefix_list_alias,
prefix_list_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: core_network_prefix_list_associations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the core_network_prefix_list_associations resource.
    - name: CoreNetworkId
      value: "{{ CoreNetworkId }}"
    - name: PrefixListArn
      value: "{{ PrefixListArn }}"
    - name: PrefixListAlias
      value: "{{ PrefixListAlias }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_core_network_prefix_list_association"
    values={[
        { label: 'delete_core_network_prefix_list_association', value: 'delete_core_network_prefix_list_association' }
    ]}
>
<TabItem value="delete_core_network_prefix_list_association">

Deletes an association between a core network and a prefix list.

```sql
DELETE FROM aws.networkmanager.core_network_prefix_list_associations
WHERE core_network_id = '{{ core_network_id }}' --required
AND prefix_list_arn = '{{ prefix_list_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
