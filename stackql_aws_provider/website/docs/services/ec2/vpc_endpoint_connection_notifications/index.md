--- 
title: vpc_endpoint_connection_notifications
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_endpoint_connection_notifications
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

Creates, updates, deletes, gets or lists a <code>vpc_endpoint_connection_notifications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_endpoint_connection_notifications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2.vpc_endpoint_connection_notifications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_vpc_endpoint_connection_notifications"
    values={[
        { label: 'describe_vpc_endpoint_connection_notifications', value: 'describe_vpc_endpoint_connection_notifications' }
    ]}
>
<TabItem value="describe_vpc_endpoint_connection_notifications">

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
    <td><CopyableCode code="ConnectionEvents" /></td>
    <td><code>string</code></td>
    <td>The events for the notification. Valid values are Accept, Connect, Delete, and Reject.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionNotificationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the SNS topic for the notification.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionNotificationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the notification.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionNotificationState" /></td>
    <td><code>string</code></td>
    <td>The state of the notification.</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectionNotificationType" /></td>
    <td><code>string</code></td>
    <td>The type of notification.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the endpoint service.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceRegion" /></td>
    <td><code>string</code></td>
    <td>The Region for the endpoint service.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC endpoint.</td>
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
    <td><a href="#describe_vpc_endpoint_connection_notifications"><CopyableCode code="describe_vpc_endpoint_connection_notifications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ConnectionNotificationId"><code>ConnectionNotificationId</code></a>, <a href="#parameter-Filter"><code>Filter</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Describes the connection notifications for VPC endpoints and VPC endpoint services.</td>
</tr>
<tr>
    <td><a href="#create_vpc_endpoint_connection_notification"><CopyableCode code="create_vpc_endpoint_connection_notification" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ConnectionNotificationArn"><code>ConnectionNotificationArn</code></a>, <a href="#parameter-ConnectionEvents"><code>ConnectionEvents</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ServiceId"><code>ServiceId</code></a>, <a href="#parameter-VpcEndpointId"><code>VpcEndpointId</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td>Creates a connection notification for a specified VPC endpoint or VPC endpoint service. A connection notification notifies you of specific endpoint events. You must create an SNS topic to receive notifications. For more information, see Creating an Amazon SNS topic in the Amazon SNS Developer Guide. You can create a connection notification for interface endpoints only.</td>
</tr>
<tr>
    <td><a href="#modify_vpc_endpoint_connection_notification"><CopyableCode code="modify_vpc_endpoint_connection_notification" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ConnectionNotificationId"><code>ConnectionNotificationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a>, <a href="#parameter-ConnectionNotificationArn"><code>ConnectionNotificationArn</code></a>, <a href="#parameter-ConnectionEvents"><code>ConnectionEvents</code></a></td>
    <td>Modifies a connection notification for VPC endpoint or VPC endpoint service. You can change the SNS topic for the notification, or the events for which to be notified.</td>
</tr>
<tr>
    <td><a href="#delete_vpc_endpoint_connection_notifications"><CopyableCode code="delete_vpc_endpoint_connection_notifications" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ConnectionNotificationId"><code>ConnectionNotificationId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DryRun"><code>DryRun</code></a></td>
    <td>Deletes the specified VPC endpoint connection notifications.</td>
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
<tr id="parameter-ConnectionEvents">
    <td><CopyableCode code="ConnectionEvents" /></td>
    <td><code>array</code></td>
    <td>The endpoint events for which to receive notifications. Valid values are Accept, Connect, Delete, and Reject.</td>
</tr>
<tr id="parameter-ConnectionNotificationArn">
    <td><CopyableCode code="ConnectionNotificationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the SNS topic for the notifications.</td>
</tr>
<tr id="parameter-ConnectionNotificationId">
    <td><CopyableCode code="ConnectionNotificationId" /></td>
    <td><code>array</code></td>
    <td>The IDs of the notifications.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ClientToken">
    <td><CopyableCode code="ClientToken" /></td>
    <td><code>string</code></td>
    <td>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.</td>
</tr>
<tr id="parameter-ConnectionEvents">
    <td><CopyableCode code="ConnectionEvents" /></td>
    <td><code>array</code></td>
    <td>The events for the endpoint. Valid values are Accept, Connect, Delete, and Reject.</td>
</tr>
<tr id="parameter-ConnectionNotificationArn">
    <td><CopyableCode code="ConnectionNotificationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the SNS topic for the notification.</td>
</tr>
<tr id="parameter-ConnectionNotificationId">
    <td><CopyableCode code="ConnectionNotificationId" /></td>
    <td><code>string</code></td>
    <td>The ID of the notification.</td>
</tr>
<tr id="parameter-DryRun">
    <td><CopyableCode code="DryRun" /></td>
    <td><code>boolean</code></td>
    <td>Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.</td>
</tr>
<tr id="parameter-Filter">
    <td><CopyableCode code="Filter" /></td>
    <td><code>array</code></td>
    <td>The filters. connection-notification-arn - The ARN of the SNS topic for the notification. connection-notification-id - The ID of the notification. connection-notification-state - The state of the notification (Enabled | Disabled). connection-notification-type - The type of notification (Topic). service-id - The ID of the endpoint service. vpc-endpoint-id - The ID of the VPC endpoint.</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call. To retrieve the remaining results, make another request with the returned NextToken value.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to request the next page of results.</td>
</tr>
<tr id="parameter-ServiceId">
    <td><CopyableCode code="ServiceId" /></td>
    <td><code>string</code></td>
    <td>The ID of the endpoint service.</td>
</tr>
<tr id="parameter-VpcEndpointId">
    <td><CopyableCode code="VpcEndpointId" /></td>
    <td><code>string</code></td>
    <td>The ID of the endpoint.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_vpc_endpoint_connection_notifications"
    values={[
        { label: 'describe_vpc_endpoint_connection_notifications', value: 'describe_vpc_endpoint_connection_notifications' }
    ]}
>
<TabItem value="describe_vpc_endpoint_connection_notifications">

Describes the connection notifications for VPC endpoints and VPC endpoint services.

```sql
SELECT
ConnectionEvents,
ConnectionNotificationArn,
ConnectionNotificationId,
ConnectionNotificationState,
ConnectionNotificationType,
ServiceId,
ServiceRegion,
VpcEndpointId
FROM aws.ec2.vpc_endpoint_connection_notifications
WHERE region = '{{ region }}' -- required
AND DryRun = '{{ DryRun }}'
AND ConnectionNotificationId = '{{ ConnectionNotificationId }}'
AND Filter = '{{ Filter }}'
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc_endpoint_connection_notification"
    values={[
        { label: 'create_vpc_endpoint_connection_notification', value: 'create_vpc_endpoint_connection_notification' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc_endpoint_connection_notification">

Creates a connection notification for a specified VPC endpoint or VPC endpoint service. A connection notification notifies you of specific endpoint events. You must create an SNS topic to receive notifications. For more information, see Creating an Amazon SNS topic in the Amazon SNS Developer Guide. You can create a connection notification for interface endpoints only.

```sql
INSERT INTO aws.ec2.vpc_endpoint_connection_notifications (
ConnectionNotificationArn,
ConnectionEvents,
region,
DryRun,
ServiceId,
VpcEndpointId,
ClientToken
)
SELECT 
'{{ ConnectionNotificationArn }}',
'{{ ConnectionEvents }}',
'{{ region }}',
'{{ DryRun }}',
'{{ ServiceId }}',
'{{ VpcEndpointId }}',
'{{ ClientToken }}'
RETURNING
ClientToken,
ConnectionNotification
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_endpoint_connection_notifications
  props:
    - name: ConnectionNotificationArn
      value: "{{ ConnectionNotificationArn }}"
      description: Required parameter for the vpc_endpoint_connection_notifications resource.
    - name: ConnectionEvents
      value: "{{ ConnectionEvents }}"
      description: Required parameter for the vpc_endpoint_connection_notifications resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_endpoint_connection_notifications resource.
    - name: DryRun
      value: {{ DryRun }}
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
      description: Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is DryRunOperation. Otherwise, it is UnauthorizedOperation.
    - name: ServiceId
      value: "{{ ServiceId }}"
      description: The ID of the endpoint service.
      description: The ID of the endpoint service.
    - name: VpcEndpointId
      value: "{{ VpcEndpointId }}"
      description: The ID of the endpoint.
      description: The ID of the endpoint.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
      description: Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see How to ensure idempotency.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_vpc_endpoint_connection_notification"
    values={[
        { label: 'modify_vpc_endpoint_connection_notification', value: 'modify_vpc_endpoint_connection_notification' }
    ]}
>
<TabItem value="modify_vpc_endpoint_connection_notification">

Modifies a connection notification for VPC endpoint or VPC endpoint service. You can change the SNS topic for the notification, or the events for which to be notified.

```sql
UPDATE aws.ec2.vpc_endpoint_connection_notifications
SET 
-- No updatable properties
WHERE 
ConnectionNotificationId = '{{ ConnectionNotificationId }}' --required
AND region = '{{ region }}' --required
AND DryRun = {{ DryRun}}
AND ConnectionNotificationArn = '{{ ConnectionNotificationArn}}'
AND ConnectionEvents = '{{ ConnectionEvents}}'
RETURNING
ReturnValue;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_vpc_endpoint_connection_notifications"
    values={[
        { label: 'delete_vpc_endpoint_connection_notifications', value: 'delete_vpc_endpoint_connection_notifications' }
    ]}
>
<TabItem value="delete_vpc_endpoint_connection_notifications">

Deletes the specified VPC endpoint connection notifications.

```sql
DELETE FROM aws.ec2.vpc_endpoint_connection_notifications
WHERE ConnectionNotificationId = '{{ ConnectionNotificationId }}' --required
AND region = '{{ region }}' --required
AND DryRun = '{{ DryRun }}'
;
```
</TabItem>
</Tabs>
