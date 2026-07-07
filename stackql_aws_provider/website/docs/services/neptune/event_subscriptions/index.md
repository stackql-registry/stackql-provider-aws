--- 
title: event_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - event_subscriptions
  - neptune
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

Creates, updates, deletes, gets or lists an <code>event_subscriptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="event_subscriptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune.event_subscriptions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_event_subscriptions"
    values={[
        { label: 'describe_event_subscriptions', value: 'describe_event_subscriptions' }
    ]}
>
<TabItem value="describe_event_subscriptions">

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
    <td><CopyableCode code="CustSubscriptionId" /></td>
    <td><code>string</code></td>
    <td>The event notification subscription Id.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomerAwsId" /></td>
    <td><code>string</code></td>
    <td>The Amazon customer account associated with the event notification subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating if the subscription is enabled. True indicates the subscription is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="EventCategoriesList" /></td>
    <td><code>string</code></td>
    <td>A list of event categories for the event notification subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="EventSubscriptionArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the event subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="SnsTopicArn" /></td>
    <td><code>string</code></td>
    <td>The topic ARN of the event notification subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceIdsList" /></td>
    <td><code>string</code></td>
    <td>A list of source IDs for the event notification subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceType" /></td>
    <td><code>string</code></td>
    <td>The source type for the event notification subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the event notification subscription. Constraints: Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist The status "no-permission" indicates that Neptune no longer has permission to post to the SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionCreationTime" /></td>
    <td><code>string</code></td>
    <td>The time the event notification subscription was created.</td>
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
    <td><a href="#describe_event_subscriptions"><CopyableCode code="describe_event_subscriptions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SubscriptionName"><code>SubscriptionName</code></a>, <a href="#parameter-Filters"><code>Filters</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status. If you specify a SubscriptionName, lists the description for that subscription.</td>
</tr>
<tr>
    <td><a href="#create_event_subscription"><CopyableCode code="create_event_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-SubscriptionName"><code>SubscriptionName</code></a>, <a href="#parameter-SnsTopicArn"><code>SnsTopicArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SourceType"><code>SourceType</code></a>, <a href="#parameter-EventCategories"><code>EventCategories</code></a>, <a href="#parameter-SourceIds"><code>SourceIds</code></a>, <a href="#parameter-Enabled"><code>Enabled</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates an event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console. You can specify the type of source (SourceType) you want to be notified of, provide a list of Neptune sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup. If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your Neptune sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all Neptune sources belonging to your customer account.</td>
</tr>
<tr>
    <td><a href="#modify_event_subscription"><CopyableCode code="modify_event_subscription" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-SubscriptionName"><code>SubscriptionName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SnsTopicArn"><code>SnsTopicArn</code></a>, <a href="#parameter-SourceType"><code>SourceType</code></a>, <a href="#parameter-EventCategories"><code>EventCategories</code></a>, <a href="#parameter-Enabled"><code>Enabled</code></a></td>
    <td>Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the AddSourceIdentifierToSubscription and RemoveSourceIdentifierFromSubscription calls. You can see a list of the event categories for a given SourceType by using the DescribeEventCategories action.</td>
</tr>
<tr>
    <td><a href="#delete_event_subscription"><CopyableCode code="delete_event_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-SubscriptionName"><code>SubscriptionName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an event notification subscription.</td>
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
<tr id="parameter-SnsTopicArn">
    <td><CopyableCode code="SnsTopicArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.</td>
</tr>
<tr id="parameter-SubscriptionName">
    <td><CopyableCode code="SubscriptionName" /></td>
    <td><code>string</code></td>
    <td>The name of the event notification subscription you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Enabled">
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value; set to true to activate the subscription.</td>
</tr>
<tr id="parameter-EventCategories">
    <td><CopyableCode code="EventCategories" /></td>
    <td><code>array</code></td>
    <td>A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the DescribeEventCategories action.</td>
</tr>
<tr id="parameter-Filters">
    <td><CopyableCode code="Filters" /></td>
    <td><code>array</code></td>
    <td>This parameter is not currently supported.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by MaxRecords .</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so that the remaining results can be retrieved. Default: 100 Constraints: Minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-SnsTopicArn">
    <td><CopyableCode code="SnsTopicArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.</td>
</tr>
<tr id="parameter-SourceIds">
    <td><CopyableCode code="SourceIds" /></td>
    <td><code>array</code></td>
    <td>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens. Constraints: If SourceIds are supplied, SourceType must also be provided. If the source type is a DB instance, then a DBInstanceIdentifier must be supplied. If the source type is a DB security group, a DBSecurityGroupName must be supplied. If the source type is a DB parameter group, a DBParameterGroupName must be supplied. If the source type is a DB snapshot, a DBSnapshotIdentifier must be supplied.</td>
</tr>
<tr id="parameter-SourceType">
    <td><CopyableCode code="SourceType" /></td>
    <td><code>string</code></td>
    <td>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned. Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</td>
</tr>
<tr id="parameter-SubscriptionName">
    <td><CopyableCode code="SubscriptionName" /></td>
    <td><code>string</code></td>
    <td>The name of the event notification subscription you want to describe.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>The tags to be applied to the new event subscription.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_event_subscriptions"
    values={[
        { label: 'describe_event_subscriptions', value: 'describe_event_subscriptions' }
    ]}
>
<TabItem value="describe_event_subscriptions">

Lists all the subscription descriptions for a customer account. The description for a subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID, CreationTime, and Status. If you specify a SubscriptionName, lists the description for that subscription.

```sql
SELECT
CustSubscriptionId,
CustomerAwsId,
Enabled,
EventCategoriesList,
EventSubscriptionArn,
SnsTopicArn,
SourceIdsList,
SourceType,
Status,
SubscriptionCreationTime
FROM aws.neptune.event_subscriptions
WHERE region = '{{ region }}' -- required
AND SubscriptionName = '{{ SubscriptionName }}'
AND Filters = '{{ Filters }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_event_subscription"
    values={[
        { label: 'create_event_subscription', value: 'create_event_subscription' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_event_subscription">

Creates an event notification subscription. This action requires a topic ARN (Amazon Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console. You can specify the type of source (SourceType) you want to be notified of, provide a list of Neptune sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup. If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your Neptune sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all Neptune sources belonging to your customer account.

```sql
INSERT INTO aws.neptune.event_subscriptions (
SubscriptionName,
SnsTopicArn,
region,
SourceType,
EventCategories,
SourceIds,
Enabled,
Tags
)
SELECT 
'{{ SubscriptionName }}',
'{{ SnsTopicArn }}',
'{{ region }}',
'{{ SourceType }}',
'{{ EventCategories }}',
'{{ SourceIds }}',
'{{ Enabled }}',
'{{ Tags }}'
RETURNING
CustSubscriptionId,
CustomerAwsId,
Enabled,
EventCategoriesList,
EventSubscriptionArn,
SnsTopicArn,
SourceIdsList,
SourceType,
Status,
SubscriptionCreationTime
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: event_subscriptions
  props:
    - name: SubscriptionName
      value: "{{ SubscriptionName }}"
      description: Required parameter for the event_subscriptions resource.
    - name: SnsTopicArn
      value: "{{ SnsTopicArn }}"
      description: Required parameter for the event_subscriptions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the event_subscriptions resource.
    - name: SourceType
      value: "{{ SourceType }}"
      description: The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned. Valid values: db-instance | db-cluster | db-parameter-group | db-security-group | db-snapshot | db-cluster-snapshot
      description: The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned. Valid values: db-instance | db-cluster | db-parameter-group | db-security-group | db-snapshot | db-cluster-snapshot
    - name: EventCategories
      value: "{{ EventCategories }}"
      description: A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the DescribeEventCategories action.
      description: A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType by using the DescribeEventCategories action.
    - name: SourceIds
      value: "{{ SourceIds }}"
      description: The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens. Constraints: If SourceIds are supplied, SourceType must also be provided. If the source type is a DB instance, then a DBInstanceIdentifier must be supplied. If the source type is a DB security group, a DBSecurityGroupName must be supplied. If the source type is a DB parameter group, a DBParameterGroupName must be supplied. If the source type is a DB snapshot, a DBSnapshotIdentifier must be supplied.
      description: The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens. Constraints: If SourceIds are supplied, SourceType must also be provided. If the source type is a DB instance, then a DBInstanceIdentifier must be supplied. If the source type is a DB security group, a DBSecurityGroupName must be supplied. If the source type is a DB parameter group, a DBParameterGroupName must be supplied. If the source type is a DB snapshot, a DBSnapshotIdentifier must be supplied.
    - name: Enabled
      value: {{ Enabled }}
      description: A Boolean value; set to true to activate the subscription, set to false to create the subscription but not activate it.
      description: A Boolean value; set to true to activate the subscription, set to false to create the subscription but not activate it.
    - name: Tags
      value: "{{ Tags }}"
      description: The tags to be applied to the new event subscription.
      description: The tags to be applied to the new event subscription.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_event_subscription"
    values={[
        { label: 'modify_event_subscription', value: 'modify_event_subscription' }
    ]}
>
<TabItem value="modify_event_subscription">

Modifies an existing event notification subscription. Note that you can't modify the source identifiers using this call; to change source identifiers for a subscription, use the AddSourceIdentifierToSubscription and RemoveSourceIdentifierFromSubscription calls. You can see a list of the event categories for a given SourceType by using the DescribeEventCategories action.

```sql
UPDATE aws.neptune.event_subscriptions
SET 
-- No updatable properties
WHERE 
SubscriptionName = '{{ SubscriptionName }}' --required
AND region = '{{ region }}' --required
AND SnsTopicArn = '{{ SnsTopicArn}}'
AND SourceType = '{{ SourceType}}'
AND EventCategories = '{{ EventCategories}}'
AND Enabled = {{ Enabled}}
RETURNING
CustSubscriptionId,
CustomerAwsId,
Enabled,
EventCategoriesList,
EventSubscriptionArn,
SnsTopicArn,
SourceIdsList,
SourceType,
Status,
SubscriptionCreationTime;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_event_subscription"
    values={[
        { label: 'delete_event_subscription', value: 'delete_event_subscription' }
    ]}
>
<TabItem value="delete_event_subscription">

Deletes an event notification subscription.

```sql
DELETE FROM aws.neptune.event_subscriptions
WHERE SubscriptionName = '{{ SubscriptionName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
