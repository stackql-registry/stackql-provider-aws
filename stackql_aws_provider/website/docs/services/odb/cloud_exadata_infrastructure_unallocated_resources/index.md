--- 
title: cloud_exadata_infrastructure_unallocated_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - cloud_exadata_infrastructure_unallocated_resources
  - odb
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

Creates, updates, deletes, gets or lists a <code>cloud_exadata_infrastructure_unallocated_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cloud_exadata_infrastructure_unallocated_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.odb.cloud_exadata_infrastructure_unallocated_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_cloud_exadata_infrastructure_unallocated_resources"
    values={[
        { label: 'get_cloud_exadata_infrastructure_unallocated_resources', value: 'get_cloud_exadata_infrastructure_unallocated_resources' }
    ]}
>
<TabItem value="get_cloud_exadata_infrastructure_unallocated_resources">

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
    <td><CopyableCode code="cloud_autonomous_vm_clusters" /></td>
    <td><code>array</code></td>
    <td>A list of Autonomous VM clusters associated with this Cloud Exadata Infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_exadata_infrastructure_display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the Cloud Exadata infrastructure.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_exadata_infrastructure_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Cloud Exadata infrastructure. (pattern: &lt;code&gt;(arn:(?:aws|aws-cn|aws-us-gov|aws-iso-&#123;0,1&#125;&#91;a-z&#93;&#123;0,1&#125;):&#91;a-z0-9-&#93;+:&#91;a-z0-9-&#93;*:&#91;0-9&#93;+:&#91;a-z0-9-&#93;+/&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;|&#91;a-zA-Z0-9_~.-&#93;&#123;6,64&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="exadata_storage_in_tbs" /></td>
    <td><code>number (double)</code></td>
    <td>The amount of unallocated Exadata storage available, in terabytes (TB).</td>
</tr>
<tr>
    <td><CopyableCode code="local_storage_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of unallocated local storage available, in gigabytes (GB).</td>
</tr>
<tr>
    <td><CopyableCode code="memory_in_gbs" /></td>
    <td><code>integer</code></td>
    <td>The amount of unallocated memory available, in gigabytes (GB).</td>
</tr>
<tr>
    <td><CopyableCode code="ocpus" /></td>
    <td><code>integer</code></td>
    <td>The number of unallocated Oracle CPU Units (OCPUs) available.</td>
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
    <td><a href="#get_cloud_exadata_infrastructure_unallocated_resources"><CopyableCode code="get_cloud_exadata_infrastructure_unallocated_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about unallocated resources in a specified Cloud Exadata Infrastructure.</td>
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
    defaultValue="get_cloud_exadata_infrastructure_unallocated_resources"
    values={[
        { label: 'get_cloud_exadata_infrastructure_unallocated_resources', value: 'get_cloud_exadata_infrastructure_unallocated_resources' }
    ]}
>
<TabItem value="get_cloud_exadata_infrastructure_unallocated_resources">

Retrieves information about unallocated resources in a specified Cloud Exadata Infrastructure.

```sql
SELECT
cloud_autonomous_vm_clusters,
cloud_exadata_infrastructure_display_name,
cloud_exadata_infrastructure_id,
exadata_storage_in_tbs,
local_storage_in_gbs,
memory_in_gbs,
ocpus
FROM aws.odb.cloud_exadata_infrastructure_unallocated_resources
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
