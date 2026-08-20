--- 
title: traffic_distribution_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - traffic_distribution_groups
  - connect
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

Creates, updates, deletes, gets or lists a <code>traffic_distribution_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="traffic_distribution_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.traffic_distribution_groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_traffic_distribution_group"
    values={[
        { label: 'describe_traffic_distribution_group', value: 'describe_traffic_distribution_group' },
        { label: 'list_traffic_distribution_groups', value: 'list_traffic_distribution_groups' }
    ]}
>
<TabItem value="describe_traffic_distribution_group">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the traffic distribution group. (pattern: &lt;code&gt;^arn:(aws|aws-us-gov):connect:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-&#91;0-9&#93;&#123;1&#125;:&#91;0-9&#93;&#123;1,20&#125;:traffic-distribution-group/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the traffic distribution group. (pattern: &lt;code&gt;(^&#91;\S&#93;.*&#91;\S&#93;$)|(^&#91;\S&#93;$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN). (pattern: &lt;code&gt;arn:(aws|aws-us-gov):connect:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-&#91;0-9-&#93;&#123;1&#125;:&#91;0-9&#93;&#123;1,20&#125;:instance/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Whether this is the default traffic distribution group created during instance replication. The default traffic distribution group cannot be deleted by the DeleteTrafficDistributionGroup API. The default traffic distribution group is deleted as part of the process for deleting a replica. The SignInConfig distribution is available only on a default TrafficDistributionGroup (see the IsDefault parameter in the TrafficDistributionGroup data type). If you call UpdateTrafficDistribution with a modified SignInConfig and a non-default TrafficDistributionGroup, an InvalidRequestException is returned.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the traffic distribution group. (pattern: &lt;code&gt;(^&#91;\S&#93;.*&#91;\S&#93;$)|(^&#91;\S&#93;$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the traffic distribution group. CREATION_IN_PROGRESS means the previous CreateTrafficDistributionGroup operation is still in progress and has not yet completed. ACTIVE means the previous CreateTrafficDistributionGroup operation has succeeded. CREATION_FAILED indicates that the previous CreateTrafficDistributionGroup operation has failed. PENDING_DELETION means the previous DeleteTrafficDistributionGroup operation is still in progress and has not yet completed. DELETION_FAILED means the previous DeleteTrafficDistributionGroup operation has failed. UPDATE_IN_PROGRESS means the previous UpdateTrafficDistribution operation is still in progress and has not yet completed. (CREATION_IN_PROGRESS, ACTIVE, CREATION_FAILED, PENDING_DELETION, DELETION_FAILED, UPDATE_IN_PROGRESS)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_traffic_distribution_groups">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the traffic distribution group. (pattern: &lt;code&gt;^arn:(aws|aws-us-gov):connect:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-&#91;0-9&#93;&#123;1&#125;:&#91;0-9&#93;&#123;1,20&#125;:traffic-distribution-group/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the traffic distribution group. This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created. The ARN must be provided if the call is from the replicated Region. (pattern: &lt;code&gt;^&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instance_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the traffic distribution group. (pattern: &lt;code&gt;arn:(aws|aws-us-gov):connect:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-&#91;0-9-&#93;&#123;1&#125;:&#91;0-9&#93;&#123;1,20&#125;:instance/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Whether this is the default traffic distribution group created during instance replication. The default traffic distribution group cannot be deleted by the DeleteTrafficDistributionGroup API. The default traffic distribution group is deleted as part of the process for deleting a replica.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the traffic distribution group. (pattern: &lt;code&gt;(^&#91;\S&#93;.*&#91;\S&#93;$)|(^&#91;\S&#93;$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the traffic distribution group. CREATION_IN_PROGRESS means the previous CreateTrafficDistributionGroup operation is still in progress and has not yet completed. ACTIVE means the previous CreateTrafficDistributionGroup operation has succeeded. CREATION_FAILED indicates that the previous CreateTrafficDistributionGroup operation has failed. PENDING_DELETION means the previous DeleteTrafficDistributionGroup operation is still in progress and has not yet completed. DELETION_FAILED means the previous DeleteTrafficDistributionGroup operation has failed. UPDATE_IN_PROGRESS means the previous UpdateTrafficDistributionGroup operation is still in progress and has not yet completed. (CREATION_IN_PROGRESS, ACTIVE, CREATION_FAILED, PENDING_DELETION, DELETION_FAILED, UPDATE_IN_PROGRESS)</td>
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
    <td><a href="#describe_traffic_distribution_group"><CopyableCode code="describe_traffic_distribution_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-traffic_distribution_group_id"><code>traffic_distribution_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details and status of a traffic distribution group.</td>
</tr>
<tr>
    <td><a href="#list_traffic_distribution_groups"><CopyableCode code="list_traffic_distribution_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td>Lists traffic distribution groups.</td>
</tr>
<tr>
    <td><a href="#create_traffic_distribution_group"><CopyableCode code="create_traffic_distribution_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a></td>
    <td></td>
    <td>Creates a traffic distribution group given an Connect Customer instance that has been replicated. The SignInConfig distribution is available only on a default TrafficDistributionGroup (see the IsDefault parameter in the TrafficDistributionGroup data type). If you call UpdateTrafficDistribution with a modified SignInConfig and a non-default TrafficDistributionGroup, an InvalidRequestException is returned. For more information about creating traffic distribution groups, see Set up traffic distribution groups in the Connect Customer Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#delete_traffic_distribution_group"><CopyableCode code="delete_traffic_distribution_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-traffic_distribution_group_id"><code>traffic_distribution_group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a traffic distribution group. This API can be called only in the Region where the traffic distribution group is created. For more information about deleting traffic distribution groups, see Delete traffic distribution groups in the Connect Customer Administrator Guide.</td>
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
<tr id="parameter-traffic_distribution_group_id">
    <td><CopyableCode code="traffic_distribution_group_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the traffic distribution group. This can be the ID or the ARN of the traffic distribution group.</td>
</tr>
<tr id="parameter-instanceId">
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Connect Customer instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_traffic_distribution_group"
    values={[
        { label: 'describe_traffic_distribution_group', value: 'describe_traffic_distribution_group' },
        { label: 'list_traffic_distribution_groups', value: 'list_traffic_distribution_groups' }
    ]}
>
<TabItem value="describe_traffic_distribution_group">

Gets details and status of a traffic distribution group.

```sql
SELECT
arn,
description,
id,
instance_arn,
is_default,
name,
status,
tags
FROM aws.connect.traffic_distribution_groups
WHERE traffic_distribution_group_id = '{{ traffic_distribution_group_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_traffic_distribution_groups">

Lists traffic distribution groups.

```sql
SELECT
arn,
id,
instance_arn,
is_default,
name,
status
FROM aws.connect.traffic_distribution_groups
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND instanceId = '{{ instanceId }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_traffic_distribution_group"
    values={[
        { label: 'create_traffic_distribution_group', value: 'create_traffic_distribution_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_traffic_distribution_group">

Creates a traffic distribution group given an Connect Customer instance that has been replicated. The SignInConfig distribution is available only on a default TrafficDistributionGroup (see the IsDefault parameter in the TrafficDistributionGroup data type). If you call UpdateTrafficDistribution with a modified SignInConfig and a non-default TrafficDistributionGroup, an InvalidRequestException is returned. For more information about creating traffic distribution groups, see Set up traffic distribution groups in the Connect Customer Administrator Guide.

```sql
INSERT INTO aws.connect.traffic_distribution_groups (
Name,
Description,
InstanceId,
ClientToken,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ InstanceId }}' /* required */,
'{{ ClientToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
arn,
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: traffic_distribution_groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the traffic_distribution_groups resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: InstanceId
      value: "{{ InstanceId }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_traffic_distribution_group"
    values={[
        { label: 'delete_traffic_distribution_group', value: 'delete_traffic_distribution_group' }
    ]}
>
<TabItem value="delete_traffic_distribution_group">

Deletes a traffic distribution group. This API can be called only in the Region where the traffic distribution group is created. For more information about deleting traffic distribution groups, see Delete traffic distribution groups in the Connect Customer Administrator Guide.

```sql
DELETE FROM aws.connect.traffic_distribution_groups
WHERE traffic_distribution_group_id = '{{ traffic_distribution_group_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
