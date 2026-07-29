--- 
title: cluster_events
hide_title: false
hide_table_of_contents: false
keywords:
  - cluster_events
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>cluster_events</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cluster_events" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.cluster_events" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_cluster_event"
    values={[
        { label: 'describe_cluster_event', value: 'describe_cluster_event' },
        { label: 'list_cluster_events', value: 'list_cluster_events' }
    ]}
>
<TabItem value="describe_cluster_event">

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
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the HyperPod cluster associated with the event. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:cluster/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>The name of the HyperPod cluster associated with the event. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human-readable description of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="event_details" /></td>
    <td><code>object</code></td>
    <td>Additional details about the event, including event-specific metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (UUID) of the event. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_level" /></td>
    <td><code>string</code></td>
    <td>The severity level of the event. Valid values are Info, Warn, and Error. (Info, Warn, Error)</td>
</tr>
<tr>
    <td><CopyableCode code="event_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the event occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the instance group associated with the event, if applicable. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The EC2 instance ID associated with the event, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource associated with the event. Valid values are Cluster, InstanceGroup, or Instance. (Cluster, InstanceGroup, Instance)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_cluster_events">

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
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the HyperPod cluster associated with the event. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:cluster/&#91;a-z0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>The name of the HyperPod cluster associated with the event. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief, human-readable description of the event.</td>
</tr>
<tr>
    <td><CopyableCode code="event_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier (UUID) of the event. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="event_level" /></td>
    <td><code>string</code></td>
    <td>The severity level of the event. Valid values are Info, Warn, and Error. (Info, Warn, Error)</td>
</tr>
<tr>
    <td><CopyableCode code="event_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the event occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_group_name" /></td>
    <td><code>string</code></td>
    <td>The name of the instance group associated with the event, if applicable. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Elastic Compute Cloud (EC2) instance ID associated with the event, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>The type of resource associated with the event. Valid values are Cluster, InstanceGroup, or Instance. (Cluster, InstanceGroup, Instance)</td>
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
    <td><a href="#describe_cluster_event"><CopyableCode code="describe_cluster_event" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves detailed information about a specific event for a given HyperPod cluster. This functionality is only supported when the NodeProvisioningMode is set to Continuous.</td>
</tr>
<tr>
    <td><a href="#list_cluster_events"><CopyableCode code="list_cluster_events" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of event summaries for a specified HyperPod cluster. The operation supports filtering, sorting, and pagination of results. This functionality is only supported when the NodeProvisioningMode is set to Continuous.</td>
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
    defaultValue="describe_cluster_event"
    values={[
        { label: 'describe_cluster_event', value: 'describe_cluster_event' },
        { label: 'list_cluster_events', value: 'list_cluster_events' }
    ]}
>
<TabItem value="describe_cluster_event">

Retrieves detailed information about a specific event for a given HyperPod cluster. This functionality is only supported when the NodeProvisioningMode is set to Continuous.

```sql
SELECT
cluster_arn,
cluster_name,
description,
event_details,
event_id,
event_level,
event_time,
instance_group_name,
instance_id,
resource_type
FROM aws.sagemaker.cluster_events
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_cluster_events">

Retrieves a list of event summaries for a specified HyperPod cluster. The operation supports filtering, sorting, and pagination of results. This functionality is only supported when the NodeProvisioningMode is set to Continuous.

```sql
SELECT
cluster_arn,
cluster_name,
description,
event_id,
event_level,
event_time,
instance_group_name,
instance_id,
resource_type
FROM aws.sagemaker.cluster_events
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
