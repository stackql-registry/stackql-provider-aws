--- 
title: managed_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_resources
  - arc_zonal_shift
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

Creates, updates, deletes, gets or lists a <code>managed_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.arc_zonal_shift.managed_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_managed_resource"
    values={[
        { label: 'get_managed_resource', value: 'get_managed_resource' },
        { label: 'list_managed_resources', value: 'list_managed_resources' }
    ]}
>
<TabItem value="get_managed_resource">

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
    <td>The name of the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="applied_weights" /></td>
    <td><code>object</code></td>
    <td>A collection of key-value pairs that indicate whether resources are active in Availability Zones or not. The key name is the Availability Zone where the resource is deployed. The value is 1 or 0.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the resource. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="autoshifts" /></td>
    <td><code>array</code></td>
    <td>An array of the autoshifts that are active for the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="practice_run_configuration" /></td>
    <td><code>object</code></td>
    <td>The practice run configuration for zonal autoshift that's associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="zonal_autoshift_status" /></td>
    <td><code>string</code></td>
    <td>The status for zonal autoshift for a resource. When the autoshift status is ENABLED, Amazon Web Services shifts traffic for a resource away from an Availability Zone, on your behalf, when Amazon Web Services determines that there's an issue in the Availability Zone that could potentially affect customers. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="zonal_shifts" /></td>
    <td><code>array</code></td>
    <td>The zonal shifts that are currently active for a resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_managed_resources">

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
    <td>The name of the managed resource.</td>
</tr>
<tr>
    <td><CopyableCode code="applied_weights" /></td>
    <td><code>object</code></td>
    <td>A collection of key-value pairs that indicate whether resources are active in Availability Zones or not. The key name is the Availability Zone where the resource is deployed. The value is 1 or 0.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the managed resource. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="autoshifts" /></td>
    <td><code>array</code></td>
    <td>An array of the autoshifts that have been completed for a resource.</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>array</code></td>
    <td>The Availability Zones that a resource is deployed in.</td>
</tr>
<tr>
    <td><CopyableCode code="practice_run_status" /></td>
    <td><code>string</code></td>
    <td>This status tracks whether a practice run configuration exists for a resource. When you configure a practice run for a resource so that a practice run configuration exists, ARC sets this value to ENABLED. If a you have not configured a practice run for the resource, or delete a practice run configuration, ARC sets the value to DISABLED. ARC updates this status; you can't set a practice run status to ENABLED or DISABLED. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="zonal_autoshift_status" /></td>
    <td><code>string</code></td>
    <td>The status of autoshift for a resource. When you configure zonal autoshift for a resource, you can set the value of the status to ENABLED or DISABLED. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="zonal_shifts" /></td>
    <td><code>array</code></td>
    <td>An array of the zonal shifts for a resource.</td>
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
    <td><a href="#get_managed_resource"><CopyableCode code="get_managed_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_identifier"><code>resource_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get information about a resource that's been registered for zonal shifts with Amazon Application Recovery Controller in this Amazon Web Services Region. Resources that are registered for zonal shifts are managed resources in ARC. You can start zonal shifts and configure zonal autoshift for managed resources.</td>
</tr>
<tr>
    <td><a href="#list_managed_resources"><CopyableCode code="list_managed_resources" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all the resources in your Amazon Web Services account in this Amazon Web Services Region that are managed for zonal shifts in Amazon Application Recovery Controller, and information about them. The information includes the zonal autoshift status for the resource, as well as the Amazon Resource Name (ARN), the Availability Zones that each resource is deployed in, and the resource name.</td>
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
<tr id="parameter-resource_identifier">
    <td><CopyableCode code="resource_identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier for the resource that Amazon Web Services shifts traffic for. The identifier is the Amazon Resource Name (ARN) for the resource. Amazon Application Recovery Controller currently supports enabling the following resources for zonal shift and zonal autoshift: Amazon EC2 Auto Scaling groups Amazon Elastic Kubernetes Service Application Load Balancer Network Load Balancer</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The number of objects that you want to return with this call.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Specifies that you want to receive the next page of results. Valid only if you received a nextToken response in the previous request. If you did, it indicates that more output is available. Set this parameter to the value provided by the previous call's nextToken response to request the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_managed_resource"
    values={[
        { label: 'get_managed_resource', value: 'get_managed_resource' },
        { label: 'list_managed_resources', value: 'list_managed_resources' }
    ]}
>
<TabItem value="get_managed_resource">

Get information about a resource that's been registered for zonal shifts with Amazon Application Recovery Controller in this Amazon Web Services Region. Resources that are registered for zonal shifts are managed resources in ARC. You can start zonal shifts and configure zonal autoshift for managed resources.

```sql
SELECT
name,
applied_weights,
arn,
autoshifts,
practice_run_configuration,
zonal_autoshift_status,
zonal_shifts
FROM aws.arc_zonal_shift.managed_resources
WHERE resource_identifier = '{{ resource_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_managed_resources">

Lists all the resources in your Amazon Web Services account in this Amazon Web Services Region that are managed for zonal shifts in Amazon Application Recovery Controller, and information about them. The information includes the zonal autoshift status for the resource, as well as the Amazon Resource Name (ARN), the Availability Zones that each resource is deployed in, and the resource name.

```sql
SELECT
name,
applied_weights,
arn,
autoshifts,
availability_zones,
practice_run_status,
zonal_autoshift_status,
zonal_shifts
FROM aws.arc_zonal_shift.managed_resources
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
