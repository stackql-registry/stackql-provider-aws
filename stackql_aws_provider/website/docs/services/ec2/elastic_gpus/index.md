--- 
title: elastic_gpus
hide_title: false
hide_table_of_contents: false
keywords:
  - elastic_gpus
  - ec2
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

Creates, updates, deletes, gets or lists an <code>elastic_gpus</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="elastic_gpus" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.elastic_gpus" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_elastic_gpus"
    values={[
        { label: 'describe_elastic_gpus', value: 'describe_elastic_gpus' }
    ]}
>
<TabItem value="describe_elastic_gpus">

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
    <td><CopyableCode code="AvailabilityZone" /></td>
    <td><code>string</code></td>
    <td>The Availability Zone in the which the Elastic Graphics accelerator resides.</td>
</tr>
<tr>
    <td><CopyableCode code="ElasticGpuHealth" /></td>
    <td><code>string</code></td>
    <td>The status of the Elastic Graphics accelerator.</td>
</tr>
<tr>
    <td><CopyableCode code="ElasticGpuId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Elastic Graphics accelerator.</td>
</tr>
<tr>
    <td><CopyableCode code="ElasticGpuState" /></td>
    <td><code>string</code></td>
    <td>The state of the Elastic Graphics accelerator.</td>
</tr>
<tr>
    <td><CopyableCode code="ElasticGpuType" /></td>
    <td><code>string</code></td>
    <td>The type of Elastic Graphics accelerator.</td>
</tr>
<tr>
    <td><CopyableCode code="InstanceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the instance to which the Elastic Graphics accelerator is attached.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The tags assigned to the Elastic Graphics accelerator.</td>
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
    <td><a href="#describe_elastic_gpus"><CopyableCode code="describe_elastic_gpus" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-ElasticGpuId"><code>ElasticGpuId</code></a>, <a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Amazon Elastic Graphics reached end of life on January 8, 2024. Describes the Elastic Graphics accelerator associated with your instances.</td>
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
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-ElasticGpuId">
    <td><CopyableCode code="ElasticGpuId" /></td>
    <td><code>array</code></td>
    <td>The Elastic Graphics accelerator IDs.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. availability-zone - The Availability Zone in which the Elastic Graphics accelerator resides. elastic-gpu-health - The status of the Elastic Graphics accelerator (OK | IMPAIRED). elastic-gpu-state - The state of the Elastic Graphics accelerator (ATTACHED). elastic-gpu-type - The type of Elastic Graphics accelerator; for example, eg1.medium. instance-id - The ID of the instance to which the Elastic Graphics accelerator is associated.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. To retrieve the remaining results, make another call with the returned NextToken value. This value can be between 5 and 1000.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to request the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_elastic_gpus"
    values={[
        { label: 'describe_elastic_gpus', value: 'describe_elastic_gpus' }
    ]}
>
<TabItem value="describe_elastic_gpus">

Amazon Elastic Graphics reached end of life on January 8, 2024. Describes the Elastic Graphics accelerator associated with your instances.

```sql
SELECT
AvailabilityZone,
ElasticGpuHealth,
ElasticGpuId,
ElasticGpuState,
ElasticGpuType,
InstanceId,
Tags
FROM aws.ec2.elastic_gpus
WHERE region = '{{ region }}' -- required
AND ElasticGpuId = '{{ ElasticGpuId }}'
AND DryRun = '{{ DryRun }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>
