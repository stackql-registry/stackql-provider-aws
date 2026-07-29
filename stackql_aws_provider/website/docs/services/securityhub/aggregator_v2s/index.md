--- 
title: aggregator_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - aggregator_v2s
  - securityhub
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

Creates, updates, deletes, gets or lists an <code>aggregator_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="aggregator_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.aggregator_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_aggregator_v2"
    values={[
        { label: 'get_aggregator_v2', value: 'get_aggregator_v2' }
    ]}
>
<TabItem value="get_aggregator_v2">

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
    <td><CopyableCode code="aggregation_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where data is aggregated. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aggregator_v2_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Aggregator V2. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="linked_regions" /></td>
    <td><code>array</code></td>
    <td>The list of Regions that are linked to the aggregation Region.</td>
</tr>
<tr>
    <td><CopyableCode code="region_linking_mode" /></td>
    <td><code>string</code></td>
    <td>Determines how Regions are linked to an Aggregator V2. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#get_aggregator_v2"><CopyableCode code="get_aggregator_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aggregator_v2_arn"><code>aggregator_v2_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the configuration of the specified Aggregator V2.</td>
</tr>
<tr>
    <td><a href="#create_aggregator_v2"><CopyableCode code="create_aggregator_v2" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegionLinkingMode"><code>RegionLinkingMode</code></a></td>
    <td></td>
    <td>Enables aggregation across Amazon Web Services Regions.</td>
</tr>
<tr>
    <td><a href="#update_aggregator_v2"><CopyableCode code="update_aggregator_v2" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-aggregator_v2_arn"><code>aggregator_v2_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegionLinkingMode"><code>RegionLinkingMode</code></a></td>
    <td></td>
    <td>Udpates the configuration for the Aggregator V2.</td>
</tr>
<tr>
    <td><a href="#delete_aggregator_v2"><CopyableCode code="delete_aggregator_v2" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aggregator_v2_arn"><code>aggregator_v2_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the Aggregator V2.</td>
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
<tr id="parameter-aggregator_v2_arn">
    <td><CopyableCode code="aggregator_v2_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the Aggregator V2.</td>
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
    defaultValue="get_aggregator_v2"
    values={[
        { label: 'get_aggregator_v2', value: 'get_aggregator_v2' }
    ]}
>
<TabItem value="get_aggregator_v2">

Returns the configuration of the specified Aggregator V2.

```sql
SELECT
aggregation_region,
aggregator_v2_arn,
linked_regions,
region_linking_mode
FROM aws.securityhub.aggregator_v2s
WHERE aggregator_v2_arn = '{{ aggregator_v2_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_aggregator_v2"
    values={[
        { label: 'create_aggregator_v2', value: 'create_aggregator_v2' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_aggregator_v2">

Enables aggregation across Amazon Web Services Regions.

```sql
INSERT INTO aws.securityhub.aggregator_v2s (
RegionLinkingMode,
LinkedRegions,
Tags,
ClientToken,
region
)
SELECT 
'{{ RegionLinkingMode }}' /* required */,
'{{ LinkedRegions }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
aggregation_region,
aggregator_v2_arn,
linked_regions,
region_linking_mode
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: aggregator_v2s
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the aggregator_v2s resource.
    - name: RegionLinkingMode
      value: "{{ RegionLinkingMode }}"
    - name: LinkedRegions
      value:
        - "{{ LinkedRegions }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_aggregator_v2"
    values={[
        { label: 'update_aggregator_v2', value: 'update_aggregator_v2' }
    ]}
>
<TabItem value="update_aggregator_v2">

Udpates the configuration for the Aggregator V2.

```sql
UPDATE aws.securityhub.aggregator_v2s
SET 
RegionLinkingMode = '{{ RegionLinkingMode }}',
LinkedRegions = '{{ LinkedRegions }}'
WHERE 
aggregator_v2_arn = '{{ aggregator_v2_arn }}' --required
AND region = '{{ region }}' --required
AND RegionLinkingMode = '{{ RegionLinkingMode }}' --required
RETURNING
aggregation_region,
aggregator_v2_arn,
linked_regions,
region_linking_mode;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_aggregator_v2"
    values={[
        { label: 'delete_aggregator_v2', value: 'delete_aggregator_v2' }
    ]}
>
<TabItem value="delete_aggregator_v2">

Deletes the Aggregator V2.

```sql
DELETE FROM aws.securityhub.aggregator_v2s
WHERE aggregator_v2_arn = '{{ aggregator_v2_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
