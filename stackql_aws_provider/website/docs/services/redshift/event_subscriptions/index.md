--- 
title: event_subscriptions
hide_title: false
hide_table_of_contents: false
keywords:
  - event_subscriptions
  - redshift
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.event_subscriptions" /></td></tr>
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
    <td>The name of the Amazon Redshift event notification subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="CustomerAwsId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account associated with the Amazon Redshift event notification subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>A boolean value indicating whether the subscription is enabled; true indicates that the subscription is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="EventCategoriesList" /></td>
    <td><code>string</code></td>
    <td>The list of Amazon Redshift event categories specified in the event notification subscription. Values: Configuration, Management, Monitoring, Security, Pending</td>
</tr>
<tr>
    <td><CopyableCode code="Severity" /></td>
    <td><code>string</code></td>
    <td>The event severity specified in the Amazon Redshift event notification subscription. Values: ERROR, INFO</td>
</tr>
<tr>
    <td><CopyableCode code="SnsTopicArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon SNS topic used by the event notification subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceIdsList" /></td>
    <td><code>string</code></td>
    <td>A list of the sources that publish events to the Amazon Redshift event notification subscription.</td>
</tr>
<tr>
    <td><CopyableCode code="SourceType" /></td>
    <td><code>string</code></td>
    <td>The source type of the events returned by the Amazon Redshift event notification, such as cluster, cluster-snapshot, cluster-parameter-group, cluster-security-group, or scheduled-action.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the Amazon Redshift event notification subscription. Constraints: Can be one of the following: active | no-permission | topic-not-exist The status "no-permission" indicates that Amazon Redshift no longer has permission to post to the Amazon SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.</td>
</tr>
<tr>
    <td><CopyableCode code="SubscriptionCreationTime" /></td>
    <td><code>string</code></td>
    <td>The date and time the Amazon Redshift event notification subscription was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>The list of tags for the event subscription.</td>
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
    <td><a href="#parameter-SubscriptionName"><code>SubscriptionName</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-TagKeys"><code>TagKeys</code></a>, <a href="#parameter-TagValues"><code>TagValues</code></a></td>
    <td>Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all subscriptions that have any combination of those values are returned. If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.</td>
</tr>
<tr>
    <td><a href="#create_event_subscription"><CopyableCode code="create_event_subscription" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-SubscriptionName"><code>SubscriptionName</code></a>, <a href="#parameter-SnsTopicArn"><code>SnsTopicArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SourceType"><code>SourceType</code></a>, <a href="#parameter-SourceIds"><code>SourceIds</code></a>, <a href="#parameter-EventCategories"><code>EventCategories</code></a>, <a href="#parameter-Severity"><code>Severity</code></a>, <a href="#parameter-Enabled"><code>Enabled</code></a>, <a href="#parameter-Tags"><code>Tags</code></a></td>
    <td>Creates an Amazon Redshift event notification subscription. This action requires an ARN (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console. You can specify the source type, and lists of Amazon Redshift source IDs, event categories, and event severities. Notifications will be sent for all events you want that match those criteria. For example, you can specify source type = cluster, source ID = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity = ERROR. The subscription will only send notifications for those ERROR events in the Availability and Backup categories for the specified clusters. If you specify both the source type and source IDs, such as source type = cluster and source identifier = my-cluster-1, notifications will be sent for all the cluster events for my-cluster-1. If you specify a source type but do not specify a source identifier, you will receive notice of the events for the objects of that type in your Amazon Web Services account. If you do not specify either the SourceType nor the SourceIdentifier, you will be notified of events generated from all Amazon Redshift sources belonging to your Amazon Web Services account. You must specify a source type if you specify a source ID.</td>
</tr>
<tr>
    <td><a href="#modify_event_subscription"><CopyableCode code="modify_event_subscription" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-SubscriptionName"><code>SubscriptionName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SnsTopicArn"><code>SnsTopicArn</code></a>, <a href="#parameter-SourceType"><code>SourceType</code></a>, <a href="#parameter-SourceIds"><code>SourceIds</code></a>, <a href="#parameter-EventCategories"><code>EventCategories</code></a>, <a href="#parameter-Severity"><code>Severity</code></a>, <a href="#parameter-Enabled"><code>Enabled</code></a></td>
    <td>Modifies an existing Amazon Redshift event notification subscription.</td>
</tr>
<tr>
    <td><a href="#delete_event_subscription"><CopyableCode code="delete_event_subscription" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-SubscriptionName"><code>SubscriptionName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Redshift event notification subscription.</td>
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
    <td>The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications. The ARN is created by Amazon SNS when you create a topic and subscribe to it.</td>
</tr>
<tr id="parameter-SubscriptionName">
    <td><CopyableCode code="SubscriptionName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Redshift event notification subscription to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Enabled">
    <td><CopyableCode code="Enabled" /></td>
    <td><code>boolean</code></td>
    <td>A Boolean value indicating if the subscription is enabled. true indicates the subscription is enabled</td>
</tr>
<tr id="parameter-EventCategories">
    <td><CopyableCode code="EventCategories" /></td>
    <td><code>array</code></td>
    <td>Specifies the Amazon Redshift event categories to be published by the event notification subscription. Values: configuration, management, monitoring, security, pending</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>An optional parameter that specifies the starting point to return a set of response records. When the results of a DescribeEventSubscriptions request exceed the value specified in MaxRecords, Amazon Web Services returns a value in the Marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the Marker parameter and retrying the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value. Default: 100 Constraints: minimum 20, maximum 100.</td>
</tr>
<tr id="parameter-Severity">
    <td><CopyableCode code="Severity" /></td>
    <td><code>string</code></td>
    <td>Specifies the Amazon Redshift event severity to be published by the event notification subscription. Values: ERROR, INFO</td>
</tr>
<tr id="parameter-SnsTopicArn">
    <td><CopyableCode code="SnsTopicArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the SNS topic to be used by the event notification subscription.</td>
</tr>
<tr id="parameter-SourceIds">
    <td><CopyableCode code="SourceIds" /></td>
    <td><code>array</code></td>
    <td>A list of one or more identifiers of Amazon Redshift source objects. All of the objects must be of the same type as was specified in the source type parameter. The event subscription will return only events generated by the specified objects. If not specified, then events are returned for all objects within the source type specified. Example: my-cluster-1, my-cluster-2 Example: my-snapshot-20131010</td>
</tr>
<tr id="parameter-SourceType">
    <td><CopyableCode code="SourceType" /></td>
    <td><code>string</code></td>
    <td>The type of source that will be generating the events. For example, if you want to be notified of events generated by a cluster, you would set this parameter to cluster. If this value is not specified, events are returned for all Amazon Redshift objects in your Amazon Web Services account. You must specify a source type in order to specify source IDs. Valid values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot, and scheduled-action.</td>
</tr>
<tr id="parameter-SubscriptionName">
    <td><CopyableCode code="SubscriptionName" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Redshift event notification subscription to be described.</td>
</tr>
<tr id="parameter-TagKeys">
    <td><CopyableCode code="TagKeys" /></td>
    <td><code>array</code></td>
    <td>A tag key or keys for which you want to return all matching event notification subscriptions that are associated with the specified key or keys. For example, suppose that you have subscriptions that are tagged with keys called owner and environment. If you specify both of these tag keys in the request, Amazon Redshift returns a response with the subscriptions that have either or both of these tag keys associated with them.</td>
</tr>
<tr id="parameter-TagValues">
    <td><CopyableCode code="TagValues" /></td>
    <td><code>array</code></td>
    <td>A tag value or values for which you want to return all matching event notification subscriptions that are associated with the specified tag value or values. For example, suppose that you have subscriptions that are tagged with values called admin and test. If you specify both of these tag values in the request, Amazon Redshift returns a response with the subscriptions that have either or both of these tag values associated with them.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tag instances.</td>
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

Lists descriptions of all the Amazon Redshift event notification subscriptions for a customer account. If you specify a subscription name, lists the description for that subscription. If you specify both tag keys and tag values in the same request, Amazon Redshift returns all event notification subscriptions that match any combination of the specified keys and values. For example, if you have owner and environment for tag keys, and admin and test for tag values, all subscriptions that have any combination of those values are returned. If both tag keys and values are omitted from the request, subscriptions are returned regardless of whether they have tag keys or values associated with them.

```sql
SELECT
CustSubscriptionId,
CustomerAwsId,
Enabled,
EventCategoriesList,
Severity,
SnsTopicArn,
SourceIdsList,
SourceType,
Status,
SubscriptionCreationTime,
Tags
FROM aws.redshift.event_subscriptions
WHERE region = '{{ region }}' -- required
AND SubscriptionName = '{{ SubscriptionName }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
AND TagKeys = '{{ TagKeys }}'
AND TagValues = '{{ TagValues }}'
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

Creates an Amazon Redshift event notification subscription. This action requires an ARN (Amazon Resource Name) of an Amazon SNS topic created by either the Amazon Redshift console, the Amazon SNS console, or the Amazon SNS API. To obtain an ARN with Amazon SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console. You can specify the source type, and lists of Amazon Redshift source IDs, event categories, and event severities. Notifications will be sent for all events you want that match those criteria. For example, you can specify source type = cluster, source ID = my-cluster-1 and mycluster2, event categories = Availability, Backup, and severity = ERROR. The subscription will only send notifications for those ERROR events in the Availability and Backup categories for the specified clusters. If you specify both the source type and source IDs, such as source type = cluster and source identifier = my-cluster-1, notifications will be sent for all the cluster events for my-cluster-1. If you specify a source type but do not specify a source identifier, you will receive notice of the events for the objects of that type in your Amazon Web Services account. If you do not specify either the SourceType nor the SourceIdentifier, you will be notified of events generated from all Amazon Redshift sources belonging to your Amazon Web Services account. You must specify a source type if you specify a source ID.

```sql
INSERT INTO aws.redshift.event_subscriptions (
SubscriptionName,
SnsTopicArn,
region,
SourceType,
SourceIds,
EventCategories,
Severity,
Enabled,
Tags
)
SELECT 
'{{ SubscriptionName }}',
'{{ SnsTopicArn }}',
'{{ region }}',
'{{ SourceType }}',
'{{ SourceIds }}',
'{{ EventCategories }}',
'{{ Severity }}',
'{{ Enabled }}',
'{{ Tags }}'
RETURNING
CustSubscriptionId,
CustomerAwsId,
Enabled,
EventCategoriesList,
Severity,
SnsTopicArn,
SourceIdsList,
SourceType,
Status,
SubscriptionCreationTime,
Tags
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
      description: The type of source that will be generating the events. For example, if you want to be notified of events generated by a cluster, you would set this parameter to cluster. If this value is not specified, events are returned for all Amazon Redshift objects in your Amazon Web Services account. You must specify a source type in order to specify source IDs. Valid values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot, and scheduled-action.
      description: The type of source that will be generating the events. For example, if you want to be notified of events generated by a cluster, you would set this parameter to cluster. If this value is not specified, events are returned for all Amazon Redshift objects in your Amazon Web Services account. You must specify a source type in order to specify source IDs. Valid values: cluster, cluster-parameter-group, cluster-security-group, cluster-snapshot, and scheduled-action.
    - name: SourceIds
      value: "{{ SourceIds }}"
      description: A list of one or more identifiers of Amazon Redshift source objects. All of the objects must be of the same type as was specified in the source type parameter. The event subscription will return only events generated by the specified objects. If not specified, then events are returned for all objects within the source type specified. Example: my-cluster-1, my-cluster-2 Example: my-snapshot-20131010
      description: A list of one or more identifiers of Amazon Redshift source objects. All of the objects must be of the same type as was specified in the source type parameter. The event subscription will return only events generated by the specified objects. If not specified, then events are returned for all objects within the source type specified. Example: my-cluster-1, my-cluster-2 Example: my-snapshot-20131010
    - name: EventCategories
      value: "{{ EventCategories }}"
      description: Specifies the Amazon Redshift event categories to be published by the event notification subscription. Values: configuration, management, monitoring, security, pending
      description: Specifies the Amazon Redshift event categories to be published by the event notification subscription. Values: configuration, management, monitoring, security, pending
    - name: Severity
      value: "{{ Severity }}"
      description: Specifies the Amazon Redshift event severity to be published by the event notification subscription. Values: ERROR, INFO
      description: Specifies the Amazon Redshift event severity to be published by the event notification subscription. Values: ERROR, INFO
    - name: Enabled
      value: {{ Enabled }}
      description: A boolean value; set to true to activate the subscription, and set to false to create the subscription but not activate it.
      description: A boolean value; set to true to activate the subscription, and set to false to create the subscription but not activate it.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tag instances.
      description: A list of tag instances.
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

Modifies an existing Amazon Redshift event notification subscription.

```sql
UPDATE aws.redshift.event_subscriptions
SET 
-- No updatable properties
WHERE 
SubscriptionName = '{{ SubscriptionName }}' --required
AND region = '{{ region }}' --required
AND SnsTopicArn = '{{ SnsTopicArn}}'
AND SourceType = '{{ SourceType}}'
AND SourceIds = '{{ SourceIds}}'
AND EventCategories = '{{ EventCategories}}'
AND Severity = '{{ Severity}}'
AND Enabled = {{ Enabled}}
RETURNING
CustSubscriptionId,
CustomerAwsId,
Enabled,
EventCategoriesList,
Severity,
SnsTopicArn,
SourceIdsList,
SourceType,
Status,
SubscriptionCreationTime,
Tags;
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

Deletes an Amazon Redshift event notification subscription.

```sql
DELETE FROM aws.redshift.event_subscriptions
WHERE SubscriptionName = '{{ SubscriptionName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
