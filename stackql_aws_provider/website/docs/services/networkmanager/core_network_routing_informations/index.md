--- 
title: core_network_routing_informations
hide_title: false
hide_table_of_contents: false
keywords:
  - core_network_routing_informations
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

Creates, updates, deletes, gets or lists a <code>core_network_routing_informations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="core_network_routing_informations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.core_network_routing_informations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_core_network_routing_information"
    values={[
        { label: 'list_core_network_routing_information', value: 'list_core_network_routing_information' }
    ]}
>
<TabItem value="list_core_network_routing_information">

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
    <td><CopyableCode code="AsPath" /></td>
    <td><code>array</code></td>
    <td>The BGP AS path for the route.</td>
</tr>
<tr>
    <td><CopyableCode code="Communities" /></td>
    <td><code>array</code></td>
    <td>The BGP community values for the route.</td>
</tr>
<tr>
    <td><CopyableCode code="LocalPreference" /></td>
    <td><code>string</code></td>
    <td>The BGP local preference value for the route. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Med" /></td>
    <td><code>string</code></td>
    <td>The BGP Multi-Exit Discriminator (MED) value for the route. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextHop" /></td>
    <td><code>object</code></td>
    <td>The next hop information for the route.</td>
</tr>
<tr>
    <td><CopyableCode code="Prefix" /></td>
    <td><code>string</code></td>
    <td>The IP prefix for the route. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#list_core_network_routing_information"><CopyableCode code="list_core_network_routing_information" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-core_network_id"><code>core_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists routing information for a core network, including routes and their attributes.</td>
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
    <td>The ID of the core network to retrieve routing information for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of routing information entries to return in a single page.</td>
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
    defaultValue="list_core_network_routing_information"
    values={[
        { label: 'list_core_network_routing_information', value: 'list_core_network_routing_information' }
    ]}
>
<TabItem value="list_core_network_routing_information">

Lists routing information for a core network, including routes and their attributes.

```sql
SELECT
AsPath,
Communities,
LocalPreference,
Med,
NextHop,
Prefix
FROM aws.networkmanager.core_network_routing_informations
WHERE core_network_id = '{{ core_network_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
